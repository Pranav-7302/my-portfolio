import React from 'react';
import './About.css';
import { FaCode, FaPaintBrush, FaMobileAlt } from 'react-icons/fa';

const About = () => {
  return (
    <section id="About" className="about-container">
      <div className="about-left">
        <h2 className="about-title">About Me – Frontend Developer</h2>

        <p>
          I am <span className="bold">Pranav Gupta</span>, a <span className="highlight">Frontend Developer</span> skilled in crafting responsive and visually engaging user interfaces.
          I specialize in technologies like <b>React.js</b>, <b>JavaScript</b>, and <b>CSS</b>, with a passion for clean code and seamless user experience.
        </p>

        <p>
          My journey started with a deep interest in how websites work visually. Since then, I’ve honed my skills in creating fast, interactive, and accessible interfaces.
          Whether it's a personal project or a collaborative team effort, I aim for performance and design harmony.
        </p>

        <p>
          I enjoy solving real-world problems through thoughtful UI/UX and am always exploring better ways to deliver a delightful user experience.
        </p>
      </div>

      <div className="about-right">
        <div className="skill-card">
          <FaCode className="card-icon" />
          <h4>Frontend Development</h4>
          <p>React.js, JavaScript, HTML, CSS</p>
        </div>

        <div className="skill-card">
          <FaPaintBrush className="card-icon" />
          <h4>UI Design Tools</h4>
          <p>Figma, Canva, Tailwind CSS</p>
        </div>

        <div className="skill-card">
          <FaMobileAlt className="card-icon" />
          <h4>Responsive Design</h4>
          <p>Flexbox, Media Queries, Mobile-First</p>
        </div>
      </div>
    </section>
  );
};

export default About;
