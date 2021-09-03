import React, { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    document.title = 'About | thatblindgeye';
  }, []);

  return (
    <div className='about-container'>
      <h1>About Eric Olkowski</h1>
      <div>
        <img src='//unsplash.it/250' alt='' />
        he/him
      </div>
      <h2>Who I Am</h2>
      <p>
        I'm a Front-End Developer that is dedicated to creating websites and
        apps that are accessible, responsive, and semantically correct.
      </p>

      <p>
        I was born with an eye disease called Retinitis Pigmentosa, which has
        affected my night and peripheral vision, as well as causing
        deteriorating vision loss overall. I'm not just an advocate for web
        accessibility, I personally rely on and benefit from it.
      </p>

      <p>
        I started my journey to become a developer in 2020 with{' '}
        <a href='https://www.theodinproject.com'>The Odin Project</a>. Thanks to
        their amazing, project-based curriculum, I not only discovered a set of
        skills I'm passionate about putting to use, but I learned how to use my
        eye disease as a strength.
      </p>

      <h2>What I Do</h2>
      <p>
        In addition to my dedication to accessibility. I also:
        <ul>
          <li>Build websites with React (including this one!)</li>
          <li>Utilize TDD using Jest</li>
          <li>Aid other members on The Odin Project's Discord server</li>
          <li>
            Enjoy reading books on programming, including You Don't Know
            JavaScript Yet
          </li>
        </ul>
      </p>

      <h2>Where I'll Be</h2>
      <p>
        Whenever someone asked, <q>where do you see yourself in X years?</q>, my
        response would tend to be in the "I hope to..." category. My passion for
        being a developer, if not confirmed by anything else, is confirmed by
        how I can now answer this question.
      </p>

      <p>
        Assuming I've kept this page updated and haven't already accomplished
        this goal, I'm going to become Full-Stack Developer as well as further
        help others become a11y allies. I'm definitely happy doing what I've
        done thus far, but there's so much more to learn and learn is what I'll
        do to become a more well-rounded developer.
      </p>

      <h2>Beyond The Developer</h2>
      <p>
        Outside of the time spent developing web things, I develop other things
        as a DM for and play in TTRPG's such as Dungeons & Dragons. Using
        another homebrew as a base, I created my own version of a homebrew
        system based in the universe of the animated TV shows Avatar: The Last
        Airbender and The Legend of Korra.
      </p>
    </div>
  );
}
