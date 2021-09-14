import React, { useEffect, useState } from 'react';
import work from '../../work.json';

function ContributionCard({ contribution }) {
  const { name, link, description, accomplishments } = contribution;
  return (
    <div className='contribution__card card elevation-06dp'>
      <h2 className='contribution__name'>
        <a className='link' href={link}>
          {name}
        </a>
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
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    document.title = 'Contributions | Eric Olkowski';
  }, []);

  useEffect(() => {
    setContributions(work.contributions);
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
