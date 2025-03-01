import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";

const activities = [
  {
    title: "State Cricket Team Captain",
    description:
      "Led the Pune, India cricket team, demonstrating leadership, strategy, and execution. Oversaw team dynamics and motivated players to perform at their best.",
    icon: "🏏"
  },
  {
    title: "Saarthi Volunteer",
    description:
      "Volunteered for the People's Assistance Social Welfare and Development Committee (SW&D) in 2021. Assisted elderly individuals in learning technology, fostering digital literacy and independence.",
    icon: "🤝"
  },
  {
    title: "Marathon Runner",
    description:
      "Participated in multiple marathons, embracing endurance challenges, setting personal goals, and developing resilience through consistent training and discipline.",
    icon: "🏃‍♂️"
  },
  {
    title: "Concessions Supervisor - JMA Wireless Dome",
    description:
      "Working as a Concessions Supervisor at the JMA Wireless Dome, Syracuse, New York. Oversee operations, manage inventory, and ensure a positive customer experience.",
    icon: "🎟️"
  }
];

export const Extracurricular = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView && containerRef.current) {
      gsap.from(containerRef.current.children, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out"
      });
    }
  }, [inView]);

  return (
    <section id="extracurricular" ref={ref} className="bg-neutral-900 text-white py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Extracurricular Activities
        </h2>
        <div ref={containerRef} className="grid md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-black/50 p-8 rounded-lg">
              <div className="text-4xl mb-4">{activity.icon}</div>
              <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
              <p className="text-gray-400">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
