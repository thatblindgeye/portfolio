import React, { useEffect } from 'react';
import Logo from '../Logo/Logo';
import githubDark from '../../assets/images/logos/GitHub-White-Mark-64px.png';
import githubLight from '../../assets/images/logos/GitHub-Black-Mark-64px.png';
import linkedinDark from '../../assets/images/logos/linkedin-white.png';
import linkedinLight from '../../assets/images/logos/linkedin-blue.png';
import emailDark from '../../assets/images/icons/baseline_email_white_24dp.png';
import emailLight from '../../assets/images/icons/baseline_email_black_24dp.png';

export default function Home({ theme }) {
  useEffect(() => {
    document.title = 'thatblindgeye  | A11y Dedication';
  }, []);

  return (
    <div className='home-container'>
      <Logo />
      <div className='home-info'>
        <p className='home-info__name'>Eric Olkowski</p>
        <p className='home-info__title'>Front-End Developer</p>
        <div className='home-info__contact'>
          <a href='https://github.com/thatblindgeye'>
            <img
              className='contact-icon'
              src={theme === 'dark' ? githubDark : githubLight}
              alt='Github'
            />
          </a>
          <a href='https://www.linkedin.com/in/ericolkowski/'>
            <img
              className='contact-icon'
              src={theme === 'dark' ? linkedinDark : linkedinLight}
              alt='LinkedIn'
            />
          </a>
          <a href='mailto:ejo10488@gmail.com'>
            <img
              className='contact-icon'
              src={theme === 'dark' ? emailDark : emailLight}
              alt='Email'
            />
          </a>
        </div>
        <p className='home-info__description'>
          I develop things: web things, accessible things, responsive things.
        </p>
        <p className='home-info__pun'>N-eyes of you to stop by!</p>
      </div>
    </div>
  );
}
