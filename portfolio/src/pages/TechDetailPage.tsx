import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { techDetails } from '../data/techDetails';
import type { ContentItem } from '../data/types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './TechDetailPage.css';

const ContentRenderer: React.FC<{ item: ContentItem; index: number }> = ({ item, index }) => {
  if (typeof item === 'string') {
    return <p key={index}>{item}</p>;
  }

  switch (item.type) {
    case 'subtitle':
      return <h4 key={index} className="content-subtitle">{item.text}</h4>;
    case 'image':
      return (
        <div key={index} className="content-media">
          <img 
            src={item.src} 
            alt={item.alt || ''} 
            style={item.maxWidth ? { maxWidth: item.maxWidth } : undefined}
          />
          {item.caption && <p className="media-caption">{item.caption}</p>}
        </div>
      );
    case 'imageGroup':
      return (
        <div key={index} className="content-image-group">
          {item.images.map((img, imgIndex) => (
            <div key={imgIndex} className="content-media-group-item">
              <img 
                src={img.src} 
                alt={img.alt || ''} 
                style={img.maxWidth ? { maxWidth: img.maxWidth } : undefined}
              />
              {img.caption && <p className="media-caption">{img.caption}</p>}
            </div>
          ))}
        </div>
      );
    case 'video':
      return (
        <div key={index} className="content-media">
          <video src={item.src} controls={item.controls !== false} />
          {item.caption && <p className="media-caption">{item.caption}</p>}
        </div>
      );
    case 'code':
      return (
        <div key={index} className="content-code">
          {item.caption && <p className="code-caption">{item.caption}</p>}
          <pre><code className={`language-${item.language}`}>{item.code}</code></pre>
        </div>
      );
    default:
      return null;
  }
};

const TechDetailPage: React.FC = () => {
  const { techId } = useParams<{ techId: string }>();
  
  if (!techDetails || techDetails.length === 0) {
    return <div>Loading...</div>;
  }
  
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
            {tech.content.map((section, sectionIndex) => (
              <div key={sectionIndex} className="content-block">
                <h3>{section.title}</h3>
                {section.items.map((item, i) => (
                  <ContentRenderer key={i} item={item} index={i} />
                ))}
              </div>
            ))}
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




