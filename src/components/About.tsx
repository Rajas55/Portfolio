import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
export const About = () => {
  const {
    ref: sectionRef,
    inView
  } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  const cardsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (inView && cardsRef.current) {
      const cards = cardsRef.current.children;
      gsap.from(cards, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });
    }
  }, [inView]);
  return <section ref={sectionRef} id="about" className="relative bg-black/95 text-white py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
          <div className="text-center space-y-2 mb-6">
  <h1 className="text-3xl sm:text-4xl font-bold text-white">
    Rajas Yardi
  </h1>
  <p className="text-lg text-gray-300">
    Full-Stack Web Developer | React • Spring Boot • Accessibility Advocate
  </p>
</div>
            <p className="text-lg text-gray-300">
            I'm Rajas Yardi, a Full-Stack Web Developer based in Syracuse, New York. I'm currently pursuing a Master's in Computer Science at Syracuse University and hold a Bachelor's in Computer Engineering from Vishwakarma Institute of Technology. I specialize in building responsive, accessible web applications using <strong>React</strong>, <strong>Java</strong>, and <strong>Spring Boot</strong>, and I enjoy tackling complex challenges through thoughtful design and clean, scalable code.

</p>
            <p className="text-lg text-gray-300">
            In my internships at Excellarate and Micromate, I gained hands-on experience building dynamic applications using technologies like React, Spring Boot, Java, and machine learning. I'm passionate about leveraging technology to bring innovative ideas to life and am always excited to connect with like-minded professionals.


            </p>
          </div>
          <div ref={cardsRef} className="grid grid-cols-2 gap-4">
            {[{
            title: "Frontend",
            skills: "React, TypeScript, Tailwind, JavaScript, HTML"
          }, {
            title: "Backend",
            skills: "Node.js, Java, Spring Boot"
          }, {
            title: "Cloud",
            skills: "AWS, Docker, Kubernetes"
          }, {
            title: "Tools",
            skills: "Git, CI/CD, Postman, EAS Build"
          }].map((item, index) => <div key={index} className="group relative bg-neutral-900 p-6 rounded-lg transform transition-transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.skills}</p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};