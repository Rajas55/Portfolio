import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
const stats = [{
  number: 10,
  label: "Projects Completed",
  suffix: "+",
  prefix:""
}, {
  number: 1,
  label: "Year Industry Experience",
  suffix: "+",
  prefix:""
}, {
  number: 10,
  label: "GitHub Repositories",
  suffix: "+",
  prefix:""
},
{
  number: 1,
  label: "Published Paper",
  suffix: "",
  prefix:""
}];
export const Statistics = () => {
  const {
    ref,
    inView
  } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  const numbersRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (inView && numbersRef.current) {
      const numbers = numbersRef.current.querySelectorAll(".stat-number");
      numbers.forEach(number => {
        const target = parseInt(number.getAttribute("data-target") || "0");
        gsap.fromTo(number, {
          innerText: "0"
        }, {
          innerText: target,
          duration: 2,
          ease: "power2.out",
          snap: {
            innerText: 1
          },
          stagger: 0.2
        });
      });
    }
  }, [inView]);
  return <section ref={ref} className="bg-neutral-900/50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={numbersRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => <div key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center items-center space-x-1">
                {stat.prefix && <span className="text-3xl md:text-4xl font-bold text-blue-500">
                    {stat.prefix}
                  </span>}
                <span className="stat-number text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500" data-target={stat.number}>
                  0
                </span>
                {stat.suffix && <span className="text-3xl md:text-4xl font-bold text-purple-500">
                    {stat.suffix}
                  </span>}
              </div>
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </div>)}
        </div>
      </div>
    </section>;
};