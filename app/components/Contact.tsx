
'use client';

import { useEffect, useRef, useState } from 'react';
import anime from 'animejs';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          // Anime.js scroll animations
          anime({
            targets: '.contact-title',
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 800,
            easing: 'easeOutExpo',
            delay: 200
          });

          anime({
            targets: '.contact-divider',
            scaleX: [0, 1],
            duration: 600,
            easing: 'easeOutExpo',
            delay: 400
          });

          anime({
            targets: '.contact-description',
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 600,
            easing: 'easeOutExpo',
            delay: 600
          });

          anime({
            targets: '.contact-methods-title',
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 600,
            easing: 'easeOutExpo',
            delay: 800
          });

          anime({
            targets: '.contact-form-title',
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 600,
            easing: 'easeOutExpo',
            delay: 800
          });

          anime({
            targets: '.contact-method',
            translateX: [-50, 0],
            opacity: [0, 1],
            duration: 800,
            easing: 'easeOutExpo',
            delay: anime.stagger(100, { start: 1000 })
          });

          anime({
            targets: '.contact-form',
            translateX: [50, 0],
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutExpo',
            delay: 1000
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('Please fill in all required fields.');
      return;
    }
    
    // Validate email format
    if (!validateEmail(formData.email)) {
      setSubmitStatus('Please enter a valid email address.');
      return;
    }
    
    setIsSubmitting(true);
    
    // In a real application, you would send the email to your address here
    // This is a mock implementation that simulates sending an email
    try {
      // Simulate API call to send email
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real implementation, you would call your backend API to send the email
      // Example: await sendEmail(formData.name, formData.email, formData.message);
      
      setIsSubmitting(false);
      setSubmitStatus('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setIsSubmitting(false);
      setSubmitStatus('There was an error sending your message. Please try again later.');
    }
  };

  const contactMethods = [
    {
      icon: 'ri-mail-line',
      title: 'Email',
      value: 'abhadi027@gmail.com',
      link: 'mailto:abhadi027@gmail.com',
      color: 'cyan'
    },
    {
      icon: 'ri-linkedin-fill',
      title: 'LinkedIn',
      value: 'linkedin.com/in/abdulhadi111',
      link: 'https://www.linkedin.com/in/abdulhadi111/',
      color: 'blue'
    },
    {
      icon: 'ri-github-fill',
      title: 'GitHub',
      value: 'github.com/abdulhadikhadim',
      link: 'https://github.com/abdulhadikhadim',
      color: 'purple'
    },
    {
      icon: 'ri-phone-line',
      title: 'Phone',
      value: '(+92) 3152031419',
      link: 'tel:+923152031419',
      color: 'green'
    },
    {
      icon: 'ri-phone-fill',
      title: 'Mobile',
      value: '(+92) 3032031920',
      link: 'tel:+923032031920',
      color: 'yellow'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Address',
      value: 'Bahawalpur, Pakistan',
      link: '#',
      color: 'red'
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="contact-title text-4xl font-bold text-white mb-4 opacity-0">Get In Touch</h2>
          <div className="contact-divider w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
          <p className="contact-description text-gray-300 max-w-2xl mx-auto opacity-0">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about AI and technology. Feel free to reach out!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div>
            <h3 className="contact-methods-title text-2xl font-bold text-white mb-8 opacity-0">Contact Information</h3>
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <a
                  key={method.title}
                  href={method.link}
                  className={`contact-method flex items-center gap-4 bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-${method.color}-500 hover:bg-${method.color}-500/5 transition-all duration-500 cursor-pointer transform hover:scale-105 opacity-0`}
                >
                  <div className={`w-12 h-12 flex items-center justify-center bg-${method.color}-500/20 rounded-full`}>
                    <i className={`${method.icon} text-2xl text-${method.color}-400`}></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{method.title}</h4>
                    <p className="text-gray-400">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h3 className="contact-form-title text-2xl font-bold text-white mb-8 opacity-0">Send Message</h3>
            <form id="contact-form" onSubmit={handleSubmit} className="contact-form bg-gray-800/50 border border-gray-700 rounded-lg p-8 hover:border-cyan-500 hover:bg-cyan-500/5 transition-all duration-300 opacity-0">
              <div className="mb-6">
                <label htmlFor="name" className="block text-white mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 text-white px-4 py-3 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-white mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 text-white px-4 py-3 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-white mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  maxLength={500}
                  rows={5}
                  className="w-full bg-gray-700 border border-gray-600 text-white px-4 py-3 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
                  placeholder="Enter your message (max 500 characters)"
                />
                <p className="text-gray-400 text-sm mt-1">{formData.message.length}/500 characters</p>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || formData.message.length > 500}
                className="w-full bg-cyan-600 hover:bg-cyan-700 disabled:bg-gray-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="ri-send-plane-line"></i>
                    Send Message
                  </>
                )}
              </button>
              
              {submitStatus && (
                <div className="mt-4 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center">
                  {submitStatus}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
