import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section
    id="contact"
      className="z-50 relative py-32 bg-neutral-900 text-white w-full text-center"
      style={{ pointerEvents: "auto" }}
    >
      <h2 className="text-4xl sm:text-5xl font-bold mb-6 glow-text">
        Get In Touch
      </h2>
      <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
        I’m always open to discussing new projects, creative ideas, or opportunities to contribute. Let's connect!
      </p>
      <div className="flex justify-center gap-6 flex-wrap">
        <a
          href="mailto:rajasyardi18@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-neutral-800 hover:bg-blue-600 px-6 py-3 rounded-full font-semibold text-lg transition duration-300"
        >
          <Mail size={20} />
          <span>Email</span>
        </a>
        <a
          href="https://github.com/Rajas55"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-neutral-800 hover:bg-purple-600 px-6 py-3 rounded-full font-semibold text-lg transition duration-300"
        >
          <Github size={20} />
          <span>GitHub</span>
        </a>
        <a
          href="https://linkedin.com/in/rajas-yardi-6b3871217/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-neutral-800 hover:bg-blue-500 px-6 py-3 rounded-full font-semibold text-lg transition duration-300"
        >
          <Linkedin size={20} />
          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  );
};
