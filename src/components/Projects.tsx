import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React and Node.js. Showcases projects and experience through a polished UI.",
    image:
      "https://images.unsplash.com/photo-1537884944318-390069bb8665?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/Rajas55/portfolio"
  },
  {
    title: "Laptop on Rent Website",
    description:
      "A full-stack website using Spring Boot and Java, featuring a secure admin interface and dynamic front-end.",
    image:
      "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["Spring Boot", "Java", "HTML", "CSS", "JS", "SQL", "Thymeleaf"],
    github: "https://github.com/Rajas55/task-management"
  },
  {
    title: "FinanceFlow Mobile App",
    description:
      "A personal finance app built with React Native and Spring Boot. Features user authentication, analytics, and multi-language support.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqEmOgMdUINgrvzYqCHNyVftxgPvbiSYabWw&s",
    tech: ["React Native", "Spring Boot", "H2 Database", "Axios"],
    github: "https://github.com/Rajas55/ai-chat-interface"
  },
  {
    title: "Telegram ChatBot",
    description:
      "A Telegram Bot built with Java and Spring Boot, adding quick actions, cart functionality, wishlists, and personalized suggestions.",
    image:
      "https://media.istockphoto.com/id/1281791187/vector/chat-bot-in-smartphone-chat-messenger-icon-support-or-service-icon-support-service-bot-say.jpg?s=612x612&w=0&k=20&c=9f2g7Df1Tu-5njpAoH4U9wyJAjI3WSNivu0Oi5uJ6Uo=",
    tech: ["Java", "Spring Boot", "NLP", "Stripe"],
    github: "https://github.com/Rajas55/e-commerce-platform"
  },
  {
    title: "Hate Speech Detection",
    description:
      "An ML pipeline with SVM and Logistic Regression to detect hate speech with high accuracy using Tf-Idf features.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjJnuSGexibZtndnu0MS66hOW4z-4gop6SlA&s",
    tech: ["Python", "ML", "NLP", "SVM"],
    github: "https://github.com/Rajas55/social-media-app"
  },
  {
    title: "Yogdaan Web Application",
    description:
      "A robust backend built with Spring Boot and PostgreSQL, featuring REST APIs and integrated Spring Security.",
    image:
      "https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg",
    tech: ["Spring Boot", "SQL", "Spring Security", "Git"],
    github: "https://github.com/Rajas55/weather-dashboard"
  }
];

export const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView && projectsRef.current) {
      gsap.from(projectsRef.current.children, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        clearProps: "all" // Clear inline styles after animation
      });
    }
  }, [inView]);

  return (
    <section ref={ref} id="projects" className="bg-black text-white py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Featured Projects
        </h2>
        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-neutral-900 rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105 min-h-[350px]"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
