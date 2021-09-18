import React from 'react';
import { ReactComponent as MenuIcon } from '../../assets/images/icons/menu.svg';
import { ReactComponent as CloseIcon } from '../../assets/images/icons/close.svg';

export default function MobileNav({
  children,
  closeMenuRef,
  hidden,
  openMenuRef,
  toggleMenu,
}) {
  return (
    <>
      <button
        className='button--nav'
        aria-label='open navigation menu'
        onClick={toggleMenu}
        ref={openMenuRef}
      >
        <MenuIcon className='button--nav__icon' />
      </button>

      <div className={`header-nav-mask ${hidden ? 'hidden-mask' : ''}`}></div>
      <div
        className={`header-nav-container elevation-16dp ${
          hidden ? 'hidden-nav' : ''
        }`}
      >
        <div className='button--nav-container'>
          <button
            className='button--nav'
            aria-label='close navigation menu'
            onClick={toggleMenu}
            ref={closeMenuRef}
          >
            <CloseIcon className='button--nav__icon' />
          </button>
        </div>
        {children}
      </div>
    </>
  );
}
