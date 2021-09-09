/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  { path: '/', name: 'Home' },
  { path: '/projects', name: 'Projects' },
  { path: '/contributions', name: 'Contributions' },
  { path: '/about', name: 'About' },
];

export default function NavLinks({ navClass, navLabel, closeMenu }) {
  return (
    <nav className={navClass} aria-label={navLabel}>
      <ul role='list'>
        {links.map((link, index) => {
          const { path, name } = link;
          return (
            <li key={index}>
              <Link to={path} className='nav-link' onClick={closeMenu}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
