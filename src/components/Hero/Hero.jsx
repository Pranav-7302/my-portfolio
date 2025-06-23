import React from 'react';
import './Hero.css';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import HeroImg from '../../assets/profile-avtar.png';
import RealImg from '../../assets/profile-photo.jpg';
const Hero = () => {
    return (
        <section className="hero">
    <div className="hero-left">

        <h1>Hi, I'm <span className="highlight">Pranav</span><br />Gupta</h1>

        <p>As a <b className='highlight'>Frontend Developer</b>, I specialize in building fast, accessible, and visually engaging web interfaces.
        I’m driven by clean design, smooth interactions, and writing code that’s as readable as it is powerful.</p>

        <div className="hero-socials">
            <a href="https://wa.me/917300574260" title="Ping on WhatsApp"><FaWhatsapp /></a>
            <a href="https://www.linkedin.com/in/pranavgupta60" title="Let's Connect 💼"><FaLinkedin /></a>
            <a href="https://github.com/Pranav-7302" title="Peek My Projects"><FaGithub /></a>
        </div>

        <a href="/download.pdf" className="hero-btn" download>Download Resume</a>

            </div>

    <div className="hero-right">
        <img className='avtar-img' src={HeroImg} alt="Hero" />
        <img className='real-img' src={RealImg} alt="Profile-Photo" />
    </div>
        </section>
    );
};

export default Hero;
