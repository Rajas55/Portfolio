import React, { useCallback, useEffect, useState } from "react";
import { Github, Linkedin, Mail, Copy, Share2 } from "lucide-react";
export const ContextMenu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  const handleContextMenu = useCallback((e: MouseEvent) => {
    e.preventDefault();
    setIsVisible(true);
    setPosition({
      x: e.clientX,
      y: e.clientY
    });
  }, []);
  const handleClick = useCallback(() => {
    setIsVisible(false);
  }, []);
  useEffect(() => {
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("click", handleClick);
    };
  }, [handleContextMenu, handleClick]);
  if (!isVisible) return null;
  return <div className="fixed z-50 bg-neutral-900 rounded-lg shadow-xl border border-neutral-800 py-2 min-w-[200px]" style={{
    top: position.y,
    left: position.x,
    transform: `translate(${position.x + 200 > window.innerWidth ? -100 : 0}%, ${position.y + 200 > window.innerHeight ? -100 : 0}%)`
  }}>
      <div className="px-4 py-2 text-sm text-gray-400">Rajas Yardi</div>
      <div className="h-px bg-neutral-800 my-2" />
      <a href="https://github.com/Rajas55?tab=repositories" className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:bg-neutral-800 transition-colors">
        <Github size={16} />
        <span>GitHub Profile</span>
      </a>
      <a href="https://www.linkedin.com/in/rajas-yardi-6b3871217/" className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:bg-neutral-800 transition-colors">
        <Linkedin size={16} />
        <span>LinkedIn Profile</span>
      </a>
      <a href="mailto:rajasyardi18@gmail.com" className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:bg-neutral-800 transition-colors">
        <Mail size={16} />
        <span>Send Email</span>
      </a>
      <div className="h-px bg-neutral-800 my-2" />
      <button onClick={() => {
      navigator.clipboard.writeText(window.location.href);
    }} className="w-full flex items-center gap-3 px-4 py-2 text-gray-300 hover:bg-neutral-800 transition-colors">
        <Copy size={16} />
        <span>Copy URL</span>
      </button>
      <button onClick={() => {
      if (navigator.share) {
        navigator.share({
          title: "Rajas Yardi - Portfolio",
          url: window.location.href
        });
      }
    }} className="w-full flex items-center gap-3 px-4 py-2 text-gray-300 hover:bg-neutral-800 transition-colors">
        <Share2 size={16} />
        <span>Share Profile</span>
      </button>
    </div>;
};