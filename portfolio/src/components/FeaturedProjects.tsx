import React from 'react';
import './FeaturedProjects.css';
import { HashLink } from 'react-router-hash-link';
import { workExperience } from '../data/workExperience';

const FeaturedProjects: React.FC = () => {
  const featured = workExperience.projects.slice(0, 9); // Show first 4 projects

  return (
    <section id="featured-projects" className="featured-projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {featured.map((project, index) => (
            <HashLink 
              key={index} 
              to={`#project-${index}`} 
              smooth 
              className="project-card"
            >
              <img 
                src={project.thumbnail} 
                alt={`${project.name} thumbnail`} 
              />
              <div className="project-card-overlay">
                <div className="project-card-info">
                  <h5>{project.name}</h5>
                  <p>{project.period}</p>
                </div>
              </div>
            </HashLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

