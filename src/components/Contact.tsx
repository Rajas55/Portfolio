import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
export const Contact = () => {
  return <section id="contact" className="bg-neutral-900 text-white py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center">
          Get In Touch
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-gray-300 mb-8">
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your visions.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:rajasyardi18@gmail.com" className="flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 px-6 py-3 rounded-lg transition-colors">
              <Mail size={20} />
              <span>Email Me</span>
            </a>
            <a href="https://github.com" className="flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 px-6 py-3 rounded-lg transition-colors">
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com" className="flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 px-6 py-3 rounded-lg transition-colors">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>;
};