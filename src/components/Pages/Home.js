import React, { useEffect } from 'react';
import Logo from '../Logo/Logo';

export default function Home() {
  useEffect(() => {
    document.title = 'thatblindgeye  | A11y Dedication';
  }, []);

  return (
    <div className='home-container'>
      <Logo />
      <div className='home-info'>
        <p className='home-info__name'>Eric Olkowski</p>
        <p className='home-info__title'>Front-End Developer</p>
        <div className='home-info__contact'>Link1 Link2 Link3</div>
        <p className='home-info__description'>
          I develop things: web things, accessible things, responsive things.
        </p>
        <p className='home-info__pun'>N-eyes of you to stop by!</p>
      </div>
    </div>
  );
}
