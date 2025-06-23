import React from 'react';
import './Education.css';
import { FaGraduationCap } from 'react-icons/fa';

const educationData = [
    {
    degree: 'Full Stack Web Development (MERN)',
    institute: 'AccioJob (in collaboration with IIT Guwahati)',
  location: 'Noida, Uttar Pradesh',
  duration: '2024 - Present',
    },
    {
    degree: "Bachelor's of Computer Applications (BCA)",
    institute: 'Spc Degree College (CCS UNIVERSITY)',
    location: 'Baghpat, Uttar Pradesh',
    duration: '2021 - 2024',
    },
    {
    degree: 'Higher Secondary (Class 12)',
    institute: 'Vidya Bhawan Inter College',
    location: 'Baghpat, Uttar Pradesh',
    duration: '2020 - 2021',
    }
];

const Education = () => {
  return (
    <section id="Education" className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        {educationData.map((edu, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-icon"><FaGraduationCap /></div>
            <div className="timeline-content">
              <h3>{edu.degree}</h3>
              <h4>{edu.institute}</h4>
              <p>{edu.location}</p>
              <span className="duration">{edu.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
