/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderNavbar() {
  return (
    <nav className='header-nav' aria-label='main navigation'>
      <Link to='/' className='nav-link'>
        Home
      </Link>
      <Link to='/projects' className='nav-link'>
        Projects
      </Link>
      <Link to='/contributions' className='nav-link'>
        Contributions
      </Link>
      <Link to='/about' className='nav-link'>
        About Me
      </Link>
    </nav>
  );
}
