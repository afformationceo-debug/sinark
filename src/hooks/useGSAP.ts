"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseGSAPOptions {
  trigger?: string | Element;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  once?: boolean;
}

export function useScrollTrigger(options: UseGSAPOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: options.start || "top 80%",
        end: options.end || "bottom 20%",
        once: options.once ?? true,
        markers: options.markers ?? false,
        onEnter: () => {
          const children = ref.current?.querySelectorAll("[data-gsap]");
          if (children) {
            gsap.to(children, {
              opacity: 1,
              y: 0,
              stagger: 0.08,
              duration: 0.6,
              ease: "power2.out",
            });
          }
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [options.start, options.end, options.once, options.markers]);

  return ref;
}

export function useStrokeAnimation() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const paths = ref.current?.querySelectorAll("[data-edge]");
      const nodes = ref.current?.querySelectorAll("[data-node]");

      if (paths) {
        gsap.set(paths, { strokeDashoffset: (_, el) => (el as SVGPathElement).getTotalLength?.() || 200 });
        ScrollTrigger.create({
          trigger: ref.current,
          start: "top 75%",
          once: true,
          onEnter: () => {
            gsap.to(paths, {
              strokeDashoffset: 0,
              duration: 1.2,
              stagger: 0.1,
              ease: "power2.inOut",
            });
          },
        });
      }

      if (nodes) {
        gsap.set(nodes, { opacity: 0, scale: 0.7 });
        ScrollTrigger.create({
          trigger: ref.current,
          start: "top 70%",
          once: true,
          onEnter: () => {
            gsap.to(nodes, {
              opacity: 1,
              scale: 1,
              duration: 0.5,
              stagger: 0.06,
              ease: "back.out(1.7)",
              delay: 0.3,
            });
          },
        });
      }
    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
}
