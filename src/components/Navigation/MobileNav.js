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
        className='nav-button'
        aria-label='open navigation menu'
        onClick={toggleMenu}
        ref={openMenuRef}
      >
        <MenuIcon className='nav-button__icon' />
      </button>
      <div className={`header-nav-mask ${hidden ? 'hidden-mask' : ''}`}></div>
      <div className={`header-nav-container ${hidden ? 'hidden-nav' : ''}`}>
        <button
          className='nav-button'
          aria-label='close navigation menu'
          onClick={toggleMenu}
          ref={closeMenuRef}
        >
          <CloseIcon className='nav-button__icon' />
        </button>
        {children}
      </div>
    </>
  );
}
