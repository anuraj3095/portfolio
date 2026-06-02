import React from 'react';
import { ArrowLeft, Code2, ExternalLink, Code, FolderGit2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Word-Search-iOS-App',
    description: 'Word Search app developed in Swift for iOS Devices',
    tags: ['Swift', 'iOS', 'Mobile App'],
    github: 'https://github.com/anuraj3095/Word-Search-iOS-App',
    demo: null,
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="section container">
      <div style={{ marginBottom: '2rem' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
      </div>
      
      <h2 className="animate-fade-in" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '3rem' }}>
        <FolderGit2 className="text-gradient" size={32} />
        Featured Projects
      </h2>

      <div className="flex flex-col gap-8 animate-fade-in delay-100">
        {projects.map((project, index) => (
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
        ))}
      </div>
    </section>
  );
};
