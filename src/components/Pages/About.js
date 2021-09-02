import React, { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    document.title = 'About | thatblindgeye';
  }, []);

  return <div>Soon to be about page</div>;
}
