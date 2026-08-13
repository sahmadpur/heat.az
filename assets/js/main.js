/* ==========================================================================
   heat.az — behaviour
   Reveals, counters, marquee, photo stacks, service cards, analyzer tabs,
   certificates lightbox, photo albums, FAQ accordion, nav and the WhatsApp
   request form.
   ========================================================================== */
(function () {
  "use strict";

  var WHATSAPP = "994553487675";
  var AUTO_MS = 10000; /* flue-gas readouts rotate on this interval */
  var SHOTS_MS = 6000; /* card photo stacks crossfade on this interval */
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Certificate tiles. Scans live in assets/img/certs/ — `thumb` feeds the tile,
     `img` the lightbox; both are rendered from licenses/*.pdf with pdftoppm.
     While `img` is null the tile renders as a labelled placeholder and is inert. */
  var CERTS = [
    {
      label: "Lisenziya EL-388/2026",
      org: "İqtisadiyyat Nazirliyi",
      note: "Təhlükə potensiallı obyektlərin diaqnostikası",
      img: "assets/img/certs/lisenziya-diaqnostika.jpg",
      thumb: "assets/img/certs/lisenziya-diaqnostika-th.jpg"
    },
    {
      label: "Lisenziya EL-380/2026",
      org: "İqtisadiyyat Nazirliyi",
      note: "Qaldırıcı qurğular, qazanlar və tutumların quraşdırılması",
      img: "assets/img/certs/lisenziya-qurasdirma.jpg",
      thumb: "assets/img/certs/lisenziya-qurasdirma-th.jpg"
    },
    {
      label: "Combustion Management System",
      org: "LAMTEC",
      note: "CMS quraşdırma, proqramlaşdırma və nasazlıq analizi",
      img: "assets/img/certs/lamtec-cms.jpg",
      thumb: "assets/img/certs/lamtec-cms-th.jpg"
    },
    {
      label: "ETAMATIC Burner Control",
      org: "LAMTEC",
      note: "O₂ ölçmə, CO/H₂ təyini və alov detektorları",
      img: "assets/img/certs/lamtec-etamatic.jpg",
      thumb: "assets/img/certs/lamtec-etamatic-th.jpg"
    },
    {
      label: "RIELLO Odluq Təlimi",
      org: "E-GAZ / Riello",
      note: "Motorin və təbii qaz odluqları üzrə ixtisaslaşma",
      img: "assets/img/certs/riello-brulor.jpg",
      thumb: "assets/img/certs/riello-brulor-th.jpg"
    },
    {
      label: "Kompressor Servisi",
      org: "DUCOMP Compressor",
      note: "Hava kompressorlarının montaj, baxım və təmiri",
      img: "assets/img/certs/ducomp-melikov.jpg",
      thumb: "assets/img/certs/ducomp-melikov-th.jpg"
    },
    {
      label: "Kompressor Servisi",
      org: "DUCOMP Compressor",
      note: "Hava kompressorlarının montaj, baxım və təmiri",
      img: "assets/img/certs/ducomp-bayramov.jpg",
      thumb: "assets/img/certs/ducomp-bayramov-th.jpg"
    }
  ];

  /* Photo albums for qalereya.html. `dir` is the folder under
     assets/img/gallery/ that holds 01.webp…NN.webp (long side 1600) plus
     thumb/01.webp…NN.webp (long side 640); `n` is how many photos are in it.
     Adding an album = one entry here. */
  var ALBUMS = [
    {
      title: "Lamtec BT320 idarə sistemli Baltur odluğun proqramlaşdırılması",
      dir: "lamtec-baltur",
      n: 4
    },
    {
      title:
        "Paprec Azerbaijan məişət tullantılarının yandırılması zavodunda 20 MW gücündə sənaye odluğunun periodik servisi",
      dir: "paprec-20mw",
      n: 13
    },
    {
      title: "Pozitron MMC Hamworthy odluğun servisi",
      dir: "pozitron-hamworthy",
      n: 5
    },
    {
      title: "Yello Bank güc panelinin hazırlanması",
      dir: "yello-bank",
      n: 10
    },
    {
      title: "Aksa AC400 markalı generatorun əsaslı təmiri və yenidənqurulması",
      dir: "aksa-ac400-generator",
      n: 10
    },
    {
      title: "Dəmirçi Tower qazanxana idarə panelinin yenidən qurulması",
      dir: "demirci-tower-panel",
      n: 10
    },
    {
      title: "Gözəl Təbiət MMC 9 MW odluqlarının periodik servisi",
      dir: "gozel-tebiet-9mw",
      n: 15
    },
    {
      title: "Zirə Agro Zantingh odluqların periodik servisi",
      dir: "zire-agro-zantingh",
      n: 6
    },
    {
      title: "Era Agro MMC qazanxana servisi",
      dir: "era-agro-qazanxana",
      n: 6
    },
    {
      title:
        "Sienmar MMC-yə məxsus vintli hava kompressorunun rekonstruksiya və modernizasiyası",
      dir: "sienmar-kompressor",
      n: 9
    },
    {
      title: "Dünyagöz klinikası Ecomak vintli hava kompressorunun periodik servisi",
      dir: "dunyagoz-ecomak-kompressor",
      n: 6
    },
    {
      title: "Masallı Rayon Mərkəzi Xəstəxanası generator servisi",
      dir: "masalli-xestexana-generator",
      n: 12
    },
    {
      title: "Sənaye və dövriyyə nasoslarının sazlanması",
      dir: "senaye-nasos-sazlama",
      n: 7
    },
    {
      title:
        "Red Globe Agro 8,6 MW gücə sahib sənaye odluqlarının əsaslı rekonstruksiya və modifikasiyası",
      dir: "red-globe-8-6mw",
      n: 30
    },
    {
      title:
        "Azərtoxum MMC silo qurutma odluğunun avtomatika və qaz yolu modifikasiyası",
      dir: "azertoxum-silo-odluq",
      n: 15
    },
    {
      title:
        "GreenTech MMC Autoflame idarə sisteminin yenisi ilə əvəz olunması və proqramlanması",
      dir: "greentech-autoflame",
      n: 9
    },
    {
      title:
        "Ecoprod istixana kompleksi üçün karbonmonoksid nəzarət panelinin yenidən qurulması",
      dir: "ecoprod-co2-panel",
      n: 6
    },
    {
      title: "STN Plaza qazanxana odluqlarının servisi",
      dir: "stn-plaza-odluq",
      n: 8
    },
    {
      title: "Patron çərəz istehsalı müəssisəsində vintli hava kompressorunun servisi",
      dir: "patron-kompressor",
      n: 6
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

  /* --------------------------------------------------------- client orbit -- */

  /* A small solar system: the HeatTech mark is the sun, each client a planet on
     a drawn orbit. A ring holds only as many DOT-wide bubbles as fit its
     circumference with GAP left between them, and the rings step out by DOT +
     GAP, so no two planets can touch. Everything is in % of the box, so the
     system scales with it. */
  var DOT = 9;      /* % of the box — planet diameter */
  var GAP = 2;      /* % — clear space between neighbouring planets */
  var R_IN = 20;    /* % — innermost orbit, clear of the sun */
  var SPIN_IN = 60; /* s — one turn of the innermost orbit */

  function ringPlan(n) {
    /* a planet spans 2*asin((DOT+GAP)/2r) of an orbit of radius r; a full turn
       holds floor(2π / that) of them */
    var rings = [];
    var room = 0;
    for (var r = R_IN; room < n; r += DOT + GAP) {
      var cap = Math.floor(Math.PI / Math.asin(Math.min(1, (DOT + GAP) / (2 * r))));
      rings.push({ r: r, cap: cap, count: 0 });
      room += cap;
    }

    /* share the clients out in proportion to capacity, then hand the rounding
       remainder to the roomiest (outermost) orbits, so no orbit is left holding
       a single lonely planet and none is pushed past its capacity */
    rings.forEach(function (ring) { ring.count = Math.floor((n * ring.cap) / room); });
    var left = rings.reduce(function (rest, ring) { return rest - ring.count; }, n);
    for (var i = rings.length - 1; left > 0; i = (i + rings.length - 1) % rings.length) {
      if (rings[i].count < rings[i].cap) { rings[i].count++; left--; }
    }
    return rings;
  }

  function initClientOrbit() {
    var orbit = document.querySelector(".orbit");
    if (!orbit) return;

    var list = orbit.querySelector(".orbit__ring");
    var items = Array.prototype.slice.call(list.children);
    /* the client list alone leaves the outer orbits sparse — run a second copy of
       it so the rings fill out. The copies land a full list behind the originals,
       so a mark and its twin never sit on the same orbit */
    items = items.concat(items.map(function (el) { return el.cloneNode(true); }));
    /* a planet big enough to read a mark no longer fits the orbits on a phone —
       there the same items lay out as a plain grid, so watch the breakpoint */
    var narrow = window.matchMedia("(max-width: 640px)");

    function place() {
      Array.prototype.forEach.call(orbit.querySelectorAll(".orbit__path"), function (path) {
        path.remove();
      });

      if (narrow.matches) {
        items.forEach(function (el) { el.removeAttribute("style"); list.appendChild(el); });
        orbit.classList.add("is-placed");
        return;
      }

      var idx = 0;
      ringPlan(items.length).forEach(function (ring, i) {
        /* one turning ring per orbit: it draws the orbit line, and carries its
           own planets so each orbit can run at its own speed */
        var path = document.createElement("div");
        path.className = "orbit__path";
        path.style.setProperty("--d", (2 * ring.r).toFixed(2) + "%");
        /* the outer planets take longer to come round, as they should */
        path.style.setProperty("--spin", (SPIN_IN * Math.pow(ring.r / R_IN, 1.5)).toFixed(0) + "s");
        orbit.appendChild(path);

        for (var k = 0; k < ring.count; k++, idx++) {
          /* every other orbit starts half a step round, so the planets read as a
             weave instead of lining up into spokes */
          var ang = ((k + (i % 2) * 0.5) / ring.count) * Math.PI * 2;
          var el = items[idx];
          /* --x/--y/--s are % of the orbit ring the planet now sits on, not of
             the whole box: half its width is the orbit's radius */
          el.style.setProperty("--x", (50 * Math.cos(ang)).toFixed(2) + "%");
          el.style.setProperty("--y", (50 * Math.sin(ang)).toFixed(2) + "%");
          el.style.setProperty("--s", ((100 * DOT) / (2 * ring.r)).toFixed(2) + "%");
          path.appendChild(el);
        }
      });

      orbit.classList.add("is-placed");
    }

    place();
    narrow.addEventListener("change", place);
  }

  /* --------------------------------------------------------- photo stacks -- */

  /* Every [data-shots] pile crossfades on its own timer, staggered by index so
     the service and sector cards turn over one after another rather than all at
     once. The card under the pointer holds its frame — swapping the photo
     somebody is looking at is the one thing this must not do. Reduced motion
     keeps frame 1. */
  function initShots() {
    var stacks = Array.prototype.slice.call(document.querySelectorAll("[data-shots]"));
    if (reduced || !stacks.length) return;

    stacks.forEach(function (stack, n) {
      var imgs = stack.children;
      if (imgs.length < 2) return;

      /* each pile gets its own period too, so piles never drift back into sync;
         a long pile (the hero holds every sector) can ask for a faster turn */
      var period = +stack.getAttribute("data-shots-ms") || SHOTS_MS + n * 900;

      setTimeout(function () {
        setInterval(function () {
          var frame = stack.closest("article, figure");
          if (frame && frame.matches(":hover")) return;

          var cur = 0;
          for (var i = 0; i < imgs.length; i++) {
            if (imgs[i].classList.contains("is-on")) cur = i;
          }
          imgs[cur].classList.remove("is-on");
          imgs[(cur + 1) % imgs.length].classList.add("is-on");
        }, period);
      }, n * 700);
    });
  }

  /* -------------------------------------------------------------- marquee -- */

  function initMarquee() {
    document.querySelectorAll(".marquee__track").forEach(function (track) {
      /* duplicate the row once so the -50% keyframe loops seamlessly */
      track.innerHTML += track.innerHTML;
      /* hide the copied half from assistive tech — logos and text chips alike */
      var half = track.children.length / 2;
      Array.prototype.forEach.call(track.children, function (item, i) {
        if (i >= half) item.setAttribute("aria-hidden", "true");
      });

      /* The -50% keyframe is a share of the track's own width, so every logo
         that lands mid-run widens the track and yanks the row sideways. Hold
         the run until the widths have settled. The row clips its overflow, so
         a lazy logo parked past the edge would never load while the row stands
         still — switch them to eager once the band is in view. */
      var imgs = Array.prototype.slice.call(track.querySelectorAll("img"));
      var pending = imgs.length;

      function start() { track.classList.add("is-ready"); }
      function settle() { if (--pending <= 0) start(); }

      function load() {
        /* never leave the row paused on a logo that never answers */
        setTimeout(start, 3000);
        if (!imgs.length) return start();
        imgs.forEach(function (img) {
          img.loading = "eager";
          if (img.complete) return settle();
          img.addEventListener("load", settle);
          img.addEventListener("error", settle);
        });
      }

      var band = track.closest(".marquee") || track;
      if (!("IntersectionObserver" in window)) return load();
      var io = new IntersectionObserver(
        function (entries) {
          if (!entries[0].isIntersecting) return;
          io.disconnect();
          load();
        },
        { rootMargin: "300px 0px" }
      );
      io.observe(band);
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
        thumb.src = c.thumb || c.img;
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

  /* --------------------------------------------------------------- albums -- */

  function initAlbums() {
    var wrap = document.getElementById("albums");
    if (!wrap) return;

    var box = document.getElementById("viewer");
    var img = document.getElementById("viewer-img");
    var title = document.getElementById("viewer-title");
    var count = document.getElementById("viewer-count");
    var strip = document.getElementById("viewer-strip");
    var album = null;
    var index = 0;
    var opener = null;

    function photo(a, i, thumb) {
      var file = (i + 1 < 10 ? "0" : "") + (i + 1) + ".webp";
      return "assets/img/gallery/" + a.dir + (thumb ? "/thumb/" : "/") + file;
    }

    ALBUMS.forEach(function (a) {
      var card = document.createElement("button");
      card.className = "album";
      card.type = "button";

      var stack = document.createElement("span");
      stack.className = "album__stack";
      /* three leaves at most — a taller pile reads as noise, not as depth */
      for (var i = Math.min(a.n, 3) - 1; i >= 0; i--) {
        var leaf = new Image();
        leaf.src = photo(a, i, true);
        leaf.alt = i === 0 ? a.title : "";
        leaf.loading = "lazy";
        stack.appendChild(leaf);
      }

      var name = document.createElement("span");
      name.className = "album__title";
      name.textContent = a.title;

      var num = document.createElement("span");
      num.className = "album__n";
      num.textContent = a.n + " foto";

      card.appendChild(stack);
      card.appendChild(name);
      card.appendChild(num);
      wrap.appendChild(card);

      card.addEventListener("click", function () { open(a, 0, card); });
    });

    function show(i) {
      index = (i + album.n) % album.n;
      img.src = photo(album, index);
      img.alt = album.title + " — foto " + (index + 1);
      count.textContent = index + 1 + " / " + album.n;

      var on = strip.children[index];
      strip.querySelectorAll(".is-on").forEach(function (b) {
        b.classList.remove("is-on");
      });
      on.classList.add("is-on");
      on.scrollIntoView({ block: "nearest", inline: "center" });
    }

    function open(a, i, from) {
      album = a;
      opener = from;
      title.textContent = a.title;

      strip.textContent = "";
      for (var k = 0; k < a.n; k++) {
        var b = document.createElement("button");
        b.type = "button";
        b.setAttribute("aria-label", "Foto " + (k + 1));
        var t = new Image();
        t.src = photo(a, k, true);
        t.alt = "";
        t.loading = "lazy";
        b.appendChild(t);
        b.addEventListener("click", (function (n) {
          return function () { show(n); };
        })(k));
        strip.appendChild(b);
      }

      box.hidden = false;
      document.body.classList.add("is-locked");
      show(i);
      box.querySelector(".viewer__x").focus();
    }

    function close() {
      if (box.hidden) return;
      box.hidden = true;
      img.removeAttribute("src");
      document.body.classList.remove("is-locked");
      if (opener) opener.focus();
      opener = null;
    }

    box.addEventListener("click", function (ev) {
      var step = ev.target.closest("[data-step]");
      if (step) { show(index + Number(step.dataset.step)); return; }
      if (ev.target.closest("[data-close]")) close();
    });

    document.addEventListener("keydown", function (ev) {
      if (box.hidden) return;
      if (ev.key === "Escape") close();
      else if (ev.key === "ArrowLeft") show(index - 1);
      else if (ev.key === "ArrowRight") show(index + 1);
      else if (ev.key === "Tab") trap(ev);
    });

    /* keep focus inside the dialog while it is open */
    function trap(ev) {
      var focusable = box.querySelectorAll("button");
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (ev.shiftKey && document.activeElement === first) {
        ev.preventDefault();
        last.focus();
      } else if (!ev.shiftKey && document.activeElement === last) {
        ev.preventDefault();
        first.focus();
      }
    }
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
  initClientOrbit();
  initMarquee();
  initShots();
  initServiceCards();
  initTabs();
  initCerts();
  initAlbums();
  initAccordion();
  initNav();
  initCounters();
  initForm();
  requestAnimationFrame(initReveals);
})();
