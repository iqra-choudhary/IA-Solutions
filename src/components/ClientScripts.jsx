"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ClientScripts() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add("js-enabled");

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = document.querySelectorAll("[data-reveal]");
    const revealAll = () => items.forEach((item) => item.classList.add("show"));

    let revealObserver;
    if ("IntersectionObserver" in window && !reducedMotion) {
      revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      items.forEach((item) => revealObserver.observe(item));
    } else {
      revealAll();
    }

    const counters = document.querySelectorAll(".stat-num[data-count]");
    function runCounter(element) {
      if (element.dataset.animated === "true") return;
      element.dataset.animated = "true";
      const target = Number(element.dataset.count);
      const suffix = element.dataset.suffix || "";

      if (reducedMotion) {
        element.textContent = target + suffix;
        return;
      }

      const start = performance.now();
      const duration = 1200;
      const update = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        element.textContent = Math.floor(target * progress) + suffix;
        if (progress < 1) requestAnimationFrame(update);
        else element.textContent = target + suffix;
      };
      requestAnimationFrame(update);
    }

    let counterObserver;
    if ("IntersectionObserver" in window) {
      counterObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              runCounter(entry.target);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.35 }
      );
      counters.forEach((counter) => counterObserver.observe(counter));
    } else {
      counters.forEach(runCounter);
    }

    const whyReasons = document.querySelectorAll(".why-scroll-step[data-why]");
    const whyPanels = document.querySelectorAll(".why-screen[data-why-panel]");
    const whyVisual = document.querySelector(".why-scroll-visual");
    const whyDevice = document.querySelector(".why-device");
    const whyCopy = document.querySelector(".why-scroll-copy");

    const showVisual = (id) => {
      whyVisual.classList.remove("hidden");
      whyReasons.forEach((reason) =>
        reason.classList.toggle("active", reason.dataset.why === id)
      );
      whyPanels.forEach((panel) =>
        panel.classList.toggle("active", panel.dataset.whyPanel === id)
      );
      whyDevice.classList.remove("shift-1", "shift-2", "shift-3");
      whyDevice.classList.add(`shift-${id}`);
    };

    const hideVisual = () => {
      if (!whyVisual) return;
      whyVisual.classList.add("hidden");
      whyReasons.forEach((reason) => reason.classList.remove("active"));
      whyPanels.forEach((panel) => panel.classList.remove("active"));
      whyDevice.classList.remove("shift-1", "shift-2", "shift-3");
    };

    if (whyReasons.length && whyPanels.length && whyVisual && whyDevice) {
      whyReasons.forEach((reason) => {
        const id = reason.dataset.why;
        // Need to remove old listeners if we re-run, but since we are re-querying nodes on route change,
        // it's easier to just add them.
        reason.onmouseenter = () => showVisual(id);
        reason.onclick = () => showVisual(id);
        reason.onfocus = () => showVisual(id);
      });

      if (whyCopy) {
        whyCopy.onmouseleave = hideVisual;
      }
    }

    return () => {
      if (revealObserver) {
        items.forEach((item) => revealObserver.unobserve(item));
      }
      if (counterObserver) {
        counters.forEach((counter) => counterObserver.unobserve(counter));
      }
    };
  }, [pathname]);

  return null;
}
