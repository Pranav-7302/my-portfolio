import React from 'react';
import './Project.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import project1image from '../../assets/DigitalStopWatch.png'
import project7 from '../../assets/webvibe-landing-page.png'
import Demo from '../../assets/profile-avtar.png'
const projects = [
  {
    title: 'Uploading Soon',
    description: 'will update soon',
    image: Demo,
    tech: ['React', 'CSS', 'JS'],
    github: '',
    demo: ''
  },
  {
   title: 'Uploading Soon',
    description: 'will update soon',
    image: Demo,
    tech: ['React', 'CSS', 'JS'],
    github: '',
    demo: ''
  },
  {
    title: 'Uploading Soon',
    description: 'will update soon',
    image: Demo,
    tech: ['React', 'CSS', 'JS'],
    github: '',
    demo: ''
  },
  {
    title: 'Uploading Soon',
    description: 'will update soon',
    image: Demo,
    tech: ['React', 'CSS', 'JS'],
    github: '',
    demo: ''
  },
  {
    title: 'Uploading Soon',
    description: 'will update soon',
    image: Demo,
    tech: ['React', 'CSS', 'JS'],
    github: '',
    demo: ''
  },
  {
    title: 'Digital StopWatch',
    description: 'A sleek and functional stopwatch built using HTML, CSS, and JavaScript. Features include start, stop, reset functionality with millisecond precision. Designed with a minimal UI and responsive layout for smooth user experience.',
    image: project1image,
    tech: ['HTML5', 'CSS3', 'Vanilla JS','DOM'],
    github: 'https://github.com/Pranav-7302/Digital-StopWatch',
    demo: 'https://pranav-7302.github.io/Digital-StopWatch/'
  },
  {
  title: 'WebVibe – Landing Page',
  image: project7, // screenshot path
  description: 'A static landing page created using only HTML and CSS. Focused on layout structure, visual hierarchy, and clean UI design.',
  tech: ['HTML', 'CSS'],
  github: 'https://github.com/Pranav-7302/webvibe-landing-page',
  demo: 'https://pranav-7302.github.io/webvibe-landing-page/'
 }


];

const Projects = () => {
  return (
    <section id="Project" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <img src={proj.image} alt={proj.title} className="project-img" />
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="tech-stack">
              {proj.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={proj.github} target="_blank" rel="noopener noreferrer"><FaGithub /> Code</a>
              <a href={proj.demo} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> Live</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
