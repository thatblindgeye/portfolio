import React, { useEffect, useState } from 'react';
import work from '../../work.json';

function ContributionCard({ contribution }) {
  const { name, link, description, accomplishments } = contribution;
  return (
    <div>
      <a href={link}>{name}</a>
      <div>{description}</div>
      {accomplishments.length ? (
        <ul>
          {accomplishments.map((item, index) => {
            return <li key={index}>{item}</li>;
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
    <div>
      <div>
        {contributions.map((contribution, index) => {
          return <ContributionCard key={index} contribution={contribution} />;
        })}
      </div>
    </div>
  );
}
