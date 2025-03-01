import React, { useEffect, useState } from "react";
import gsap from "gsap";
export const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setIsLoading(false)
    });
    tl.to(".loading-progress", {
      width: "100%",
      duration: 1.5,
      ease: "power2.inOut"
    }).to(".loading-screen", {
      opacity: 0,
      duration: 0.5,
      pointerEvents: "none"
    });
  }, []);
  if (!isLoading) return null;
  return <div className="loading-screen fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="w-64">
        <div className="text-2xl font-bold text-white mb-4 text-center">
          Rajas Yardi
        </div>
        <div className="h-1 bg-neutral-800 rounded-full overflow-hidden">
          <div className="loading-progress w-0 h-full bg-gradient-to-r from-blue-500 to-purple-500" />
        </div>
      </div>
    </div>;
};