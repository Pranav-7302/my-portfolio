import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaWhatsapp, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-left">
        <h3 className="footer-logo">Pranav<span>Gupta</span></h3>
        <p>Frontend Developer</p>
        <p className="footer-copy">© {year} All rights reserved.</p>
      </div>

      <div className="footer-center">
        <button className="scroll-top" onClick={scrollToTop} title="Back to Top">
          <FaArrowUp />
        </button>
        <p>Built with ❤️ using React | Hosted on GitHub Pages</p>
      </div>

      <div className="footer-right">
        <h4>Connect with me</h4>
        <div className="footer-socials">
          <a href="https://wa.me/917300574260" title="WhatsApp" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          <a href="https://www.linkedin.com/in/pranavgupta60" title="LinkedIn" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/Pranav-7302" title="GitHub" target="_blank" rel="noreferrer"><FaGithub /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
