
'use client';

import { useEffect, useRef, useState } from 'react';
import anime from 'animejs';

export default function Education() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          // Anime.js scroll animations
          anime({
            targets: '.education-title',
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 800,
            easing: 'easeOutExpo',
            delay: 200
          });

          anime({
            targets: '.education-divider',
            scaleX: [0, 1],
            duration: 600,
            easing: 'easeOutExpo',
            delay: 400
          });

          anime({
            targets: '.education-image',
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutExpo',
            delay: 600
          });

          anime({
            targets: '.education-card',
            translateX: [50, 0],
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutExpo',
            delay: 800
          });

          anime({
            targets: '.course-tag',
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 400,
            easing: 'easeOutExpo',
            delay: anime.stagger(50, { start: 1200 })
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const courses = [
    'Natural Language Processing',
    'Machine Learning',
    'Deep Learning',
    'Signal Processing',
    'Computer Vision',
    'Data Structures & Algorithms',
    'Statistics & Probability',
    'Neural Networks'
  ];

  return (
    <section ref={sectionRef} id="education" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="education-title text-4xl font-bold text-white mb-4 opacity-0">Education</h2>
          <div className="education-divider w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://readdy.ai/api/search-image?query=Modern%20university%20campus%20with%20electrical%20engineering%20building%2C%20dark%20evening%20lighting%20with%20illuminated%20windows%2C%20students%20walking%20with%20laptops%20and%20books%2C%20contemporary%20academic%20architecture%20with%20technology%20labs%20visible%2C%20professional%20educational%20environment%20with%20blue%20accent%20lighting%20and%20dark%20sky&width=600&height=400&seq=education-dark-1&orientation=landscape"
              alt="University Campus"
              className="education-image rounded-lg shadow-xl shadow-cyan-500/20 w-full object-cover object-top hover:scale-105 transition-transform duration-500 opacity-0"
            />
          </div>
          
          <div>
            <div className="education-card bg-gray-900/50 border border-gray-700 rounded-lg p-8 hover:border-cyan-500 hover:bg-cyan-500/5 transition-all duration-300 opacity-0 mb-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-cyan-500/20 rounded-full mr-4">
                  <i className="ri-graduation-cap-line text-2xl text-cyan-400"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Bachelor's of Science in Electrical Engineering</h3>
                  <p className="text-cyan-300">Ghulam Ishaq Khan Institute of Engineering Sciences and Technology</p>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <div className="w-4 h-4 flex items-center justify-center mr-2">
                    <i className="ri-calendar-line text-cyan-400"></i>
                  </div>
                  <span className="text-gray-300">28/09/2020 – 25/05/2024</span>
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-4 h-4 flex items-center justify-center mr-2">
                    <i className="ri-star-line text-yellow-400"></i>
                  </div>
                  <span className="text-gray-300">Level in EQF: EQF level 6</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 flex items-center justify-center mr-2">
                    <i className="ri-medal-line text-cyan-400"></i>
                  </div>
                  <span className="text-gray-300">Location: Topi, Pakistan</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Relevant Coursework</h4>
                <div className="grid grid-cols-2 gap-3">
                  {courses.map((course, index) => (
                    <div 
                      key={course}
                      className="course-tag bg-gray-800/50 border border-gray-600 px-3 py-2 rounded-lg text-sm text-gray-300 hover:border-cyan-500 hover:text-cyan-300 transition-all duration-300 cursor-pointer transform hover:scale-105 opacity-0"
                    >
                      {course}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="education-card bg-gray-900/50 border border-gray-700 rounded-lg p-8 hover:border-cyan-500 hover:bg-cyan-500/5 transition-all duration-300 opacity-0">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-cyan-500/20 rounded-full mr-4">
                  <i className="ri-graduation-cap-line text-2xl text-cyan-400"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Intermediate Secondary Education</h3>
                  <p className="text-cyan-300">Punjab Group of Colleges</p>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <div className="w-4 h-4 flex items-center justify-center mr-2">
                    <i className="ri-calendar-line text-cyan-400"></i>
                  </div>
                  <span className="text-gray-300">06/08/2018 – 10/07/2020</span>
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-4 h-4 flex items-center justify-center mr-2">
                    <i className="ri-star-line text-yellow-400"></i>
                  </div>
                  <span className="text-gray-300">Level in EQF: EQF level 4</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 flex items-center justify-center mr-2">
                    <i className="ri-medal-line text-cyan-400"></i>
                  </div>
                  <span className="text-gray-300">Location: Bahawalpur, Pakistan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
