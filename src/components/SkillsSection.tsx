import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
const skills = [{
  category: "Frontend",
  items: [{
    name: "React",
    level: 95,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  }, {
    name: "TypeScript",
    level: 80,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
  }, {
    name: "JavaScript",
    level: 85,
    icon: "https://devicon-website.vercel.app/api/javascript/original.svg"
  }, {
    name: "Tailwind",
    level: 90,
    icon: "https://devicon-website.vercel.app/api/tailwindcss/plain.svg"
  },
  {
    name: "HTML",
    level: 90,
    icon: "https://devicon-website.vercel.app/api/css3/plain-wordmark.svg"
  }
]
}, {
  category: "Backend",
  items: [{
    name: "Node.js",
    level: 88,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  }, {
    name: "Java",
    level: 85,
    icon: "https://devicon-website.vercel.app/api/java/original.svg"
  }, {
    name: "SQL",
    level: 80,
    icon: "https://devicon-website.vercel.app/api/mysql/original.svg"
  }, {
    name: "Python",
    level: 82,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
  },{
    name: "Spring Boot",
    level: 92,
    icon: "https://devicon-website.vercel.app/api/spring/original.svg"
  }]
}];
const floatingTechStack = [{
  name: "Docker",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
}, {
  name: "AWS",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
}, {
  name: "Git",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
}, {
  name: "GitHub",
  icon: "https://devicon-website.vercel.app/api/github/original.svg?color=%23FFFFFF"
}, {
  name: "Postman",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
}, {
  name: "VS Code",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg"
}];
export const SkillsSection = () => {
  const {
    ref,
    inView
  } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  const progressBarsRef = useRef<HTMLDivElement>(null);
  const floatingIconsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (inView && progressBarsRef.current) {
      gsap.from(progressBarsRef.current.querySelectorAll(".progress-bar"), {
        width: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.1
      });
      gsap.from(progressBarsRef.current.querySelectorAll(".skill-item"), {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      });
    }
  }, [inView]);
  useEffect(() => {
    if (inView && floatingIconsRef.current) {
      const icons = floatingIconsRef.current.children;
      Array.from(icons).forEach((icon, index) => {
        gsap.to(icon, {
          y: "-=20",
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: index * 0.2
        });
      });
    }
  }, [inView]);
  return <section ref={ref} className="bg-black text-white py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Skills & Technologies
        </h2>
        <div ref={progressBarsRef} className="grid md:grid-cols-2 gap-12">
          {skills.map((skillCategory, categoryIndex) => <div key={categoryIndex}>
              <h3 className="text-2xl font-bold mb-6 text-white">
                {skillCategory.category}
              </h3>
              <div className="space-y-6">
                {skillCategory.items.map((skill, index) => <div key={index} className="skill-item">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                        <span className="text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                      <div className="progress-bar h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" style={{
                  width: `${skill.level}%`
                }} />
                    </div>
                  </div>)}
              </div>
            </div>)}
        </div>
        <div ref={floatingIconsRef} className="mt-20 grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
          {floatingTechStack.map((tech, index) => <div key={index} className="group relative transform transition-transform duration-300 hover:scale-110">
              <div className="relative">
                <img src={tech.icon} alt={tech.name} className="w-16 h-16" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm text-gray-400 whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};