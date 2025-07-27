'use client';

import { useEffect, useRef } from 'react';
import anime from 'animejs';

export default function Projects() {
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
              target.style.transform = 'translateY(50px) rotateY(15deg)';
              
              setTimeout(() => {
                switch (elementId) {
                  case 'projects-title':
                    anime({
                      targets: target,
                      translateY: [50, 0],
                      opacity: [0, 1],
                      duration: 800,
                      easing: 'easeOutExpo'
                    });
                    break;
                  case 'projects-divider':
                    anime({
                      targets: target,
                      scaleX: [0, 1],
                      opacity: [0, 1],
                      duration: 600,
                      easing: 'easeOutExpo'
                    });
                    break;
                  case 'project-card':
                    anime({
                      targets: target,
                      translateY: [50, 0],
                      rotateY: [15, 0],
                      opacity: [0, 1],
                      duration: 800,
                      easing: 'easeOutExpo',
                      delay: anime.random(0, 300)
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

  const projects = [
    {
      title: "Sentiment Analysis Engine",
      description: "Advanced NLP system for real-time sentiment analysis of social media data using transformer models and deep learning techniques.",
      tech: ["Python", "TensorFlow", "BERT", "FastAPI"],
      image: "https://readdy.ai/api/search-image?query=Advanced%20sentiment%20analysis%20dashboard%20showing%20real-time%20social%20media%20emotion%20detection%2C%20dark%20interface%20with%20colorful%20sentiment%20indicators%2C%20neural%20network%20visualization%2C%20data%20processing%20graphs%2C%20modern%20AI%20analytics%20interface%20with%20dark%20theme%20and%20cyan%20accents&width=600&height=400&seq=sentiment-analysis-1&orientation=landscape",
      github: "#",
      live: "#"
    },
    {
      title: "Question Answering System",
      description: "Intelligent QA system capable of understanding context and providing accurate answers from large document collections.",
      tech: ["Python", "LangChain", "OpenAI", "Vector DB"],
      image: "https://readdy.ai/api/search-image?query=Question%20answering%20AI%20system%20interface%20showing%20document%20analysis%20and%20intelligent%20responses%2C%20dark%20modern%20UI%20with%20question%20input%20and%20answer%20display%2C%20knowledge%20base%20visualization%2C%20search%20results%20with%20relevance%20scores%2C%20professional%20AI%20interface%20design&width=600&height=400&seq=qa-system-1&orientation=landscape",
      github: "#",
      live: "#"
    },
    {
      title: "Predictive Analytics Platform",
      description: "Machine learning platform for business forecasting and predictive modeling with automated feature engineering.",
      tech: ["Python", "Scikit-learn", "Pandas", "Plotly"],
      image: "https://readdy.ai/api/search-image?query=Predictive%20analytics%20dashboard%20with%20machine%20learning%20forecasting%20charts%2C%20business%20intelligence%20interface%2C%20time%20series%20predictions%2C%20automated%20feature%20engineering%20visualization%2C%20dark%20theme%20with%20data%20visualization%20graphs%20and%20metrics&width=600&height=400&seq=predictive-analytics-1&orientation=landscape",
      github: "#",
      live: "#"
    },
    {
      title: "Neural Network Optimizer",
      description: "Custom neural network optimization tools for hyperparameter tuning and model performance enhancement.",
      tech: ["Python", "PyTorch", "Optuna", "MLflow"],
      image: "https://readdy.ai/api/search-image?query=Neural%20network%20optimization%20interface%20showing%20hyperparameter%20tuning%20results%2C%20model%20performance%20metrics%2C%20training%20progress%20visualization%2C%20optimization%20algorithms%20comparison%2C%20dark%20scientific%20interface%20with%20performance%20graphs&width=600&height=400&seq=neural-optimizer-1&orientation=landscape",
      github: "#",
      live: "#"
    },
    {
      title: "Text Classification API",
      description: "RESTful API for multi-class text classification with support for custom model training and deployment.",
      tech: ["Python", "FastAPI", "Docker", "AWS"],
      image: "https://readdy.ai/api/search-image?query=Text%20classification%20API%20interface%20showing%20document%20categorization%20results%2C%20classification%20confidence%20scores%2C%20API%20endpoint%20documentation%2C%20text%20processing%20pipeline%20visualization%2C%20dark%20developer%20interface%20with%20code%20examples&width=600&height=400&seq=text-classification-1&orientation=landscape",
      github: "#",
      live: "#"
    },
    {
      title: "AI Chatbot Framework",
      description: "Conversational AI framework with natural language understanding and context-aware response generation.",
      tech: ["Python", "Rasa", "spaCy", "Redis"],
      image: "https://readdy.ai/api/search-image?query=AI%20chatbot%20framework%20interface%20showing%20conversation%20flow%2C%20natural%20language%20understanding%20components%2C%20intent%20recognition%20results%2C%20context%20management%20system%2C%20dark%20chat%20interface%20with%20AI%20response%20generation&width=600&height=400&seq=chatbot-framework-1&orientation=landscape",
      github: "#",
      live: "#"
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            data-animate-id="projects-title"
            className="text-4xl font-bold text-white mb-4 opacity-0"
          >
            Featured Projects
          </h2>
          <div 
            data-animate-id="projects-divider"
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8 opacity-0"
          ></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              data-animate-id="project-card"
              className="bg-black/50 border border-gray-700 rounded-lg overflow-hidden hover:border-cyan-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 cursor-pointer opacity-0"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-top transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gray-800 text-cyan-400 text-xs rounded-full border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
                  >
                    <i className="ri-github-fill text-lg"></i>
                    <span className="text-sm">Code</span>
                  </a>
                  <a 
                    href={project.live}
                    className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
                  >
                    <i className="ri-external-link-line text-lg"></i>
                    <span className="text-sm">Live</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}