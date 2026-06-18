/**
 * Invictus Agency — GSAP Animations
 * Requires: gsap.min.js + ScrollTrigger.min.js loaded before this file
 */
(function () {
  "use strict";

  if (typeof gsap === "undefined") return;

  // ── ENTRY OVERLAY (blocks flash of unstyled content while React renders) ──
  var overlay = document.createElement("div");
  overlay.id = "ia-pg-overlay";
  overlay.style.cssText =
    "position:fixed;inset:0;z-index:9999;background:#352735;pointer-events:all;will-change:opacity";
  document.body.appendChild(overlay);

  // ── INIT (after React 18 concurrent render completes) ────────────────────
  function init() {
    try {
    if (typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    // ── 1. FADE OUT ENTRY OVERLAY ────────────────────────────────────────
    gsap.to(overlay, {
      opacity: 0,
      duration: 0.75,
      ease: "power2.out",
      onComplete: function () {
        overlay.remove();
      },
    });

    // ── 2. NAV SLIDE DOWN ────────────────────────────────────────────────
    gsap.from(".nav", {
      y: -72,
      opacity: 0,
      duration: 0.75,
      ease: "power3.out",
      delay: 0.1,
      clearProps: "all",
    });

    // ── 3. HERO – ACCUEIL ────────────────────────────────────────────────
    if (document.querySelector(".headline")) {
      var htl = gsap.timeline({ delay: 0.2 });
      htl
        .from(".headline .line", {
          y: 90,
          opacity: 0,
          skewY: 6,
          duration: 1.1,
          ease: "power4.out",
          stagger: 0.2,
        })
        .from(
          ".hero-sub",
          { y: 30, opacity: 0, duration: 0.75, ease: "power3.out" },
          "-=0.55"
        )
        .from(
          ".hero-cta .btn",
          {
            y: 18,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.14,
          },
          "-=0.45"
        )
        .from(
          ".seagull-stage",
          { scale: 0.86, opacity: 0, duration: 1.3, ease: "power3.out" },
          "-=1.1"
        )
        .from(
          [".fc-1", ".fc-2", ".fc-4"],
          {
            y: 40,
            opacity: 0,
            duration: 0.7,
            ease: "back.out(1.3)",
            stagger: 0.18,
          },
          "-=0.8"
        );
    }

    // ── 4. PAGE HERO – INNER PAGES ───────────────────────────────────────
    if (document.querySelector(".page-hero-inner")) {
      var ptl = gsap.timeline({ delay: 0.2 });
      ptl
        .from(".page-hero-inner .crumb", {
          y: 20,
          opacity: 0,
          duration: 0.55,
          ease: "power3.out",
        })
        .from(
          ".page-hero-inner h1",
          { y: 60, opacity: 0, duration: 0.9, ease: "power4.out" },
          "-=0.25"
        )
        .from(
          ".page-hero-inner .hero-sub",
          { y: 28, opacity: 0, duration: 0.65, ease: "power3.out" },
          "-=0.45"
        );
    }

    // ── 5. CONTACT HERO ──────────────────────────────────────────────────
    if (document.querySelector(".contact-hero-inner")) {
      var ctl = gsap.timeline({ delay: 0.2 });
      ctl
        .from(".contact-hero-inner .crumb", {
          y: 20,
          opacity: 0,
          duration: 0.55,
          ease: "power3.out",
        })
        .from(
          ".contact-hero-inner h1",
          { y: 60, opacity: 0, duration: 0.9, ease: "power4.out" },
          "-=0.25"
        )
        .from(
          ".contact-hero-inner p",
          { y: 28, opacity: 0, duration: 0.65, ease: "power3.out" },
          "-=0.45"
        );

      // Progress bar + step card entrance
      gsap.from(".progress", {
        y: 32,
        opacity: 0,
        duration: 0.65,
        ease: "power3.out",
        delay: 0.7,
      });
      gsap.from(".step-card", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.85,
      });
    }

    // ── 6. SCROLL-TRIGGERED REVEALS ──────────────────────────────────────

    // Section heads
    gsap.utils.toArray(".section-head").forEach(function (el) {
      var kids = Array.from(el.children);
      if (!kids.length) return;
      gsap.from(kids, {
        scrollTrigger: { trigger: el, start: "top 84%", once: true },
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.18,
      });
    });

    // Eyebrow labels (standalone)
    gsap.utils.toArray(".eyebrow-label").forEach(function (el) {
      // skip ones inside section-head (already animated above)
      if (el.closest(".section-head")) return;
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
        x: -18,
        opacity: 0,
        duration: 0.55,
        ease: "power3.out",
      });
    });

    // KPI block (Accueil)
    gsap.utils.toArray(".kpi-num").forEach(function (el, i) {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: "top 87%", once: true },
        y: 35,
        opacity: 0,
        duration: 0.65,
        ease: "power3.out",
        delay: i * 0.12,
      });
    });
    if (document.querySelector(".kpi-inner > div")) {
      var kpiLeft = document.querySelector(".kpi-inner > div:first-child");
      if (kpiLeft) {
        gsap.from(Array.from(kpiLeft.children), {
          scrollTrigger: { trigger: kpiLeft, start: "top 80%", once: true },
          y: 36,
          opacity: 0,
          duration: 0.65,
          ease: "power3.out",
          stagger: 0.13,
        });
      }
    }

    // Generic cards
    var cardSelectors = [".vcard", ".catcard", ".stcard", ".tcard", ".tmember", ".gcard"];
    cardSelectors.forEach(function (sel) {
      gsap.utils.toArray(sel).forEach(function (el, i) {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: "top 91%", once: true },
          y: 46,
          opacity: 0,
          duration: 0.65,
          ease: "power3.out",
          delay: (i % 4) * 0.09,
        });
      });
    });

    // Pôles d'expertise
    gsap.utils.toArray(".pole").forEach(function (el, i) {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
        y: 55,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        delay: (i % 4) * 0.1,
      });
    });

    // Masonry tiles (Accueil réalisations)
    gsap.utils.toArray(".tile").forEach(function (el, i) {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: "top 93%", once: true },
        scale: 0.95,
        opacity: 0,
        duration: 0.55,
        ease: "power3.out",
        delay: (i % 8) * 0.05,
      });
    });

    // Portfolio tiles (Événements page)
    gsap.utils.toArray(".port-tile").forEach(function (el, i) {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: "top 93%", once: true },
        scale: 0.95,
        opacity: 0,
        duration: 0.55,
        ease: "power3.out",
        delay: (i % 8) * 0.05,
      });
    });

    // Step blocks (Approche — Événements page)
    gsap.utils.toArray(".step").forEach(function (el, i) {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
        x: -30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        delay: i * 0.08,
      });
    });

    // Category cards (Événements)
    gsap.utils.toArray(".catcard").forEach(function (el, i) {
      // already handled by generic cards, no double-anim needed
    });

    // Stats grid (Événements)
    gsap.utils.toArray(".stcard").forEach(function (el, i) {
      // already handled by generic cards
    });

    // Intro grid (À Propos)
    var introGrid = document.querySelector(".intro-grid");
    if (introGrid) {
      gsap.from(Array.from(introGrid.children), {
        scrollTrigger: { trigger: introGrid, start: "top 80%", once: true },
        y: 52,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.24,
      });
    }

    // Vision grid (À Propos)
    var visionGrid = document.querySelector(".vision-grid");
    if (visionGrid) {
      gsap.from(".vision-visual", {
        scrollTrigger: { trigger: visionGrid, start: "top 78%", once: true },
        x: -60,
        opacity: 0,
        duration: 0.95,
        ease: "power3.out",
      });
      gsap.from(".vision-text", {
        scrollTrigger: { trigger: visionGrid, start: "top 78%", once: true },
        x: 60,
        opacity: 0,
        duration: 0.95,
        ease: "power3.out",
        delay: 0.16,
      });
      gsap.utils.toArray(".pillar").forEach(function (el, i) {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
          y: 24,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
          delay: i * 0.1,
        });
      });
    }

    // Approach grid (Événements)
    var approachLeft = document.querySelector(".approach-left");
    if (approachLeft) {
      gsap.from(Array.from(approachLeft.children), {
        scrollTrigger: { trigger: approachLeft, start: "top 80%", once: true },
        y: 36,
        opacity: 0,
        duration: 0.65,
        ease: "power3.out",
        stagger: 0.13,
      });
    }

    // CTA band sections
    gsap.utils.toArray(".cta-band").forEach(function (band) {
      var h2 = band.querySelector("h2");
      var p = band.querySelector("p");
      var btn = band.querySelector(".btn");
      if (h2)
        gsap.from(h2, {
          scrollTrigger: { trigger: band, start: "top 76%", once: true },
          y: 50,
          opacity: 0,
          duration: 0.9,
          ease: "power4.out",
        });
      if (p)
        gsap.from(p, {
          scrollTrigger: { trigger: band, start: "top 72%", once: true },
          y: 30,
          opacity: 0,
          duration: 0.65,
          ease: "power3.out",
          delay: 0.18,
        });
      if (btn)
        gsap.from(btn, {
          scrollTrigger: { trigger: band, start: "top 70%", once: true },
          y: 20,
          opacity: 0,
          duration: 0.55,
          ease: "power3.out",
          delay: 0.32,
        });
    });

    // Contextual CTA (Médiathèque)
    var ctxInner = document.querySelector(".ctx-cta-inner");
    if (ctxInner) {
      gsap.from(Array.from(ctxInner.children), {
        scrollTrigger: { trigger: ctxInner, start: "top 80%", once: true },
        y: 34,
        opacity: 0,
        duration: 0.65,
        ease: "power3.out",
        stagger: 0.15,
      });
    }

    // Logos band
    var logosHead = document.querySelector(".logos-head");
    if (logosHead) {
      gsap.from(logosHead, {
        scrollTrigger: { trigger: logosHead, start: "top 85%", once: true },
        y: 22,
        opacity: 0,
        duration: 0.55,
        ease: "power3.out",
      });
    }

    // Testimonials head + cards
    var testiHead = document.querySelector(".testi-head");
    if (testiHead) {
      gsap.from(Array.from(testiHead.children), {
        scrollTrigger: { trigger: testiHead, start: "top 82%", once: true },
        y: 34,
        opacity: 0,
        duration: 0.65,
        ease: "power3.out",
        stagger: 0.15,
      });
    }

    // Footer CTA block (Accueil)
    var ctaBlock = document.querySelector(".cta-block");
    if (ctaBlock) {
      gsap.from(Array.from(ctaBlock.children), {
        scrollTrigger: { trigger: ctaBlock, start: "top 76%", once: true },
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.13,
      });
    }

    // ── 7. SUBTLE HERO PARALLAX ──────────────────────────────────────────
    if (document.querySelector(".hero-bg")) {
      gsap.to(".hero-bg", {
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.8,
        },
        y: 90,
        ease: "none",
      });
    }

    // Orbits slow rotation
    if (document.querySelector(".hero-orbits")) {
      gsap.to(".ring.r1", {
        rotation: 360,
        duration: 80,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
      });
      gsap.to(".ring.r2", {
        rotation: -360,
        duration: 120,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
      });
    }

    // ── 8. PAGE TRANSITION — EXIT ─────────────────────────────────────────
    document.addEventListener("click", function (e) {
      var a = e.target.closest("a[href]");
      if (!a) return;
      var href = a.getAttribute("href");
      if (
        !href ||
        href === "#" ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        a.target === "_blank"
      )
        return;

      e.preventDefault();
      var exitOverlay = document.createElement("div");
      exitOverlay.style.cssText =
        "position:fixed;inset:0;z-index:9999;background:#352735;pointer-events:all;opacity:0;will-change:opacity";
      document.body.appendChild(exitOverlay);
      var dest = href;
      gsap.to(exitOverlay, {
        opacity: 1,
        duration: 0.36,
        ease: "power2.in",
        onComplete: function () {
          window.location.href = dest;
        },
      });
    });
    } catch (e) {
      overlay.remove();
    }
  }

  // Absolute safety-net: force-remove overlay after 4s no matter what
  setTimeout(function () {
    var stuck = document.getElementById("ia-pg-overlay");
    if (stuck) stuck.remove();
  }, 4000);

  // React 18 concurrent renders asynchronously — wait two frames + buffer
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      setTimeout(init, 200);
    });
  });
})();
