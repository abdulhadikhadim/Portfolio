'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorRing = cursorRingRef.current;
    
    if (!cursor || !cursorRing) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Update cursor position immediately
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
    };

    const handleMouseDown = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
      cursorRing.style.transform = 'translate(-50%, -50%) scale(0.8)';
    };

    const handleMouseUp = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursorRing.style.transform = 'translate(-50%, -50%) scale(1)';
    };

    const handleMouseEnter = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
      cursorRing.style.transform = 'translate(-50%, -50%) scale(1.5)';
      cursor.style.backgroundColor = '#06b6d4';
      cursorRing.style.borderColor = '#06b6d4';
    };

    const handleMouseLeave = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursorRing.style.transform = 'translate(-50%, -50%) scale(1)';
      cursor.style.backgroundColor = '#ffffff';
      cursorRing.style.borderColor = '#ffffff';
    };

    // Smooth ring animation
    const animateRing = () => {
      const speed = 0.1;
      ringX += (mouseX - ringX) * speed;
      ringY += (mouseY - ringY) * speed;
      
      cursorRing.style.left = ringX + 'px';
      cursorRing.style.top = ringY + 'px';
      
      requestAnimationFrame(animateRing);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"], input, textarea, select');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Start ring animation
    animateRing();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-1 h-1 bg-white rounded-full pointer-events-none z-50 transition-all duration-150 ease-out"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div 
        ref={cursorRingRef}
        className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-50 transition-all duration-300 ease-out"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
}