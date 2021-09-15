import React, { useEffect } from 'react';
import work from '../../work.json';

function ContributionCard({ contribution }) {
  const { name, contributee, link, description, accomplishments } =
    contribution;
  return (
    <div className='contribution__card card elevation-01dp'>
      <h2 className='contribution__name'>
        <a className='link' href={link}>
          {name}
        </a>
        {contributee ? (
          <div className='contribution__contributee'>{contributee}</div>
        ) : null}
      </h2>
      <div className='contribution__description'>{description}</div>
      {accomplishments.length ? (
        <ul className='contribution__list'>
          {accomplishments.map((item, index) => {
            return (
              <li key={index} className='contribution__list-item'>
                {item}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

export default function Contributions() {
  const contributions = work.contributions;

  useEffect(() => {
    document.title = 'Contributions | Eric Olkowski';
  }, []);

  return (
    <>
      <h1 className='page__header'>Contributions</h1>
      <div className='contributions-container'>
        {contributions.map((contribution, index) => {
          return <ContributionCard key={index} contribution={contribution} />;
        })}
      </div>
    </>
  );
}
