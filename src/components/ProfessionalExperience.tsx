import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
const experiences = [{
  year: "May 2023 – July 2023",
  company: "Encora Pvt. Ltd. - Pune, India",
  role: "Software Intern",
  description: "Worked on a full-stack development project, implementing features and enhancing system performance using Spring Boot and Java."
}, {
  year: "Oct. 2021 – Feb. 2022",
  company: "Micromate Computer and Peripherals Pvt. Ltd. - Pune, India",
  role: "IT Intern",
  description: "Managed hardware troubleshooting and network setup, supporting seamless office IT operations."
}, {
  year: "2023 – Current",
  company: "JMA Wireless Dome - Syracuse, NY, USA",
  role: "Concessions Supervisor",
  description: "Overseeing operations, managing inventory, and ensuring positive customer experiences at the JMA Wireless Dome."
}];
export const ProfessionalExperience = () => {
  const {
    ref,
    inView
  } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  const timelineRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (inView && timelineRef.current) {
      const items = timelineRef.current.children;
      gsap.from(items, {
        opacity: 0,
        x: -50,
        stagger: 0.3,
        duration: 1,
        ease: "power3.out"
      });
    }
  }, [inView]);
  return <section id="experience" className="bg-black text-white py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Professional Experience
        </h2>
        <div ref={timelineRef} className="relative space-y-8">
          {experiences.map((exp, index) => <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8 items-start group">
              <div className="md:w-1/4">
                <div className="sticky top-20 bg-neutral-900 p-6 rounded-lg transform transition-transform group-hover:scale-105 group-hover:shadow-xl">
                  <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                    {exp.year}
                  </span>
                </div>
              </div>
              <div className="md:w-3/4 bg-neutral-900/50 backdrop-blur-sm p-8 rounded-lg transform transition-all hover:translate-x-2">
                <h3 className="text-xl font-bold mb-2">{exp.company}</h3>
                <h4 className="text-blue-500 mb-4">{exp.role}</h4>
                <p className="text-gray-400">{exp.description}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};