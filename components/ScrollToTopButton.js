"use client"

import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.pageYOffset > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  };

  return (
    <div className={`fixed bottom-4 right-4 ${showButton ? 'block' : 'hidden'}`}>
      <button
        className="bg-gray-500 text-white px-4 py-2 rounded"
        onClick={handleScrollToTop}
      >
        Scroll to Top
      </button>
    </div>
  );
};

export default ScrollToTopButton;