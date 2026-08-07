/* ==========================================================================
   heat.az — behaviour
   i18n, scroll reveals, masked headings, marquee, accordion, nav, dock.
   ========================================================================== */
(function () {
  "use strict";

  var LANGS = ["az", "en", "ru"];
  var STORE_KEY = "heat-lang";
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------------- i18n -- */

  /* Azerbaijani is the default; only an explicit ?lang= or a previous choice
     overrides it — browser locale is deliberately ignored. */
  function pickLang() {
    var url = new URLSearchParams(location.search).get("lang");
    var saved = null;
    try { saved = localStorage.getItem(STORE_KEY); } catch (e) { /* private mode */ }
    return [url, saved].filter(function (l) {
      return LANGS.indexOf(l) > -1;
    })[0] || "az";
  }

  /* Builds line-masked heading markup from "line one|~muted line" values. */
  function renderLines(el, value) {
    el.textContent = "";
    value.split("|").forEach(function (line, i) {
      var muted = line.charAt(0) === "~";
      var span = document.createElement("span");
      span.className = "l" + (muted ? " mute" : "");
      var inner = document.createElement("b");
      inner.textContent = muted ? line.slice(1) : line;
      inner.style.setProperty("--d", i * 0.09 + "s");
      span.appendChild(inner);
      el.appendChild(span);
    });
  }

  function applyLang(lang) {
    var dict = window.I18N[lang];
    if (!dict) return;

    document.documentElement.lang = dict["html.lang"] || lang;
    document.title = dict["meta.title"] || document.title;
    var desc = document.querySelector('meta[name="description"]');
    if (desc && dict["meta.desc"]) desc.setAttribute("content", dict["meta.desc"]);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = dict[el.dataset.i18n];
      if (v != null) el.textContent = v;
    });

    /* keys whose copy contains <b> emphasis */
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var v = dict[el.dataset.i18nHtml];
      if (v != null) el.innerHTML = v;
    });

    document.querySelectorAll("[data-i18n-lines]").forEach(function (el) {
      var v = dict[el.dataset.i18nLines];
      if (v != null) renderLines(el, v);
    });

    /* attributes: data-i18n-attr="aria-label:key, title:key2" */
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.dataset.i18nAttr.split(",").forEach(function (pair) {
        var bits = pair.split(":");
        var attr = bits[0] && bits[0].trim();
        var v = dict[bits[1] && bits[1].trim()];
        if (attr && v != null) el.setAttribute(attr, v);
      });
    });

    document.querySelectorAll("[data-lang-opt]").forEach(function (b) {
      b.setAttribute("aria-checked", String(b.dataset.langOpt === lang));
    });
    var current = document.querySelector("[data-lang-current]");
    if (current) current.textContent = lang.toUpperCase();

    try { localStorage.setItem(STORE_KEY, lang); } catch (e) { /* ignore */ }
  }

  /* -------------------------------------------------------------- reveals -- */

  function initReveals() {
    var targets = document.querySelectorAll("[data-reveal], .lines, .hero__stack");
    if (reduced || !("IntersectionObserver" in window)) {
      targets.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          e.target.classList.add("in");
          io.unobserve(e.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    targets.forEach(function (el) { io.observe(el); });
  }

  /* Stagger children of any [data-stagger] container. */
  function initStagger() {
    document.querySelectorAll("[data-stagger]").forEach(function (box) {
      var step = parseFloat(box.dataset.stagger) || 0.07;
      Array.prototype.forEach.call(box.children, function (child, i) {
        var t = child.matches("[data-reveal]") ? child : child.querySelector("[data-reveal]");
        if (t) t.style.setProperty("--d", (i * step).toFixed(3) + "s");
      });
    });
  }

  /* ------------------------------------------------------------- counters -- */

  function initCounters() {
    var nodes = document.querySelectorAll("[data-count]");
    if (!nodes.length) return;
    if (reduced || !("IntersectionObserver" in window)) return;

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          run(e.target);
        });
      },
      { threshold: 0.4 }
    );
    nodes.forEach(function (n) { io.observe(n); });

    function run(el) {
      var target = parseInt(el.dataset.count, 10);
      if (isNaN(target)) return;
      var suffix = el.dataset.countSuffix || "";
      var dur = 1100;
      var t0 = performance.now();
      (function tick(now) {
        var p = Math.min(1, (now - t0) / dur);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      })(t0);
    }
  }

  /* -------------------------------------------------------------- marquee -- */

  function initMarquee() {
    document.querySelectorAll(".marquee__track").forEach(function (track) {
      /* duplicate the row once so the -50% keyframe loops seamlessly */
      track.innerHTML += track.innerHTML;
      track.querySelectorAll("img").forEach(function (img, i) {
        if (i >= track.children.length / 2) img.setAttribute("aria-hidden", "true");
      });
    });
  }

  /* ------------------------------------------------------------ accordion -- */

  function initAccordion() {
    document.querySelectorAll(".acc").forEach(function (acc) {
      acc.addEventListener("click", function (ev) {
        var btn = ev.target.closest(".acc__btn");
        if (!btn) return;
        var item = btn.closest(".acc__item");
        var open = item.classList.contains("is-open");

        acc.querySelectorAll(".acc__item.is-open").forEach(function (other) {
          other.classList.remove("is-open");
          other.querySelector(".acc__btn").setAttribute("aria-expanded", "false");
        });

        if (!open) {
          item.classList.add("is-open");
          btn.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  /* ------------------------------------------------------------------ nav -- */

  function initNav() {
    var nav = document.querySelector(".nav");
    var burger = document.querySelector(".nav__burger");
    var menu = document.querySelector(".nav__menu");
    var lang = document.querySelector(".lang");
    var dock = document.querySelector(".dock");
    var foot = document.querySelector(".foot");

    /* stuck state + dock visibility */
    var onScroll = function () {
      if (nav) nav.classList.toggle("is-stuck", window.scrollY > 24);
      if (dock && foot) {
        var r = foot.getBoundingClientRect();
        dock.classList.toggle("is-hidden", r.top < window.innerHeight - 40);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    /* mobile menu */
    function setMenu(open) {
      if (!menu || !burger) return;
      menu.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", String(open));
      document.body.classList.toggle("is-locked", open);
      menu.querySelectorAll("a").forEach(function (a, i) {
        a.style.transitionDelay = open ? 0.08 + i * 0.05 + "s" : "0s";
      });
    }
    if (burger) {
      burger.addEventListener("click", function () {
        setMenu(burger.getAttribute("aria-expanded") !== "true");
      });
    }
    if (menu) {
      menu.addEventListener("click", function (ev) {
        if (ev.target.closest("a")) setMenu(false);
      });
    }

    /* language dropdown */
    if (lang) {
      var btn = lang.querySelector(".lang__btn");
      btn.addEventListener("click", function (ev) {
        ev.stopPropagation();
        var open = !lang.classList.contains("is-open");
        lang.classList.toggle("is-open", open);
        btn.setAttribute("aria-expanded", String(open));
      });
      lang.addEventListener("click", function (ev) {
        var opt = ev.target.closest("[data-lang-opt]");
        if (!opt) return;
        applyLang(opt.dataset.langOpt);
        lang.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
      });
    }

    document.addEventListener("click", function () {
      if (lang) {
        lang.classList.remove("is-open");
        var b = lang.querySelector(".lang__btn");
        if (b) b.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", function (ev) {
      if (ev.key !== "Escape") return;
      if (lang) lang.classList.remove("is-open");
      setMenu(false);
    });

    /* active link highlight */
    var links = document.querySelectorAll(".nav__links a[href^='#']");
    var sections = [];
    links.forEach(function (a) {
      var s = document.querySelector(a.getAttribute("href"));
      if (s) sections.push({ a: a, s: s });
    });
    if (sections.length && "IntersectionObserver" in window) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (e) {
            if (!e.isIntersecting) return;
            links.forEach(function (l) { l.classList.remove("is-active"); });
            var hit = sections.filter(function (p) { return p.s === e.target; })[0];
            if (hit) hit.a.classList.add("is-active");
          });
        },
        { rootMargin: "-45% 0px -50% 0px" }
      );
      sections.forEach(function (p) { io.observe(p.s); });
    }
  }

  /* --------------------------------------------------------- hero parallax -- */

  function initParallax() {
    var stack = document.querySelector(".hero__stack");
    if (!stack || reduced || window.matchMedia("(hover: none)").matches) return;

    stack.classList.add("has-parallax");

    /* CSS composes --px/--py with each card's authored fan transform */
    stack.addEventListener("mousemove", function (ev) {
      var r = stack.getBoundingClientRect();
      var x = (ev.clientX - r.left) / r.width - 0.5;
      var y = (ev.clientY - r.top) / r.height - 0.5;
      stack.style.setProperty("--px", (-x * 22).toFixed(2) + "px");
      stack.style.setProperty("--py", (-y * 22).toFixed(2) + "px");
    });

    stack.addEventListener("mouseleave", function () {
      stack.style.setProperty("--px", "0px");
      stack.style.setProperty("--py", "0px");
    });
  }

  /* ------------------------------------------------------------------ go -- */

  applyLang(pickLang());
  initStagger();
  initMarquee();
  initAccordion();
  initNav();
  initCounters();
  initParallax();
  requestAnimationFrame(initReveals);
})();
