import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { FaEnvelope, FaPhone, FaChevronDown } from 'react-icons/fa';
import './Hero.css';

const Hero: React.FC = () => {
  const smoothScroll = (el: HTMLElement) => {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">새로움을 탐구하는 개발자</h1>
        <p className="hero-intro">
          8년차 개발자 김지훈 입니다.
        </p>
        <div className="hero-contact">
          <a href="mailto:jihoons8193@gmail.com">
            <FaEnvelope /> jihoons8193@gmail.com
          </a>
          <a href="tel:010-2035-0150">
            <FaPhone /> 010-2035-0150
          </a>
        </div>
        <HashLink to="/#projects" scroll={smoothScroll} className="cta-button">View My Work</HashLink>
      </div>
      <HashLink to="/#about" scroll={smoothScroll} className="scroll-down-indicator">
        <FaChevronDown />
      </HashLink>
    </section>
  );
};

export default Hero;

