import React, { useState, useEffect, useRef } from 'react';
import NavLinks from './NavLinks';
import MobileNav from './MobileNav';

export default function HeaderNavbar() {
  const [isMobile, setIsMobile] = useState(true);
  const [isHidden, setIsHidden] = useState(true);
  const openMenuRef = useRef(null);
  const closeMenuRef = useRef(null);

  const handleMenuToggle = () => {
    // Place focus on button to aid keyboard navigation
    isHidden ? closeMenuRef.current.focus() : openMenuRef.current.focus();
    setIsHidden(!isHidden);
  };

  useEffect(() => {
    function handleAltMenuClose(e) {
      if (
        (openMenuRef.current && e.key === 'Escape') ||
        // Extra space must be kept at end due to conditional class name
        e.target.className === 'header-nav-mask '
      ) {
        setIsHidden(true);
        openMenuRef.current.focus();
      }
    }
    window.addEventListener('keydown', handleAltMenuClose);
    window.addEventListener('click', handleAltMenuClose);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (document.documentElement.offsetWidth <= 600) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const navItems = Array.from(
      document.querySelectorAll('.header-nav-container > button, .header-nav a')
    );
    const focusableItems = Array.from(
      document.querySelectorAll('button, a, [role="checkbox"]')
    );
    const nonNavItems = focusableItems.filter((item) => {
      return navItems.indexOf(item) === -1;
    });

    navItems.forEach((item) => {
      if (isHidden) {
        item.setAttribute('tabIndex', '-1');
      } else {
        item.removeAttribute('tabIndex');
      }
    });

    nonNavItems.forEach((item) => {
      if (isHidden) {
        item.className === 'theme-toggle'
          ? item.setAttribute('tabIndex', '0')
          : item.removeAttribute('tabIndex');
      } else {
        item.setAttribute('tabIndex', '-1');
      }
    });
  }, [isHidden]);

  useEffect(() => {
    !isHidden
      ? document.body.classList.add('menu-open')
      : document.body.classList.remove('menu-open');
  }, [isHidden]);

  return isMobile ? (
    <MobileNav
      hidden={isHidden}
      toggleMenu={handleMenuToggle}
      openMenuRef={openMenuRef}
      closeMenuRef={closeMenuRef}
    >
      <NavLinks
        navClass='header-nav'
        navLabel='main navigation'
        closeMenu={handleMenuToggle}
      />
    </MobileNav>
  ) : (
    <NavLinks navClass='header-nav' navLabel='main navigation' />
  );
}
