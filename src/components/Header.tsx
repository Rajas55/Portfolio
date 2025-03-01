import React, { useState } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { useActiveSection } from "./ActiveSectionIndicator";
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection();
  const navLinks = [{
    href: "#home",
    label: "Home"
  }, {
    href: "#about",
    label: "About"
  }, {
    href: "#projects",
    label: "Projects"
  }, {
    href: "#contact",
    label: "Contact"
  }];
  return <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-white font-bold text-xl">RY</div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(({
            href,
            label
          }) => <a key={href} href={href} className={`
                  relative text-gray-300 hover:text-white transition-colors
                  ${activeSection === href.slice(1) ? "text-white" : ""}
                `}>
                {label}
                {activeSection === href.slice(1) && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />}
              </a>)}
          </nav>
          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/Rajas55?tab=repositories" className="text-gray-300 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/rajas-yardi-6b3871217/" className="text-gray-300 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:rajasyardi18@gmail.com" className="text-gray-300 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map(({
            href,
            label
          }) => <a key={href} href={href} className={`
                    block px-3 py-2 text-gray-300 hover:text-white transition-colors
                    ${activeSection === href.slice(1) ? "text-white" : ""}
                  `}>
                  {label}
                  {activeSection === href.slice(1) && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />}
                </a>)}
            </div>
          </div>}
      </div>
    </header>;
};