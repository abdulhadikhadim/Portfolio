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
      period: "2023 - Present",
      title: "Senior AI/ML Engineer",
      company: "Tech Innovations Lab",
      description: "Leading AI research and development projects focused on natural language processing and machine learning applications. Developing cutting-edge solutions for text analysis, sentiment classification, and automated content generation.",
      technologies: ["Python", "TensorFlow", "PyTorch", "BERT", "GPT", "LangChain"],
      achievements: [
        "Improved model accuracy by 25% through advanced fine-tuning techniques",
        "Led a team of 5 engineers in developing enterprise AI solutions",
        "Published 3 research papers on NLP applications"
      ]
    },
    {
      period: "2021 - 2023",
      title: "Machine Learning Engineer",
      company: "DataVision Solutions",
      description: "Specialized in developing predictive models and data analysis systems for business intelligence. Implemented end-to-end ML pipelines and automated feature engineering processes.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Apache Spark", "MLflow", "Docker"],
      achievements: [
        "Reduced model training time by 40% through pipeline optimization",
        "Developed automated feature selection algorithms",
        "Deployed 15+ ML models to production environments"
      ]
    },
    {
      period: "2019 - 2021",
      title: "Data Scientist",
      company: "Analytics Pro",
      description: "Focused on data analysis, statistical modeling, and business intelligence solutions. Created comprehensive dashboards and reporting systems for executive decision-making.",
      technologies: ["Python", "R", "SQL", "Tableau", "Power BI", "MongoDB"],
      achievements: [
        "Increased revenue predictions accuracy by 30%",
        "Built interactive dashboards serving 100+ users",
        "Conducted A/B testing for product optimization"
      ]
    },
    {
      period: "2018 - 2019",
      title: "Junior Data Analyst",
      company: "StartupTech",
      description: "Entry-level position focusing on data collection, cleaning, and basic analysis. Gained foundational experience in statistical analysis and data visualization.",
      technologies: ["Python", "Excel", "SQL", "Matplotlib", "Seaborn"],
      achievements: [
        "Automated data collection processes saving 20 hours/week",
        "Created standardized reporting templates",
        "Completed advanced certifications in data science"
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