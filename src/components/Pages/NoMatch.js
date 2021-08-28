import React, { useEffect } from 'react';

export default function NoMatch() {
  useEffect(() => {
    document.title = 'Page Not Found | thatblindgeye';
  }, []);

  return (
    <div>
      <h1>Critical Miss!</h1>
      <p>
        This page does not exist. Try clicking one of the active links on the
        page.
      </p>
    </div>
  );
}
