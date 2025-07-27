
'use client';

import { useEffect, useRef, useState } from 'react';
import anime from 'animejs';

export default function Achievements() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          // Anime.js scroll animations
          anime({
            targets: '.achievements-title',
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 800,
            easing: 'easeOutExpo',
            delay: 200
          });

          anime({
            targets: '.achievements-divider',
            scaleX: [0, 1],
            duration: 600,
            easing: 'easeOutExpo',
            delay: 400
          });

          anime({
            targets: '.achievements-description',
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 600,
            easing: 'easeOutExpo',
            delay: 600
          });

          anime({
            targets: '.section-title',
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 600,
            easing: 'easeOutExpo',
            delay: 800
          });

          anime({
            targets: '.cert-card',
            translateX: [-50, 0],
            opacity: [0, 1],
            duration: 800,
            easing: 'easeOutExpo',
            delay: anime.stagger(100, { start: 1000 })
          });

          anime({
            targets: '.award-card',
            translateX: [50, 0],
            opacity: [0, 1],
            duration: 800,
            easing: 'easeOutExpo',
            delay: anime.stagger(100, { start: 1000 })
          });

          anime({
            targets: '.stat-item',
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 600,
            easing: 'easeOutExpo',
            delay: anime.stagger(100, { start: 1600 })
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

  const certifications = [
    {
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "2023",
      description: "Advanced certification in TensorFlow for machine learning and deep learning applications",
      icon: "ri-google-fill",
      color: "cyan",
      badge: "https://readdy.ai/api/search-image?query=TensorFlow%20certification%20badge%20with%20dark%20theme%2C%20professional%20certificate%20design%20with%20cyan%20and%20blue%20accents%2C%20Google%20branding%20elements%2C%20technical%20certification%20document%20with%20black%20background&width=100&height=100&seq=cert-1&orientation=squarish"
    },
    {
      title: "AWS Machine Learning Specialty",
      issuer: "Amazon Web Services",
      date: "2023",
      description: "Specialized certification in ML engineering, deployment, and optimization on AWS cloud platform",
      icon: "ri-cloud-line",
      color: "orange",
      badge: "https://readdy.ai/api/search-image?query=AWS%20machine%20learning%20certification%20badge%20with%20dark%20theme%2C%20professional%20certificate%20design%20with%20orange%20and%20black%20accents%2C%20Amazon%20Web%20Services%20branding%2C%20technical%20certification%20document&width=100&height=100&seq=cert-2&orientation=squarish"
    },
    {
      title: "Google Data Analytics Professional",
      issuer: "Google",
      date: "2022",
      description: "Comprehensive certification covering data analysis, visualization, and statistical modeling",
      icon: "ri-bar-chart-line",
      color: "blue",
      badge: "https://readdy.ai/api/search-image?query=Google%20Data%20Analytics%20certification%20badge%20with%20dark%20theme%2C%20professional%20certificate%20design%20with%20blue%20and%20cyan%20accents%2C%20Google%20branding%20elements%2C%20analytics%20certification%20document%20with%20black%20background&width=100&height=100&seq=cert-3&orientation=squarish"
    },
    {
      title: "Microsoft Azure AI Engineer Associate",
      issuer: "Microsoft",
      date: "2022",
      description: "Certification in designing and implementing AI solutions using Azure cognitive services",
      icon: "ri-microsoft-fill",
      color: "blue",
      badge: "https://readdy.ai/api/search-image?query=Microsoft%20Azure%20AI%20certification%20badge%20with%20dark%20theme%2C%20professional%20certificate%20design%20with%20blue%20and%20cyan%20accents%2C%20Microsoft%20branding%20elements%2C%20AI%20certification%20document%20with%20black%20background&width=100&height=100&seq=cert-4&orientation=squarish"
    }
  ];

  const awards = [
    {
      title: "Best AI Innovation Award",
      event: "Pakistan Tech Summit 2023",
      description: "Recognized for innovative healthcare AI solution improving diagnostic accuracy",
      icon: "ri-trophy-line",
      color: "yellow"
    },
    {
      title: "Outstanding Research Paper",
      event: "International Conference on NLP",
      description: "Published research on recursive neural networks for sentiment analysis",
      icon: "ri-article-line",
      color: "purple"
    },
    {
      title: "Hackathon Winner",
      event: "AI for Good Challenge 2022",
      description: "First place for developing AI-powered solution for healthcare accessibility",
      icon: "ri-code-box-line",
      color: "green"
    }
  ];

  return (
    <section ref={sectionRef} id="achievements" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="achievements-title text-4xl font-bold text-white mb-4 opacity-0">Achievements & Certifications</h2>
          <div className="achievements-divider w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
          <p className="achievements-description text-gray-300 max-w-2xl mx-auto opacity-0">
            Professional certifications and awards that demonstrate my expertise and commitment to excellence in AI and machine learning.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <h3 className="section-title text-2xl font-bold text-white mb-8 opacity-0">
              Professional Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div 
                  key={cert.title}
                  className={`cert-card bg-gray-900/50 border border-gray-700 rounded-lg p-6 hover:border-${cert.color}-500 hover:bg-${cert.color}-500/5 transition-all duration-500 cursor-pointer transform hover:scale-105 opacity-0`}
                >
                  <div className="flex items-start gap-4">
                    <img 
                      src={cert.badge}
                      alt={cert.title}
                      className="w-16 h-16 rounded-lg object-cover object-top"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-5 h-5 flex items-center justify-center">
                          <i className={`${cert.icon} text-${cert.color}-400`}></i>
                        </div>
                        <h4 className="font-bold text-white">{cert.title}</h4>
                      </div>
                      <p className="text-cyan-300 mb-2">{cert.issuer} • {cert.date}</p>
                      <p className="text-gray-400 text-sm">{cert.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Awards */}
          <div>
            <h3 className="section-title text-2xl font-bold text-white mb-8 opacity-0">
              Awards & Recognition
            </h3>
            <div className="space-y-6">
              {awards.map((award, index) => (
                <div 
                  key={award.title}
                  className={`award-card bg-gray-900/50 border border-gray-700 rounded-lg p-6 hover:border-${award.color}-500 hover:bg-${award.color}-500/5 transition-all duration-500 cursor-pointer transform hover:scale-105 opacity-0`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 flex items-center justify-center bg-${award.color}-500/20 rounded-full flex-shrink-0`}>
                      <i className={`${award.icon} text-2xl text-${award.color}-400`}></i>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white mb-2">{award.title}</h4>
                      <p className="text-cyan-300 mb-2">{award.event}</p>
                      <p className="text-gray-400 text-sm">{award.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="stat-item text-center opacity-0">
            <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
            <p className="text-gray-400">AI Projects</p>
          </div>
          <div className="stat-item text-center opacity-0">
            <div className="text-3xl font-bold text-blue-400 mb-2">4+</div>
            <p className="text-gray-400">Years Experience</p>
          </div>
          <div className="stat-item text-center opacity-0">
            <div className="text-3xl font-bold text-purple-400 mb-2">8+</div>
            <p className="text-gray-400">Certifications</p>
          </div>
          <div className="stat-item text-center opacity-0">
            <div className="text-3xl font-bold text-green-400 mb-2">3+</div>
            <p className="text-gray-400">Awards Won</p>
          </div>
        </div>
      </div>
    </section>
  );
}
