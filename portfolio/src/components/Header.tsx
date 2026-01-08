import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import './Header.css';

const Header: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY && window.scrollY > 80) { // scrolling down
        setVisible(false);
      } else { // scrolling up
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlHeader);

      return () => {
        window.removeEventListener('scroll', controlHeader);
      };
    }
  }, [lastScrollY]);

  const smoothScroll = (el: HTMLElement) => {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`header ${visible ? 'header--visible' : 'header--hidden'}`}>
      <div className="container">
        <nav className="main-nav">
          <HashLink to="/#hero" scroll={smoothScroll} className="logo">J.H. KIM</HashLink>
          <ul>
            <li><HashLink to="/#about" scroll={smoothScroll}>About</HashLink></li>
            <li><HashLink to="/#featured-projects" scroll={smoothScroll}>Featured Projects</HashLink></li>
            <li><HashLink to="/#projects" scroll={smoothScroll}>Experience</HashLink></li>
            <li><HashLink to="/#skills" scroll={smoothScroll}>Skills</HashLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

