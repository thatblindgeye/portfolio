import React, { useEffect } from 'react';
import Logo from '../Logo/Logo';
import Contact from '../Contact/Contact';
import { ReactComponent as WebIcon } from '../../assets/images/icons/web.svg';
import { ReactComponent as ResponsiveIcon } from '../../assets/images/icons/responsive.svg';
import { ReactComponent as AccessibleIcon } from '../../assets/images/icons/accessible.svg';

function HomeCards() {
  const cards = [
    {
      image: <WebIcon />,
      title: 'Web Things',
      text: 'I create a wide range of things, including a game jam project with a  team, a weather tracking web app, and a shopping cart React app.',
    },
    {
      image: <ResponsiveIcon />,
      title: 'Responsive Things',
      text: 'I create things from a mobile-first approach, and ensure      responsiveness works from smart phone to desktop.',
    },
    {
      image: <AccessibleIcon />,
      title: 'Accessible Things',
      text: 'I believe in creating things as accessible as possible to reach as wide an audience as possible by utilizing WAI-ARIA, semantic HTML, and the WCAG.',
    },
  ];

  return (
    <>
      <div className='home-card-container'>
        {cards.map((card, index) => {
          const { image, title, text } = card;

          return (
            <section key={index} className='home-card'>
              <div className='home-card__image'>{image}</div>
              <div className='home-card__info'>
                <h2 className='home-card__title'>{title}</h2>
                <p className='home-card__text'>{text}</p>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}

export default function Home({ theme }) {
  useEffect(() => {
    document.title = 'thatblindgeye  | A11y Dedication';
  }, []);

  return (
    <div className='home-container'>
      <Logo />
      <div className='home-info'>
        <div className='home-info__personal-container'>
          <h1 className='home-info__intro'>
            <div className='intro__top'>Hello, World.</div>
            I'm Eric Olkowski.
          </h1>
          <p className='intro__description'>
            I'm a self-learned Front-End Developer that loves creating things.
          </p>
          <Contact theme={theme} />
        </div>
      </div>
      <HomeCards />
    </div>
  );
}
