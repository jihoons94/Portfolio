import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './Header.css';

const Header: React.FC = () => {
  const smoothScroll = (el: HTMLElement) => {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="main-nav">
          <HashLink to="/#hero" scroll={smoothScroll} className="logo">J.H. KIM</HashLink>
          <ul>
            <li><HashLink to="/#about" scroll={smoothScroll}>About</HashLink></li>
            <li><HashLink to="/#projects" scroll={smoothScroll}>Experience</HashLink></li>
            <li><HashLink to="/#skills" scroll={smoothScroll}>Skills</HashLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

