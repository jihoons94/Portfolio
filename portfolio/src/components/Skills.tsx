import React from 'react';
import { Link } from 'react-router-dom';
import { coreCompetencies } from '../data/techDetails';
import './Skills.css';

export const skills = [
  // Frontend
  { name: 'React', color: '61DAFB', logo: 'react' },
  { name: 'TypeScript', color: '3178C6', logo: 'typescript' },
  { name: 'JavaScript', color: 'F7DF1E', logo: 'javascript', logoColor: 'black' },
  { name: 'HTML5', color: 'E34F26', logo: 'html5' },
  { name: 'CSS3', color: '1572B6', logo: 'css3' },
  { name: 'Styled-Components', color: 'DB7093', logo: 'styled-components' },
  // Backend
  { name: 'Node.js', color: '339933', logo: 'nodedotjs' },
  { name: 'Express', color: '000000', logo: 'express' },
  { name: 'Python', color: '3776AB', logo: 'python' },
  { name: 'Java', color: '007396', logo: 'openjdk' },
  // Database
  { name: 'MySQL', color: '4479A1', logo: 'mysql' },
  { name: 'PostgreSQL', color: '4169E1', logo: 'postgresql' },
  { name: 'MongoDB', color: '47A248', logo: 'mongodb' },
  { name: 'Redis', color: 'DC382D', logo: 'redis' },
  // DevOps
  { name: 'AWS', color: '232F3E', logo: 'amazonaws' },
  { name: 'Docker', color: '2496ED', logo: 'docker' },
  { name: 'Git', color: 'F05032', logo: 'git' },
  { name: 'Jenkins', color: 'D24939', logo: 'jenkins' },
  { name: 'Nginx', color: '269539', logo: 'nginx' },
];

export const SkillBadge = ({ name, color, logo, logoColor = 'white' }: { name: string; color: string; logo: string; logoColor?: string }) => {
  const badgeUrl = `https://img.shields.io/badge/${name}-${color}?style=for-the-badge&logo=${logo}&logoColor=${logoColor}`;
  return <img src={badgeUrl} alt={`${name} skill badge`} />;
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">My Tech Stack</h2>
        <div className="competency-grid">
          {coreCompetencies.map(comp => (
            <Link to={`/tech/${comp.id}`} key={comp.id} className="competency-card">
              <span className="competency-icon">{comp.icon}</span>
              <h3 className="competency-name">{comp.name}</h3>
            </Link>
          ))}
        </div>
        <div className="skills-cloud">
          {skills.map(skill => (
            <SkillBadge key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
