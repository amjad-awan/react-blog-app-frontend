import React, { useState, useEffect } from 'react';
import './style.css'; // Import your CSS file for styling

function Parallax() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const overlayOpacity = Math.min(0.5, scrollY * 0.005);

  return (
    <div className="parallax-container">
      <div
        className="parallax-bg"
        style={{ transform: `translate3d(0, ${-scrollY * 0.2}px, 0)` }}

      ></div>
      <div
        className="parallax-overlay"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
        }}
      ></div>
      <div className="parallax-content">
        <h1>Welcome to blog app</h1>
        <p>
          Here you will have your own dashboard to create and manages blogs post
        </p>
        {/* Additional content */}
      </div>
    </div>
  );
}

export default Parallax;
