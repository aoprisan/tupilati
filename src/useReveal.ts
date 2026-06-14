import { useEffect } from "react";

// Progressive-enhancement scroll reveal. Elements marked with `data-reveal`
// start hidden ONLY once this runs (we add `reveal-ready` to <html>), so the
// page is fully visible with JavaScript disabled. Honors reduced-motion.
export function useReveal() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("reveal-ready");

    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduced || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
