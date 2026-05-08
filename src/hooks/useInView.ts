import { useEffect, useRef } from 'react';

export function useInView(className = 'fade-in') {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll<HTMLElement>(`.${className}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [className]);

  return ref;
}
