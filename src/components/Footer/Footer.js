import React from 'react';
import NavLinks from '../Navigation/NavLinks';
import Contact from '../Contact/Contact';

export default function Footer({ theme, topRef }) {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
    });

    topRef.current.focus();
  };

  return (
    <footer>
      <div className='footer__nav'>
        <button className='button--text' onClick={handleScrollToTop}>
          Back to Top
        </button>
        <NavLinks
          navClass='footer-nav'
          navLabel='main navigation'
          topRef={topRef}
        />
        <Contact theme={theme} />
      </div>
      <div className='footer__secondary'>
        <p className='footer__pun'>N-eyes of you to stop by!</p>
        <p className='footer__copyright'>
          Copyright © {new Date().getFullYear()} Eric Olkowski
        </p>
      </div>
    </footer>
  );
}
