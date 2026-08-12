/* site behaviour: nav state, mobile menu, scroll reveals. no dependencies. */

(function () {
  "use strict";

  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav-toggle");
  var body = document.body;

  /* hairline under the nav once the page moves */
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* full-screen menu on small screens */
  if (toggle) {
    var setMenu = function (open) {
      body.classList.toggle("menu-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "close menu" : "open menu");
    };

    toggle.addEventListener("click", function () {
      setMenu(!body.classList.contains("menu-open"));
    });

    document.querySelectorAll(".menu a").forEach(function (a) {
      a.addEventListener("click", function () { setMenu(false); });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setMenu(false);
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 860) setMenu(false);
    });
  }

  /* reveal on scroll — anything tagged .reveal, staggered per group */
  var targets = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    targets.forEach(function (el) { el.classList.add("in"); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, i) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      el.style.transitionDelay = Math.min(i, 4) * 70 + "ms";
      el.classList.add("in");
      io.unobserve(el);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });

  targets.forEach(function (el) { io.observe(el); });
})();
