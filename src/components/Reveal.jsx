import { useEffect, useRef, useState } from "react";

/** Fades content up when it scrolls into view. Respects reduced-motion via CSS. */
export default function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [seen]);

  return (
    <Tag ref={ref} className={`rv ${seen ? "in" : ""} ${className}`.trim()}
         style={delay ? { transitionDelay: `${delay}s` } : undefined}>
      {children}
    </Tag>
  );
}
