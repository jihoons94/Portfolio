import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import { workExperience } from '../data/workExperience';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="experience-section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-list">
          <div className="company-item">
            <div className="company-header">
              <h3>
                <a href={workExperience.companyUrl} target="_blank" rel="noopener noreferrer">
                  {workExperience.company}
                </a>
                {workExperience.isCurrent && <span className="current-badge">재직중</span>}
              </h3>
              <p>{workExperience.companyDesc}</p>
            </div>
            <div className="project-list">
              {workExperience.projects.map((project, index) => (
                <div key={index} id={`project-${index}`} className="project-item">
                  <h4>{project.name}</h4>
                  <div className="project-tech-stack">
                    {project.techStack.map(tech => {
                      // Runtime Script Engine에 링크 추가
                      if (tech === 'Runtime Script Engine') {
                        return (
                          <Link key={tech} to="/tech/script-engine" className="tech-tag tech-tag-link">
                            {tech}
                          </Link>
                        );
                      }
                      return <span key={tech} className="tech-tag">{tech}</span>;
                    })}
                  </div>
                  <div className="project-details">
                    <div className="project-info">
                      <p className="project-role">{project.role}</p>
                      <p className="project-team">{project.team}</p>
                      <span>{project.period}</span>
                    </div>
                    <ul className="project-tasks">
                      {project.tasks.map((task, i) => (
                        <li key={i}>
                          <span dangerouslySetInnerHTML={{ __html: task.content }} />
                          {task.details && (
                            <ul className="task-details">
                              {task.details.map((detail, j) => (
                                <li key={j} dangerouslySetInnerHTML={{ __html: detail }} />
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
