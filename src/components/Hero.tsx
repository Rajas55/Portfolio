import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import * as THREE from "three";

export const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const modelContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Text animations
    const tl = gsap.timeline();
    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
      .from(
        subtitleRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        },
        "-=0.5"
      )
      .from(
        buttonsRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        },
        "-=0.5"
      );

    if (!modelContainerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setSize(400, 400);
    modelContainerRef.current.appendChild(renderer.domElement);

    // Create core sphere
    const coreGeometry = new THREE.IcosahedronGeometry(1, 2);
    const coreMaterial = new THREE.MeshPhongMaterial({
      color: 0x4a90e2,
      emissive: 0x4a90e2,
      emissiveIntensity: 0.5,
      shininess: 100,
      wireframe: true
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);

    // Create rings
    const rings: THREE.Mesh[] = [];
    for (let i = 0; i < 3; i++) {
      const ringGeometry = new THREE.TorusGeometry(1.5 + i * 0.5, 0.02, 16, 100);
      const ringMaterial = new THREE.MeshPhongMaterial({
        color: 0x9f7aea,
        emissive: 0x9f7aea,
        emissiveIntensity: 0.2,
        shininess: 100,
        transparent: true,
        opacity: 0.8 - i * 0.2
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.rotation.x = Math.PI * Math.random();
      ring.rotation.y = Math.PI * Math.random();
      rings.push(ring);
      scene.add(ring);
    }

    // Create floating particles
    const particles: THREE.Mesh[] = [];
    const symbols = ["<>", "{}", "()", "//", "[]"];
    for (let i = 0; i < 20; i++) {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext("2d")!;
      ctx.fillStyle = "#4A90E2";
      ctx.font = "20px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(symbols[i % symbols.length], 32, 32);
      const texture = new THREE.CanvasTexture(canvas);
      const geometry = new THREE.PlaneGeometry(0.2, 0.2);
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        side: THREE.DoubleSide,
        opacity: 0.8
      });
      const particle = new THREE.Mesh(geometry, material);
      const radius = 2 + Math.random() * 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI * 2;
      particle.position.x = radius * Math.sin(theta) * Math.cos(phi);
      particle.position.y = radius * Math.sin(theta) * Math.sin(phi);
      particle.position.z = radius * Math.cos(theta);
      particles.push(particle);
      scene.add(particle);
    }
    scene.add(core);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const light1 = new THREE.DirectionalLight(0x4a90e2, 1);
    light1.position.set(2, 2, 2);
    scene.add(light1);
    const light2 = new THREE.DirectionalLight(0x9f7aea, 1);
    light2.position.set(-2, -2, 2);
    scene.add(light2);

    camera.position.z = 5;

    // Animation
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.005;
      // Rotate core
      core.rotation.x += 0.005;
      core.rotation.y += 0.005;

      // Animate rings
      rings.forEach((ring, i) => {
        ring.rotation.x += 0.002 * (i + 1);
        ring.rotation.y += 0.003 * (i + 1);
        ring.rotation.z += 0.001 * (i + 1);
      });

      // Animate particles
      particles.forEach((particle, i) => {
        particle.position.x =
          particle.position.x * Math.cos(0.001) -
          particle.position.z * Math.sin(0.001);
        particle.position.z =
          particle.position.x * Math.sin(0.001) +
          particle.position.z * Math.cos(0.001);

        particle.rotation.y += 0.02;
        (particle.material as THREE.MeshBasicMaterial).opacity =
          0.5 + Math.sin(time + i) * 0.3;
      });

      // Pulse core
      core.scale.set(
        1 + Math.sin(time) * 0.1,
        1 + Math.sin(time) * 0.1,
        1 + Math.sin(time) * 0.1
      );
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      modelContainerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!modelContainerRef.current) return;
    const rect = modelContainerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    gsap.to(modelContainerRef.current, {
      transform: `rotateY(${x * 15}deg) rotateX(${y * 15}deg)`,
      duration: 0.5
    });
  };

  return (
    <section
      id="home"
      className="relative z-10 min-h-screen flex items-center justify-center bg-black/90 text-white pt-16 overflow-hidden"
    >
      {/* Overlay with negative z-index so it sits behind clickable content */}
      <div className="absolute inset-0 -z-20 pointer-events-none bg-gradient-to-b from-blue-500/10 to-purple-500/10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left md:w-1/2">
          <h1
            ref={titleRef}
            className="text-5xl sm:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
          >
            Hi, I'm Rajas Yardi
          </h1>
          <p ref={subtitleRef} className="text-xl sm:text-2xl text-gray-400 mb-8">
            Full Stack Developer • Problem Solver • Tech Enthusiast
          </p>
          <div className="flex justify-center md:justify-start gap-4 pointer-events-auto">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-3 rounded-lg overflow-hidden cursor-pointer"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-transform group-hover:scale-105" />
              <span className="relative text-white z-10">Resume</span>
            </a>
            <a
              href="#contact"
              className="group relative px-8 py-3 rounded-lg overflow-hidden cursor-pointer"
            >
              <div className="pointer-events-none absolute inset-0 border-2 border-blue-500 opacity-100 transition-opacity group-hover:opacity-0" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="relative text-blue-500 group-hover:text-white transition-colors z-10">
                Contact Me
              </span>
            </a>
          </div>
        </div>
        <div
          ref={modelContainerRef}
          className="mt-12 md:mt-0 md:w-1/2 perspective-1000"
          onMouseMove={handleMouseMove}
          style={{ perspective: "1000px" }}
        />
      </div>
    </section>
  );
};
