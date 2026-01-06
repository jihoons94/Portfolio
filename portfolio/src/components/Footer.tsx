import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} KIM JI HOON. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

