'use client';

import { useEffect, useRef } from 'react';
import anime from 'animejs';

export default function About() {
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
              target.style.transform = 'translateY(50px)';
              
              // Add slight delay before animation
              setTimeout(() => {
                switch (elementId) {
                  case 'about-title':
                    anime({
                      targets: target,
                      translateY: [50, 0],
                      opacity: [0, 1],
                      duration: 800,
                      easing: 'easeOutExpo'
                    });
                    break;
                  case 'about-divider':
                    anime({
                      targets: target,
                      scaleX: [0, 1],
                      opacity: [0, 1],
                      duration: 600,
                      easing: 'easeOutExpo'
                    });
                    break;
                  case 'about-image':
                    anime({
                      targets: target,
                      scale: [0.8, 1],
                      opacity: [0, 1],
                      duration: 1000,
                      easing: 'easeOutExpo'
                    });
                    break;
                  case 'about-content-title':
                    anime({
                      targets: target,
                      translateX: [50, 0],
                      opacity: [0, 1],
                      duration: 800,
                      easing: 'easeOutExpo'
                    });
                    break;
                  case 'about-content-text':
                    anime({
                      targets: target,
                      translateX: [30, 0],
                      opacity: [0, 1],
                      duration: 600,
                      easing: 'easeOutExpo'
                    });
                    break;
                  case 'skill-card':
                    anime({
                      targets: target,
                      scale: [0.8, 1],
                      opacity: [0, 1],
                      duration: 600,
                      easing: 'easeOutExpo'
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

  const skills = [
    { icon: 'ri-brain-line', title: 'Machine Learning', desc: 'Deep learning, neural networks, predictive modeling', color: 'cyan' },
    { icon: 'ri-chat-3-line', title: 'NLP', desc: 'Text processing, sentiment analysis, language models', color: 'blue' },
    { icon: 'ri-settings-3-line', title: 'Engineering', desc: 'Electrical engineering, signal processing, systems design', color: 'purple' },
    { icon: 'ri-lightbulb-line', title: 'Innovation', desc: 'Problem-solving, research, cutting-edge solutions', color: 'green' }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            data-animate-id="about-title"
            className="text-4xl font-bold text-white mb-4 opacity-0"
          >
            About Me
          </h2>
          <div 
            data-animate-id="about-divider"
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8 opacity-0"
          ></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              data-animate-id="about-image"
              src="https://readdy.ai/api/search-image?query=Professional%20software%20engineer%20working%20with%20artificial%20intelligence%20and%20machine%20learning%20code%20on%20multiple%20monitors%2C%20dark%20modern%20office%20setup%20with%20neural%20network%20diagrams%20and%20data%20visualization%20displays%2C%20black%20workspace%20with%20cyan%20and%20blue%20lighting%2C%20focused%20developer%20programming%20AI%20algorithms%2C%20high-tech%20development%20environment%20with%20dark%20theme&width=600&height=400&seq=about-work-dark-1&orientation=landscape"
              alt="Abdul Hadi working"
              className="rounded-lg shadow-xl shadow-cyan-500/20 w-full object-cover object-top hover:scale-105 transition-transform duration-500 opacity-0"
            />
          </div>
          
          <div className="space-y-6">
            <h3 
              data-animate-id="about-content-title"
              className="text-2xl font-bold text-white mb-6 opacity-0"
            >
              Passionate AI Engineer from Lahore
            </h3>
            <p 
              data-animate-id="about-content-text"
              className="text-gray-300 mb-6 leading-relaxed opacity-0"
            >
              I am Abdul Hadi, a dedicated AI/NLP/ML professional based in Lahore, Pakistan, with a strong background in electrical engineering. My expertise spans across natural language processing, machine learning, and developing innovative solutions that bridge the gap between complex algorithms and real-world applications.
            </p>
            <p 
              data-animate-id="about-content-text"
              className="text-gray-300 mb-6 leading-relaxed opacity-0"
            >
              With a passion for solving challenging problems through technology, I specialize in creating intelligent systems that can understand, process, and generate human language. My work focuses on developing cutting-edge solutions in sentiment analysis, question-answering systems, and predictive modeling.
            </p>
            <p 
              data-animate-id="about-content-text"
              className="text-gray-300 mb-8 leading-relaxed opacity-0"
            >
              I believe in the power of artificial intelligence to transform industries and improve lives. Through continuous learning and hands-on experience, I strive to push the boundaries of what's possible in the field of AI and machine learning.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={skill.title}
                  data-animate-id="skill-card"
                  className={`bg-gray-900/50 border border-gray-700 p-4 rounded-lg hover:border-${skill.color}-500 hover:bg-${skill.color}-500/10 transition-all duration-300 cursor-pointer transform hover:scale-105 opacity-0`}
                >
                  <div className="w-8 h-8 flex items-center justify-center mb-2">
                    <i className={`${skill.icon} text-2xl text-${skill.color}-400`}></i>
                  </div>
                  <h4 className="font-semibold text-white mb-1">{skill.title}</h4>
                  <p className="text-sm text-gray-400">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}