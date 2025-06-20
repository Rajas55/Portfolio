import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-20 right-8 z-[100] p-3 rounded-full
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white shadow-lg
        transform transition-all duration-300
        hover:scale-110 hover:shadow-xl
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}
      `}
    >
      <ChevronUp size={24} />
    </button>
  );
};