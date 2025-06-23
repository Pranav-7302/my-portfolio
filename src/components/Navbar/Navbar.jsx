import React from 'react'
import Logo from '../../assets/logo-pranav.jsx'
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <header>
      <nav className='navbar'>
        <div className="left-nav">
            <Logo/>  
        </div>

        <div className="center-nav">
              <a href="#Home">Home</a>
              <a href="#About">About Me</a>
              <a href="#Project">Project</a>
              <a href="#Education">Education</a>
              <a href="#Contact">Contact</a>
        </div>

        <div className="right-nav">
          <a href="https://wa.me/917300574260" title="Ping me on WhatsApp 💬" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="icon whatsapp" />
          </a>
          <a href="https://www.linkedin.com/in/pranavgupta60" title="Let’s Connect 💼" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon linkedin" />
          </a>
          <a href="https://github.com/yourgithub" target="_blank" title="Peek My Projects" rel="noopener noreferrer">
            <FaGithub className="icon github" />
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar