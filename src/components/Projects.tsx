import React, { useState } from 'react';
import { ArrowLeft, Code2, ExternalLink, Code, FolderGit2, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Word Search iOS App',
    description: 'Word Search app developed in Swift for iOS Devices',
    tags: ['Swift', 'iOS', 'Mobile App'],
    github: 'https://github.com/anuraj3095/Word-Search-iOS-App',
    demo: null,
  },
  {
    title: 'Airbnb Backend',
    description: 'Dockerized Flask application with MongoDB holding airbnb dataset.',
    tags: ['Python', 'Flask', 'Docker', 'MongoDB', 'Backend'],
    github: 'https://github.com/anuraj3095/airbnb_backend',
    demo: null,
  }
];

export const Projects: React.FC = () => {
  const [filterQuery, setFilterQuery] = useState('');

  const filteredProjects = projects.filter((project) => {
    const query = filterQuery.toLowerCase();
    return (
      // project.title.toLowerCase().includes(query) ||
      // project.description.toLowerCase().includes(query) ||
      project.tags.some(tag => tag.toLowerCase().includes(query))
    );
  });

  return (
    <section id="projects" className="section container">
      <div style={{ marginBottom: '2rem' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', gap: '1rem' }}>
        <h2 className="animate-fade-in" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', margin: 0 }}>
          <FolderGit2 className="text-gradient" size={32} />
          Featured Projects
        </h2>

        <div className="animate-fade-in" style={{ position: 'relative', width: '100%', maxWidth: '350px' }}>
          <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}>
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder="Filter by keywords (e.g. Swift, iOS)..."
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem 1rem 0.75rem 2.5rem',
              borderRadius: '8px',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-surface)',
              color: 'var(--text-primary)',
              fontSize: '0.95rem',
              outline: 'none',
              transition: 'all 0.2s ease'
            }}
            onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
            onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
          />
        </div>
      </div>

      <div className="flex flex-col gap-8 animate-fade-in delay-100">
        {filteredProjects.length === 0 ? (
          <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
            No projects found matching your keywords.
          </div>
        ) : (
          filteredProjects.map((project, index) => (
            <div key={index} className="glass-panel hover-lift" style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
              <div className="flex justify-between items-start gap-4 flex-wrap" style={{ marginBottom: '1.5rem' }}>
                <div style={{ flex: 1, minWidth: '300px' }}>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Code2 size={24} color="var(--accent-primary)" />
                    {project.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} style={{
                        fontSize: '0.8rem',
                        background: 'rgba(0, 229, 255, 0.1)',
                        color: 'var(--accent-primary)',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '16px',
                        border: '1px solid rgba(0, 229, 255, 0.2)'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>
                      <Code size={18} />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          )))}
      </div>
    </section>
  );
};
