import React, { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    document.title = 'About | thatblindgeye';
  }, []);

  return (
    <div className='about-container'>
      <div>
        <img src='//unsplash.it/250' alt='' />
        Eric Olkowski - he/him
      </div>
      <p>
        I'm a Front-end Developer that is dedicated to created websites and apps
        that are as accessible as possible.
      </p>

      <p>
        I've lived a majority of my life with an eye disease called Retinitis
        Pigmentosa, which has affected my night and peripheral vision, as well
        as causing vision loss overall.
      </p>

      <p>
        I started my journey to become a developer in 2020 with{' '}
        <a href='https://www.theodinproject.com'>The Odin Project</a>. Thanks to
        their amazing curriculum,
      </p>

      <p>
        To think, an eye disease that gave such a feeling of hopelessness for so
        many years, is now something I use a strength as a developer.
      </p>
    </div>
  );
}
