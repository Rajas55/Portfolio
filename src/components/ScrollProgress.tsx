import React, { useEffect, useState } from "react";
export const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / totalHeight * 100;
      setProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500" style={{
      width: `${progress}%`,
      transition: "width 0.1s"
    }} />
    </div>;
};