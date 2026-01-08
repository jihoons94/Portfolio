import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { techDetails } from '../data/techDetails';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './TechDetailPage.css';

const TechDetailPage: React.FC = () => {
  const { techId } = useParams<{ techId: string }>();
  const tech = techDetails.find((t) => t.id === techId);

  if (!tech) {
    return <div>Technology not found.</div>;
  }

  return (
    <>
      <Header />
      <main className="tech-detail-page">
        <div className="container">
          <header className="tech-detail-header">
            <Link to="/" className="back-link">&larr; Back to Home</Link>
            <h1>{tech.name}</h1>
            <p className="tech-description">{tech.description}</p>
          </header>

          <section className="tech-content-section">
            <div className="content-block">
              <h3>Problem</h3>
              {tech.content.problem.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            <div className="content-block">
              <h3>Solution</h3>
              {tech.content.solution.map((s, i) => <p key={i}>{s}</p>)}
            </div>

            <div className="content-block">
              <h3>Outcome</h3>
               {tech.content.outcome.map((o, i) => <p key={i}>{o}</p>)}
            </div>
          </section>

          <section className="related-projects-section">
            <h3>Related Projects</h3>
            <div className="related-projects-list">
              {tech.relatedProjects.map((project, i) => (
                <span key={i} className="related-project-tag">{project}</span>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TechDetailPage;




