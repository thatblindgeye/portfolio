import React, { useEffect } from 'react';

export default function NoMatch() {
  useEffect(() => {
    document.title = 'Page Not Found | Eric Olkowski';
  }, []);

  return (
    <>
      <h1 className='page__header'>Page Not Found</h1>
      <div className='no-match-container'>
        <p>
          Sorry, this page doesn't exist. Although, if it doesn't exist, then
          how am I telling you this...
        </p>
      </div>
    </>
  );
}
