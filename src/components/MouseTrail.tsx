import React, { useEffect, useRef } from "react";
export const MouseTrail = () => {
  const trailRef = useRef<HTMLDivElement>(null);
  const coords = {
    x: 0,
    y: 0
  };
  const circles = Array.from({
    length: 20
  }, (_, i) => ({
    x: 0,
    y: 0,
    scale: 1 - i * 0.03,
    opacity: 1 - i * 0.04
  }));
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    };
    const animateTrail = () => {
      if (!trailRef.current) return;
      const children = trailRef.current.children;
      circles.forEach((circle, i) => {
        const node = children[i] as HTMLDivElement;
        if (!node) return;
        // Smooth follow effect
        circle.x += (coords.x - circle.x) * (i === 0 ? 0.4 : 0.2);
        circle.y += (coords.y - circle.y) * (i === 0 ? 0.4 : 0.2);
        node.style.transform = `translate(${circle.x}px, ${circle.y}px) scale(${circle.scale})`;
        node.style.opacity = `${circle.opacity}`;
      });
      requestAnimationFrame(animateTrail);
    };
    window.addEventListener("mousemove", handleMouseMove);
    animateTrail();
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return <div ref={trailRef} className="pointer-events-none fixed inset-0 z-50">
      {circles.map((_, i) => <div key={i} className="absolute h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-sm" style={{
      top: -16,
      left: -16
    }} />)}
    </div>;
};