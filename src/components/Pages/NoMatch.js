import React, { useEffect } from 'react';

export default function NoMatch() {
  useEffect(() => {
    document.title = 'Page Not Found | thatblindgeye';
  }, []);

  return (
    <div>
      <h1>Page Not Found</h1>
      <p>
        Sorry, this page doesn't exist. Although, if it doesn't exist, then how
        am I telling you this...
      </p>
    </div>
  );
}
