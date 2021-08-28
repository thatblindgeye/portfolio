import React, { useState, useEffect, useRef } from 'react';
import Accessibility from './components/Accessibility/Accessibility';
import Router from './components/Router/Router';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const topOfPageRef = useRef(null);

  // Initialize theme from local storage or set theme in local storage
  // when component mounts
  useEffect(() => {
    let savedTheme = localStorage.getItem('theme');

    if (!localStorage.getItem('theme')) {
      savedTheme = 'dark';
      localStorage.setItem('theme', savedTheme);
    }
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const handleThemeToggle = (e) => {
    if (e.type === 'click' || e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      const newTheme = theme === 'dark' ? 'light' : 'dark';

      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    }
  };

  return (
    <>
      <header>
        <Accessibility
          siteTheme={theme}
          themeToggle={handleThemeToggle}
          topOfPageRef={topOfPageRef}
        />
      </header>
      <Router />
    </>
  );
}
