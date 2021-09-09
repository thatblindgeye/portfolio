import React from 'react';
import { ReactComponent as LightThemeIcon } from '../../assets/images/icons/light_theme.svg';
import { ReactComponent as DarkThemeIcon } from '../../assets/images/icons/dark_theme.svg';

export default function Accessibility({
  siteTheme,
  themeToggle,
  topOfPageRef,
}) {
  return (
    <div className='a11y-container'>
      <a href='#content' className='skip-link' ref={topOfPageRef}>
        Skip to Content
      </a>
      <div
        role='checkbox'
        className='theme-toggle'
        aria-checked={siteTheme === 'dark' ? 'false' : 'true'}
        aria-label='enable light theme'
        tabIndex='0'
        onClick={themeToggle}
        onKeyDown={themeToggle}
      >
        {siteTheme === 'dark' ? (
          <DarkThemeIcon className='theme-icon' />
        ) : (
          <LightThemeIcon className='theme-icon' />
        )}
      </div>
    </div>
  );
}
