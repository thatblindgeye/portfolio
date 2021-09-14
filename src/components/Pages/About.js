import React, { useEffect } from 'react';
import Skills from '../Skills/Skills';

export default function About() {
  useEffect(() => {
    document.title = 'About | Eric Olkowski';
  }, []);

  return (
    <>
      <h1 className='page__header'>About</h1>
      <div className='about-container'>
        <section className='about__section'>
          <h2 className='about__title'>Who I Am</h2>
          <div className='about__content'>
            <div className='about__side'>
              <div className='about__photo-container'>
                <img
                  className='about__photo elevation-04dp'
                  src='//unsplash.it/250'
                  alt='Eric Olkowski'
                />
              </div>
              <div className='about__pronouns'>he/him</div>
            </div>
            <div className='about__main'>
              <p>
                I'm a Front-End Developer that is dedicated to creating websites
                and apps that are accessible, responsive, and semantically
                correct.
              </p>
              <p>
                I was born with an eye disease called Retinitis Pigmentosa.
                While not completely blind, the disease has affected my night
                and peripheral vision, as well as caused deteriorating vision
                loss over the years. I'm not just an advocate for web
                accessibility, I personally rely on and benefit from it.
              </p>
              <p>
                In September 2020, I started my journey to become a developer by
                going through{' '}
                <a className='link' href='https://www.theodinproject.com'>
                  The Odin Project
                </a>
                , an open-source curriculum that helps people self-learn how to
                become a programmer via web development. Thanks to their
                amazing, project-based curriculum, I not only discovered a set
                of skills I'm passionate about putting to use, but I learned how
                to better use my eye disease as a strength for myself and
                others.
              </p>
              <p>
                In September 2021, I was invited to become one of The Odin
                Project's maintainers, with the purpose of the role being to
                moderate their Discord server as well as manage issues and PR's
                on the community's GitHub repositories.
              </p>
            </div>
          </div>
        </section>

        <section className='about__section'>
          <h2 className='about__title'>What I Do</h2>
          <div className='about__content'>
            <div className='about__side'>
              <Skills />
            </div>
            <div className='about__main'>
              <p>In addition to my skills as Front-End Developer, I also: </p>
              <ul className='about__list'>
                <li className='about__list-item'>
                  Aid other members on The Odin Project's Discord server
                </li>
                <li className='about__list-item'>
                  Enjoy reading books on programming, including You Don't Know
                  JavaScript Yet
                </li>
                <li className='about__list-item'>
                  Play and run TTRPG's such as Dungeons & Dragons, including
                  homebrew content I created based on the animated TV shows
                  Avatar: The Last Airbender and The Legend of Korra{' '}
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className='about__section'>
          <h2 className='about__title'>Where I'll Be</h2>
          <div className='about__content'>
            <div className='about__main'>
              <p>
                Whenever someone asked,{' '}
                <q>where do you see yourself in X years?</q>, my response would
                tend to be in a "I hope to..." tone. My passion for being a
                developer, if not confirmed by anything else, is confirmed by
                how I can now answer this question.
              </p>

              <p>
                I'm going to become Full-Stack Developer as well as further help
                others implement accessibility in their own work.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
