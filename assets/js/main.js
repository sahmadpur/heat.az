/* ==========================================================================
   heat.az — behaviour
   Reveals, counters, marquee, service cards, analyzer tabs, certificates
   lightbox, FAQ accordion, nav and the WhatsApp request form.
   ========================================================================== */
(function () {
  "use strict";

  var WHATSAPP = "994553487675";
  var AUTO_MS = 10000; /* flue-gas readouts rotate on this interval */
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Certificate tiles. Drop a scan into assets/img/certs/ and set `img` — the
     tile then becomes clickable and opens in the lightbox. While `img` is null
     the tile renders as a labelled placeholder and is inert. */
  var CERTS = [
    {
      label: "FHN Lisenziyası",
      org: "Fövqəladə Hallar Nazirliyi",
      note: "Montaj, sazlama və təmir icazəsi",
      img: null
    },
    {
      label: "Təhlükə Potensiallı Obyektlər",
      org: "Fövqəladə Hallar Nazirliyi",
      note: "Buxar və suqızdırıcı qazanlar, təzyiqli qablar",
      img: null
    },
    {
      label: "İstehsalçı Akkreditasiyası",
      org: "Odluq və qazan istehsalçıları",
      note: "Mühəndis heyəti üzrə ixtisaslaşma",
      img: null
    },
    {
      label: "İstehsalçı Akkreditasiyası",
      org: "Kompressor və generator istehsalçıları",
      note: "Təlim mərkəzi sertifikatları",
      img: null
    }
  ];

  /* -------------------------------------------------------------- reveals -- */

  function initReveals() {
    var targets = document.querySelectorAll("[data-reveal]");
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

  /* Stagger direct children of any [data-stagger] container. */
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
    if (!nodes.length || reduced || !("IntersectionObserver" in window)) return;

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

  /* --------------------------------------------------------- service cards -- */

  function initServiceCards() {
    document.querySelectorAll(".svc__toggle").forEach(function (btn) {
      var card = btn.closest(".svc");
      var txt = btn.querySelector(".svc__toggleTxt");
      btn.addEventListener("click", function () {
        var open = !card.classList.contains("is-open");
        card.classList.toggle("is-open", open);
        btn.setAttribute("aria-expanded", String(open));
        if (txt) txt.textContent = open ? "Yığışdır" : "Ətraflı";
      });
    });
  }

  /* -------------------------------------------------------- analyzer tabs -- */

  function initTabs() {
    var list = document.querySelector(".readouts");
    if (!list) return;
    var grid = document.querySelector(".analyz__grid");
    var tabs = Array.prototype.slice.call(list.querySelectorAll("[role='tab']"));
    var panels = tabs.map(function (t) {
      return document.getElementById(t.getAttribute("aria-controls"));
    }).filter(Boolean);

    var timer = null;
    var startedAt = 0;
    var left = AUTO_MS;
    var visible = false;
    var paused = false;
    /* auto-updating content is a nuisance without motion, so honour the pref */
    var stopped = reduced;

    function select(tab, focus) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.classList.toggle("is-active", on);
        t.setAttribute("aria-selected", String(on));
        t.tabIndex = on ? 0 : -1;
        var panel = document.getElementById(t.getAttribute("aria-controls"));
        if (panel) panel.hidden = !on;
      });
      if (focus) tab.focus();
    }

    /* Every panel is padded out to the tallest one, so the block keeps a
       constant height as the rotation swaps the copy. */
    function lockHeight() {
      var tallest = 0;
      panels.forEach(function (p) {
        var was = p.hidden;
        p.hidden = false;
        p.style.minHeight = "";
        tallest = Math.max(tallest, p.offsetHeight);
        p.hidden = was;
      });
      panels.forEach(function (p) { p.style.minHeight = tallest + "px"; });
    }

    /* ---- autoplay: advance every 10s ---- */

    function advance() {
      var i = tabs.indexOf(list.querySelector("[aria-selected='true']"));
      select(tabs[(i + 1) % tabs.length], false);
    }

    /* A timeout chain rather than an interval, so a pause can bank the time
       already served; the CSS sweep freezes alongside it and the two stay in
       step. `startedAt`/`left` track the current leg. */
    function schedule(ms) {
      clearTimeout(timer);
      left = ms;
      startedAt = Date.now();
      timer = setTimeout(function () {
        advance();
        schedule(AUTO_MS);
      }, ms);
    }

    function play() {
      if (stopped || paused || !visible || timer) return;
      schedule(left);
    }

    /* keepProgress: hovering banks the remainder; leaving the viewport or
       stopping resets the leg so the next start gets a clean ten seconds */
    function halt(keepProgress) {
      if (timer && keepProgress) left = Math.max(400, left - (Date.now() - startedAt));
      else if (!keepProgress) left = AUTO_MS;
      clearTimeout(timer);
      timer = null;
    }

    /* the visitor picking a gas ends the rotation for good — nothing should
       move the copy out from under them once they have chosen */
    function stop() {
      stopped = true;
      halt(false);
    }

    function setPaused(state) {
      if (paused === state) return;
      paused = state;
      if (paused) halt(true);
      else play();
    }

    list.addEventListener("click", function (ev) {
      var tab = ev.target.closest("[role='tab']");
      if (!tab) return;
      stop();
      select(tab, false);
    });

    list.addEventListener("keydown", function (ev) {
      var i = tabs.indexOf(document.activeElement);
      if (i < 0) return;
      var next = null;
      if (ev.key === "ArrowRight" || ev.key === "ArrowDown") next = tabs[(i + 1) % tabs.length];
      else if (ev.key === "ArrowLeft" || ev.key === "ArrowUp") next = tabs[(i - 1 + tabs.length) % tabs.length];
      else if (ev.key === "Home") next = tabs[0];
      else if (ev.key === "End") next = tabs[tabs.length - 1];
      if (!next) return;
      ev.preventDefault();
      stop();
      select(next, true);
    });

    /* hovering or tabbing into the block holds the current gas while it is read */
    if (grid) {
      grid.addEventListener("mouseenter", function () { setPaused(true); });
      grid.addEventListener("mouseleave", function () { setPaused(false); });
      grid.addEventListener("focusin", function () { setPaused(true); });
      grid.addEventListener("focusout", function () {
        if (!grid.contains(document.activeElement)) setPaused(false);
      });
    }

    lockHeight();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(lockHeight);

    var resizeT;
    window.addEventListener("resize", function () {
      clearTimeout(resizeT);
      resizeT = setTimeout(lockHeight, 200);
    }, { passive: true });

    /* only run while the block is on screen */
    if (grid && "IntersectionObserver" in window) {
      new IntersectionObserver(
        function (entries) {
          visible = entries[0].isIntersecting;
          if (visible) play();
          else halt(false);
        },
        { threshold: 0.25 }
      ).observe(grid);
    } else {
      visible = true;
      play();
    }
  }

  /* ---------------------------------------------------------- certificates -- */

  function initCerts() {
    var wrap = document.getElementById("certs");
    if (!wrap) return;

    var box = document.getElementById("lightbox");
    var img = document.getElementById("lightbox-img");
    var title = document.getElementById("lightbox-title");
    var org = document.getElementById("lightbox-org");
    var opener = null;

    CERTS.forEach(function (c) {
      var li = document.createElement("li");
      var el = document.createElement(c.img ? "button" : "div");
      el.className = "cert" + (c.img ? " cert--ready" : "");
      if (c.img) el.type = "button";

      var frame = document.createElement("span");
      frame.className = "cert__frame";
      if (c.img) {
        var thumb = new Image();
        thumb.src = c.img;
        thumb.alt = c.label + " — " + c.org;
        thumb.loading = "lazy";
        frame.appendChild(thumb);
      } else {
        frame.innerHTML =
          '<svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-doc"/></svg>';
      }

      var meta = document.createElement("span");
      meta.innerHTML =
        '<span class="cert__label"></span>' +
        '<span class="cert__org"></span>' +
        '<span class="cert__note"></span>';
      meta.querySelector(".cert__label").textContent = c.label;
      meta.querySelector(".cert__org").textContent = c.org;
      meta.querySelector(".cert__note").textContent = c.img
        ? c.note
        : "Sənəd skanı əlavə olunacaq";

      el.appendChild(frame);
      el.appendChild(meta);
      li.appendChild(el);
      wrap.appendChild(li);

      if (!c.img) return;
      el.addEventListener("click", function () { open(c, el); });
    });

    function open(c, from) {
      if (!box) return;
      opener = from;
      img.src = c.img;
      img.alt = c.label + " — " + c.org;
      title.textContent = c.label;
      org.textContent = c.org + " · " + c.note;
      box.hidden = false;
      document.body.classList.add("is-locked");
      box.querySelector(".lightbox__x").focus();
    }

    function close() {
      if (!box || box.hidden) return;
      box.hidden = true;
      img.removeAttribute("src");
      document.body.classList.remove("is-locked");
      if (opener) opener.focus();
      opener = null;
    }

    if (!box) return;

    box.addEventListener("click", function (ev) {
      if (ev.target.closest("[data-close]")) close();
    });

    /* keep focus inside the dialog while it is open */
    box.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape") { close(); return; }
      if (ev.key !== "Tab") return;
      var focusable = box.querySelectorAll("button, [href], img[tabindex]");
      if (!focusable.length) return;
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (ev.shiftKey && document.activeElement === first) {
        ev.preventDefault();
        last.focus();
      } else if (!ev.shiftKey && document.activeElement === last) {
        ev.preventDefault();
        first.focus();
      }
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
    var dock = document.querySelector(".dock");
    var foot = document.querySelector(".foot");

    var onScroll = function () {
      if (nav) nav.classList.toggle("is-stuck", window.scrollY > 24);
      if (dock && foot) {
        var r = foot.getBoundingClientRect();
        dock.classList.toggle("is-hidden", r.top < window.innerHeight - 40);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    function setMenu(open) {
      if (!menu || !burger) return;
      menu.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", String(open));
      document.body.classList.toggle("is-locked", open);
      menu.querySelectorAll("a").forEach(function (a, i) {
        a.style.transitionDelay = open ? 0.06 + i * 0.04 + "s" : "0s";
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

    document.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape") setMenu(false);
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

  /* ----------------------------------------------------------------- form -- */

  /* No backend: the request is composed into a WhatsApp message and handed to
     the visitor's client. Validation stays inline — no alert(), no navigation
     until every required field is filled. */
  function initForm() {
    var form = document.getElementById("request-form");
    if (!form) return;

    var rules = [
      { id: "f-name", err: "e-name", test: function (v) { return v.trim().length > 1; } },
      {
        id: "f-phone",
        err: "e-phone",
        test: function (v) { return (v.match(/\d/g) || []).length >= 7; }
      },
      { id: "f-type", err: "e-type", test: function (v) { return v !== ""; } }
    ];

    function mark(rule, ok) {
      var field = document.getElementById(rule.id).closest(".field");
      var err = document.getElementById(rule.err);
      field.classList.toggle("has-error", !ok);
      if (err) err.hidden = ok;
    }

    rules.forEach(function (rule) {
      var input = document.getElementById(rule.id);
      /* clear an error as soon as the visitor fixes it */
      input.addEventListener("input", function () {
        if (input.closest(".field").classList.contains("has-error")) {
          mark(rule, rule.test(input.value));
        }
      });
      input.addEventListener("change", function () {
        if (input.closest(".field").classList.contains("has-error")) {
          mark(rule, rule.test(input.value));
        }
      });
    });

    form.addEventListener("submit", function (ev) {
      ev.preventDefault();

      var firstBad = null;
      rules.forEach(function (rule) {
        var input = document.getElementById(rule.id);
        var ok = rule.test(input.value);
        mark(rule, ok);
        if (!ok && !firstBad) firstBad = input;
      });
      if (firstBad) { firstBad.focus(); return; }

      var val = function (id) { return (document.getElementById(id).value || "").trim(); };
      var lines = [
        "Salam! heat.az saytından sorğu göndərirəm.",
        "",
        "Ad, Soyad: " + val("f-name"),
        val("f-company") ? "Şirkət / Obyekt: " + val("f-company") : null,
        "Əlaqə nömrəsi: " + val("f-phone"),
        "Xidmət növü: " + val("f-type"),
        val("f-msg") ? "Qeyd: " + val("f-msg") : null
      ].filter(Boolean);

      window.open(
        "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(lines.join("\n")),
        "_blank",
        "noopener"
      );
    });
  }

  /* ------------------------------------------------------------------ go -- */

  initStagger();
  initMarquee();
  initServiceCards();
  initTabs();
  initCerts();
  initAccordion();
  initNav();
  initCounters();
  initForm();
  requestAnimationFrame(initReveals);
})();
