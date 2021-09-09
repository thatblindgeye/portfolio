import React from 'react';

export default function Footer({ topRef }) {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
    });

    topRef.current.focus();
  };

  return (
    <footer>
      <div className='upper-footer-nav'>
        <button className='button-text' onClick={handleScrollToTop}>
          Back to Top
        </button>
      </div>
      <div className='lower-footer-nav'>
        Copyright © {new Date().getFullYear()} Eric Olkowski
      </div>
    </footer>
  );
}
