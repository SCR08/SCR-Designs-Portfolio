import React, { useState, useEffect } from 'react';
import './scrollup.css';

const ScrollUp = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 560) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`scrollup ${showScroll ? 'show-scroll' : ''}`}
      onClick={scrollToTop}
    >
      <i className="uil uil-angle-up scrollup__icon"></i>
    </button>
  );
};

export default ScrollUp;
