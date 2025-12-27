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
      title: "ClarosMed – Intelligent Medical Search Engine",
      description: "Designed and developed a next-generation AI-powered medical search engine, inspired by Perplexity, to serve healthcare professionals, patients, researchers, and pharmaceutical experts. Implemented a multi-model routing system featuring a Super Router to dynamically classify queries and direct them to the most relevant large language model (LLM) for accurate responses.",
      tech: ["Python", "Angular", "FastAPI", "LLM", "LangChain", "LangGraph"],
      image: "https://readdy.ai/api/search-image?query=AI%20medical%20search%20engine%20interface%2C%20healthcare%20search%20system%2C%20intelligent%20medical%20search%20platform%2C%20doctor%20using%20AI%20search%20tool%2C%20medical%20research%20database%2C%20healthcare%20AI%20application%2C%20dark%20theme%20with%20cyan%20and%20blue%20accents%2C%20medical%20visualization&width=600&height=400&seq=medical-search-1&orientation=landscape",
      github: "#",
      live: "#"
    },
    {
      title: "Public Health Intelligence System",
      description: "Led the design and development of a data analytics and disease forecasting platform for monitoring chronic health trends across state, county, and city levels in the United States. Performed large-scale data analysis on 600,000+ patient records to detect chronic disease prevalence and high-risk population clusters.",
      tech: ["Python", "FastAPI", "Angular", "Machine Learning", "Pandas", "Scikit-learn"],
      image: "https://readdy.ai/api/search-image?query=Public%20health%20intelligence%20dashboard%2C%20disease%20forecasting%20system%2C%20healthcare%20data%20analytics%2C%20epidemiological%20data%20visualization%2C%20medical%20data%20dashboard%2C%20disease%20prediction%20analytics%2C%20healthcare%20data%20platform%2C%20dark%20theme%20with%20cyan%20and%20blue%20accents%2C%20medical%20visualizations&width=600&height=400&seq=health-intelligence-1&orientation=landscape",
      github: "#",
      live: "#"
    },
    {
      title: "Treatment Efficacy – Trend Event Pattern Mining",
      description: "Developed a trend event pattern-mining algorithm to evaluate medication efficacy using longitudinal lab results and vital-sign data. Designed temporal analysis pipelines linking medication encounters with patient-specific lab trajectories to detect statistically significant improvements post-treatment.",
      tech: ["Python", "Pandas", "Scikit-learn", "Data Analysis", "Machine Learning"],
      image: "https://readdy.ai/api/search-image?query=Treatment%20efficacy%20analysis%20dashboard%2C%20medical%20treatment%20evaluation%2C%20patient%20data%20analysis%2C%20trend%20event%20pattern%20mining%2C%20medication%20efficacy%20dashboard%2C%20healthcare%20data%20analytics%2C%20patient%20outcome%20assessment%2C%20dark%20theme%20with%20cyan%20and%20blue%20accents%2C%20medical%20visualizations&width=600&height=400&seq=treatment-efficacy-1&orientation=landscape",
      github: "#",
      live: "#"
    },
    {
      title: "Disease Outbreak Prediction & Detection System",
      description: "Developed a two-stage machine learning framework to detect and forecast abnormal spikes in disease encounters using historical epidemiological data. Built supervised classification models (Random Forest, XGBoost) to identify anomalous patient-encounter clusters signaling potential outbreaks.",
      tech: ["Python", "Machine Learning", "XGBoost", "Random Forest", "LangGraph", "Time Series"],
      image: "https://readdy.ai/api/search-image?query=Disease%20outbreak%20prediction%20system%2C%20epidemiological%20data%20analysis%2C%20outbreak%20detection%20dashboard%2C%20healthcare%20surveillance%20system%2C%20disease%20forecasting%20platform%2C%20public%20health%20monitoring%2C%20dark%20theme%20with%20cyan%20and%20blue%20accents%2C%20medical%20visualizations&width=600&height=400&seq=outbreak-prediction-1&orientation=landscape",
      github: "#",
      live: "#"
    },
    {
      title: "Lake Preprocessors Package",
      description: "Built an internal Python package for automated data cleansing and transformation on Delta Lake tables, minimizing ETL code complexity and dependency overhead. Designed reusable PySpark modules for schema validation, deduplication, and normalization.",
      tech: ["Python", "PySpark", "Delta Lake", "ETL", "Data Engineering"],
      image: "https://readdy.ai/api/search-image?query=Data%20preprocessing%20package%2C%20ETL%20pipeline%20visualization%2C%20Delta%20Lake%20data%20processing%2C%20PySpark%20data%20engine%2C%20data%20cleansing%20tool%2C%20automated%20data%20transformation%2C%20data%20engineering%20toolkit%2C%20dark%20theme%20with%20cyan%20and%20blue%20accents%2C%20data%20flow%20visualizations&width=600&height=400&seq=data-preprocessing-1&orientation=landscape",
      github: "#",
      live: "#"
    },
    {
      title: "Healthcare Code Mapping Enhancements",
      description: "Developed a scalable medical code mapping framework supporting multiple healthcare coding standards (ICD, GPI, IMO, CPT, NDC) to ensure interoperability across clinical systems. Implemented bidirectional translation algorithms enabling seamless conversion between free-text clinical terms and standardized medical codes.",
      tech: ["Python", "FastAPI", "Healthcare Standards", "API Development", "Data Mapping"],
      image: "https://readdy.ai/api/search-image?query=Healthcare%20code%20mapping%20system%2C%20medical%20coding%20standards%2C%20ICD%20code%20mapping%2C%20clinical%20terminology%20translation%2C%20medical%20code%20interoperability%2C%20healthcare%20data%20mapping%2C%20clinical%20system%20integration%2C%20dark%20theme%20with%20cyan%20and%20blue%20accents%2C%20medical%20visualizations&width=600&height=400&seq=healthcare-mapping-1&orientation=landscape",
      github: "#",
      live: "#"
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-black">
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
                      className="px-3 py-1 bg-gray-800 text-cyan-400 text-xs rounded-full border border-gray-600 flex items-center gap-1 whitespace-nowrap"
                    >
                      <i className="ri-code-s-slash-line text-xs"></i>
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