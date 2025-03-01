import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
type Props = {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  delay?: number;
};
export const ScrollReveal = ({
  children,
  direction = "up",
  duration = 0.5,
  delay = 0
}: Props) => {
  const {
    ref,
    inView
  } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const elementRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!elementRef.current) return;
    if (inView) {
      elementRef.current.style.transform = "translate3d(0, 0, 0)";
      elementRef.current.style.opacity = "1";
    }
  }, [inView]);
  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return "translate3d(0, 50px, 0)";
      case "down":
        return "translate3d(0, -50px, 0)";
      case "left":
        return "translate3d(50px, 0, 0)";
      case "right":
        return "translate3d(-50px, 0, 0)";
      default:
        return "translate3d(0, 0, 0)";
    }
  };
  return <div ref={node => {
    // Combine refs
    ref(node);
    if (elementRef) {
      (elementRef as any).current = node;
    }
  }} style={{
    transform: getInitialTransform(),
    opacity: 0,
    transition: `transform ${duration}s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s, opacity ${duration}s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`
  }}>
      {children}
    </div>;
};