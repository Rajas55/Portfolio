import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
const posts = [{
  title: "Building Scalable React Applications",
  excerpt: "Learn the best practices for creating maintainable and scalable React applications...",
  date: "Oct 15, 2023",
  readTime: "5 min read",
  image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
}, {
  title: "Modern State Management in React",
  excerpt: "Exploring different state management solutions and when to use them...",
  date: "Oct 10, 2023",
  readTime: "4 min read",
  image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
}, {
  title: "The Future of Web Development",
  excerpt: "A deep dive into upcoming technologies and trends in web development...",
  date: "Oct 5, 2023",
  readTime: "6 min read",
  image: "https://images.unsplash.com/photo-1664575600850-c4b712e6e2bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
}];
export const BlogPreview = () => {
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
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });
    }
  }, [inView]);
  return <section ref={ref} className="bg-black text-white py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Latest Articles
          </h2>
          <a href="/blog" className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            View All
            <ArrowRight className="transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        <div ref={containerRef} className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => <article key={index} className="group bg-neutral-900 rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <a href="#" className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors">
                  Read More
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>)}
        </div>
      </div>
    </section>;
};