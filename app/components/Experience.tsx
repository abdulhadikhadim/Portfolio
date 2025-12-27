'use client';

import { useEffect, useRef } from 'react';
import anime from 'animejs';

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
              target.style.transform = 'translateX(50px)';
              
              setTimeout(() => {
                switch (elementId) {
                  case 'experience-title':
                    anime({
                      targets: target,
                      translateY: [50, 0],
                      opacity: [0, 1],
                      duration: 800,
                      easing: 'easeOutExpo'
                    });
                    break;
                  case 'experience-divider':
                    anime({
                      targets: target,
                      scaleX: [0, 1],
                      opacity: [0, 1],
                      duration: 600,
                      easing: 'easeOutExpo'
                    });
                    break;
                  case 'experience-item':
                    anime({
                      targets: target,
                      translateX: [50, 0],
                      opacity: [0, 1],
                      duration: 800,
                      easing: 'easeOutExpo',
                      delay: anime.random(0, 200)
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

    const elementsToObserve = sectionRef.current?.querySelectorAll('[data-animate-id]');
    elementsToObserve?.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      period: "08/07/2024 – Present",
      title: "AI Engineer",
      company: "CureMD – Lahore, Pakistan",
      description: "Designed and developed a next-generation AI-powered medical search engine, inspired by Perplexity, to serve healthcare professionals, patients, researchers, and pharmaceutical experts. Implemented a multi-model routing system featuring a Super Router to dynamically classify queries and direct them to the most relevant large language model (LLM) for accurate responses.",
      technologies: ["Python", "Angular", "FastAPI", "LLM", "LangChain", "LangGraph"],
      achievements: [
        "Developed an Angular-based conversational interface with FastAPI integration",
        "Integrated multiple domain-specific back-end AI agents including Clinical Trials, Real-World Evidence Querying, Treatment Plan Agent, and Assessment Agent",
        "Improved information retrieval efficiency and enhanced user accessibility across healthcare use cases"
      ]
    },
    {
      period: "Training Period",
      title: "AI Engineer Trainee",
      company: "CureMD – Lahore, Pakistan",
      description: "Completed 30+ MOOCs covering core and advanced topics such as Mathematics for AI, Advanced Data Structures, Classical Machine Learning, Knowledge Graphs, and Data Science. Led three major projects during the training phase, focusing on Data Science, Deep Learning, and Classical Machine Learning applications.",
      technologies: ["Python", "Machine Learning", "Deep Learning", "Data Science", "Mathematics for AI"],
      achievements: [
        "Achieved First Position in the Data Science project titled 'Trend Event Pattern Mining'",
        "Recognized for excellence in data analysis, pattern detection, and predictive modeling",
        "Completed comprehensive training program in AI and healthcare applications"
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            data-animate-id="experience-title"
            className="text-4xl font-bold text-white mb-4 opacity-0"
          >
            Professional Experience
          </h2>
          <div 
            data-animate-id="experience-divider"
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8 opacity-0"
          ></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-500"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.title}
                data-animate-id="experience-item"
                className="relative pl-20 opacity-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-cyan-400 rounded-full border-4 border-black shadow-lg shadow-cyan-400/50"></div>
                
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-8 hover:border-cyan-500 hover:bg-gray-900/70 transition-all duration-300 cursor-pointer">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <p className="text-cyan-400 text-lg font-medium">{exp.company}</p>
                    </div>
                    <span className="text-gray-400 text-sm lg:text-base mt-2 lg:mt-0 px-4 py-2 bg-gray-800 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-300 flex items-start">
                          <i className="ri-check-line text-cyan-400 mr-2 mt-1 flex-shrink-0"></i>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-gray-800 text-cyan-400 text-sm rounded-full border border-gray-600 hover:border-cyan-500 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}