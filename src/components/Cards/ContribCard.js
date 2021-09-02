import React from 'react';

export default function ContributionCard({ contribution }) {
  const { name, link, description, list } = contribution;
  return (
    <div>
      <a href={link}>{name}</a>
      <div>{description}</div>
      {list.length ? (
        <ul>
          {list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      ) : null}
    </div>
  );
}
