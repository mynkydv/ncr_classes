import { useEffect, useRef, useState } from "react";

export default function CountUp({ to, suffix = "", duration = 1300 }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || done.current) return;
      done.current = true;
      io.disconnect();
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setN(to); return; }
      const t0 = performance.now();
      const step = (t) => {
        const p = Math.min((t - t0) / duration, 1);
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return <b ref={ref}>{n}{suffix}</b>;
}
