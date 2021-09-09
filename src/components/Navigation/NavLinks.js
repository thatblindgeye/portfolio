/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { path: '/', name: 'Home' },
  { path: '/projects', name: 'Projects' },
  { path: '/contributions', name: 'Contributions' },
  { path: '/about', name: 'About' },
];

export default function NavLinks({ navClass, navLabel, closeMenu }) {
  const { pathname } = useLocation();
  const [activeLink, setActiveLink] = useState(pathname);

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  return (
    <nav className={navClass} aria-label={navLabel}>
      <ul className={`${navClass}-list`} role='list'>
        {links.map((link, index) => {
          const { path, name } = link;
          return (
            <li key={index} className={`${navClass}-list__item`}>
              <Link
                to={path}
                className={`${navClass}-link ${
                  activeLink === path ? 'active-link' : ''
                }`}
                onClick={closeMenu}
              >
                {name}
              </Link>
              <div className={`${navClass}-link__border`}></div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
