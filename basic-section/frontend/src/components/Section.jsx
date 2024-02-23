import React, { useEffect, useRef, useState } from 'react';
import './Section.css';

const Section = ({ backgroundColor, children }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Change this threshold as needed
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`section ${isVisible ? 'visible' : ''}`}
      style={{
        backgroundColor,
        transition: 'opacity 1s ease-in-out' // Slow down the transition
      }}
    >
      <div className="section-content">
        {children}
      </div>
    </div>
  );
};

export default Section;
