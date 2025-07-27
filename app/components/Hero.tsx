'use client';

import { useEffect, useRef } from 'react';
import anime from 'animejs';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const elementId = target.dataset.animateId;
            
            if (elementId) {
              // Reset opacity and transform for re-animation
              target.style.opacity = '0';
              
              setTimeout(() => {
                switch (elementId) {
                  case 'hero-image':
                    anime({
                      targets: target,
                      scale: [0.8, 1],
                      opacity: [0, 1],
                      duration: 1200,
                      easing: 'easeOutElastic(1, 0.8)'
                    });
                    break;
                  case 'hero-title':
                    anime({
                      targets: target,
                      translateY: [50, 0],
                      opacity: [0, 1],
                      duration: 800,
                      easing: 'easeOutExpo'
                    });
                    break;
                  case 'hero-subtitle':
                    anime({
                      targets: target,
                      translateY: [30, 0],
                      opacity: [0, 1],
                      duration: 600,
                      easing: 'easeOutExpo',
                      delay: 200
                    });
                    break;
                  case 'hero-description':
                    anime({
                      targets: target,
                      translateY: [20, 0],
                      opacity: [0, 1],
                      duration: 600,
                      easing: 'easeOutExpo',
                      delay: 400
                    });
                    break;
                  case 'tech-badge':
                    anime({
                      targets: target,
                      scale: [0, 1],
                      opacity: [0, 1],
                      duration: 400,
                      easing: 'easeOutBack(1.7)',
                      delay: anime.random(0, 600)
                    });
                    break;
                  case 'hero-buttons':
                    anime({
                      targets: target,
                      translateY: [30, 0],
                      opacity: [0, 1],
                      duration: 600,
                      easing: 'easeOutExpo',
                      delay: 600
                    });
                    break;
                  case 'social-links':
                    anime({
                      targets: target,
                      translateY: [20, 0],
                      opacity: [0, 1],
                      duration: 600,
                      easing: 'easeOutExpo',
                      delay: 800
                    });
                    break;
                }
              }, 100);
            }
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const elementsToObserve = heroRef.current?.querySelectorAll('[data-animate-id]');
    elementsToObserve?.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const techStack = [
    'Angular', 'React JS', 'TypeScript', 'ML', 'DL', 'NLP', 'LangChain', 'Agents'
  ];

  return (
    <section ref={heroRef} id="hero" className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 text-left">
            <h1 
              data-animate-id="hero-title"
              className="text-5xl md:text-6xl font-bold leading-tight opacity-0"
            >
              My name is{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Abdul Hadi
              </span>
            </h1>
            
            <h2 
              data-animate-id="hero-subtitle"
              className="text-2xl md:text-3xl text-gray-300 font-light opacity-0"
            >
              AI/NLP/ML Engineer
            </h2>
            
            <p 
              data-animate-id="hero-description"
              className="text-lg text-gray-400 leading-relaxed max-w-2xl opacity-0"
            >
              Passionate about creating intelligent systems that bridge the gap between human language and machine understanding. Specialized in developing cutting-edge AI solutions.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mt-8">
              {techStack.map((tech, index) => (
                <span 
                  key={tech}
                  data-animate-id="tech-badge"
                  className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 cursor-pointer opacity-0"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div 
              data-animate-id="hero-buttons"
              className="flex flex-wrap gap-4 mt-8 opacity-0"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 whitespace-nowrap cursor-pointer">
                View My Work
              </button>
              <button className="px-8 py-4 border-2 border-gray-700 text-gray-300 rounded-lg font-medium hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer">
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div 
              data-animate-id="social-links"
              className="flex gap-6 mt-8 opacity-0"
            >
              <a href="#" className="w-12 h-12 bg-gray-800/50 border border-gray-700 rounded-full flex items-center justify-center hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-110 cursor-pointer">
                <i className="ri-linkedin-fill text-xl text-gray-400 hover:text-cyan-400"></i>
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800/50 border border-gray-700 rounded-full flex items-center justify-center hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-110 cursor-pointer">
                <i className="ri-github-fill text-xl text-gray-400 hover:text-cyan-400"></i>
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800/50 border border-gray-700 rounded-full flex items-center justify-center hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-110 cursor-pointer">
                <i className="ri-twitter-fill text-xl text-gray-400 hover:text-cyan-400"></i>
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800/50 border border-gray-700 rounded-full flex items-center justify-center hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-110 cursor-pointer">
                <i className="ri-mail-fill text-xl text-gray-400 hover:text-cyan-400"></i>
              </a>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="flex justify-center">
            <div className="relative">
              <img 
                data-animate-id="hero-image"
                src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20Abdul%20Hadi%2C%20AI%20and%20machine%20learning%20engineer%2C%20confident%20expression%2C%20dark%20modern%20background%20with%20subtle%20tech%20elements%2C%20professional%20headshot%20with%20soft%20lighting%2C%20dark%20theme%20with%20cyan%20and%20blue%20accents%2C%20clean%20minimalist%20style%2C%20high-quality%20portrait%20photography&width=400&height=400&seq=hero-portrait-1&orientation=squarish"
                alt="Abdul Hadi - AI/NLP/ML Engineer"
                className="w-80 h-80 rounded-full object-cover object-top shadow-2xl shadow-cyan-500/30 border-4 border-gray-800 hover:scale-105 transition-transform duration-500 opacity-0"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}