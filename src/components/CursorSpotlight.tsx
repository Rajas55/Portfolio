import React, { useEffect, useRef } from "react";
export const CursorSpotlight = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current) return;
      spotlightRef.current.style.background = `radial-gradient(
        600px circle at ${e.clientX}px ${e.clientY}px,
        rgba(73, 140, 255, 0.05),
        transparent 40%
      )`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return <div ref={spotlightRef} className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300" style={{
    opacity: 0.7
  }} />;
};