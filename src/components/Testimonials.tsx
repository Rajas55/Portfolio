import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import { Quote } from "lucide-react";
const testimonials = [{
  text: "One of the most talented developers I've worked with. Their attention to detail is remarkable.",
  author: "Sarah Johnson",
  role: "CTO at TechCorp"
}, {
  text: "Delivered exceptional results. Their technical expertise and problem-solving skills are outstanding.",
  author: "Michael Chen",
  role: "Lead Developer at StartupX"
}, {
  text: "A true professional who consistently exceeds expectations. Their work speaks for itself.",
  author: "Emily Davis",
  role: "Product Manager at InnovateLabs"
}];
export const Testimonials = () => {
  const {
    ref,
    inView
  } = useInView({
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
  return <section ref={ref} className="bg-black text-white py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          What Others Say
        </h2>
        <div ref={containerRef} className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="relative bg-neutral-900 p-8 rounded-lg transform transition-all duration-300 hover:scale-105 hover:-rotate-1">
              <div className="absolute -top-4 -left-4 text-blue-500">
                <Quote size={40} />
              </div>
              <p className="text-gray-300 mb-6 mt-4">{testimonial.text}</p>
              <div>
                <p className="font-bold text-white">{testimonial.author}</p>
                <p className="text-blue-500">{testimonial.role}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};