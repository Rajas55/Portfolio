import React, { useEffect, useRef } from "react";
export const ParallaxBackground = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (!backgroundRef.current) return;
      const scrolled = window.scrollY;
      backgroundRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      <div ref={backgroundRef} className="absolute inset-0 w-full h-[200vh]" style={{
      background: `
            radial-gradient(circle at 20% 30%, rgba(37, 99, 235, 0.07) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.05) 0%, transparent 50%)
          `
    }} />
    </div>;
};