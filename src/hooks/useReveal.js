import { useEffect, useRef } from 'react';
 
export default function useReveal(options = { threshold: 0.15 }) {
  const ref = useRef(null);
 
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          io.disconnect();
        }
      },
      options
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
 
  return ref;
}
 