import React, { useEffect } from "react";
export const KeyboardNavigation = () => {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Allow keyboard navigation only when not typing in an input
      if (["input", "textarea"].includes((e.target as HTMLElement).tagName.toLowerCase())) {
        return;
      }
      switch (e.key) {
        case "h":
          document.getElementById("home")?.scrollIntoView({
            behavior: "smooth"
          });
          break;
        case "a":
          document.getElementById("about")?.scrollIntoView({
            behavior: "smooth"
          });
          break;
        case "p":
          document.getElementById("projects")?.scrollIntoView({
            behavior: "smooth"
          });
          break;
        case "c":
          document.getElementById("contact")?.scrollIntoView({
            behavior: "smooth"
          });
          break;
        case "ArrowUp":
          window.scrollBy({
            top: -100,
            behavior: "smooth"
          });
          break;
        case "ArrowDown":
          window.scrollBy({
            top: 100,
            behavior: "smooth"
          });
          break;
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);
  return null;
};