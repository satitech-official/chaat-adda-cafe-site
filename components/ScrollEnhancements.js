"use client";

import { useEffect, useState } from "react";

export default function ScrollEnhancements() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let scrollTriggers = [];
    let alive = true;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    async function setupAnimations() {
      if (media.matches) return;
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger")
      ]);
      if (!alive) return;
      gsap.registerPlugin(ScrollTrigger);
      const reveals = gsap.utils.toArray(".gsap-reveal");
      reveals.forEach((element) => {
        const tween = gsap.fromTo(
          element,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 84%",
              once: true
            }
          }
        );
        if (tween.scrollTrigger) scrollTriggers.push(tween.scrollTrigger);
      });
    }
    setupAnimations();

    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });

    return () => {
      alive = false;
      window.removeEventListener("scroll", update);
      scrollTriggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[70] h-1 w-full bg-transparent" aria-hidden="true">
      <div className="h-full bg-saffron shadow-[0_0_18px_rgba(243,167,18,.65)]" style={{ width: `${progress * 100}%` }} />
    </div>
  );
}
