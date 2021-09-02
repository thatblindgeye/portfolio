import React, { useEffect, useState } from 'react';
import ContributionCard from '../Cards/ContribCard';
import work from '../../work.json';

export default function Contributions() {
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    document.title = 'Contributions | thatblindgeye';
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
