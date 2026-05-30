import React from 'react';
import { Mail, Network, Code, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Contact: React.FC = () => {
  return (
    <section className="section" style={{ minHeight: 'calc(100vh - 100px)' }}>
      <div className="container">
        <div style={{ marginBottom: '3rem' }}>
          <Link to="/" className="btn btn-outline" style={{ display: 'inline-flex', marginBottom: '2rem' }}>
            &larr; Back to Home
          </Link>
          <h2 className="animate-fade-in" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            <MessageSquare style={{ color: 'var(--accent-primary)' }} size={36} />
            <span className="text-gradient">Get in Touch</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', fontSize: '1.125rem', lineHeight: 1.6 }} className="animate-fade-in delay-100">
            I'm always open to discussing new opportunities, exploring complex system architectures, or just talking about tech. Feel free to reach out through any of the channels below.
          </p>
        </div>

        <div className="flex flex-col gap-6 animate-fade-in delay-200" style={{ maxWidth: '500px' }}>
          <a href="mailto:anuraj.jaiswal21@gmail.com" className="glass-panel" style={{ textDecoration: 'none', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ background: 'rgba(0, 229, 255, 0.1)', padding: '1rem', borderRadius: '12px' }}>
              <Mail size={28} style={{ color: 'var(--accent-primary)' }} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Email</h3>
              <p style={{ margin: 0, color: 'var(--text-secondary)' }}>anuraj.jaiswal21@gmail.com</p>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/anurajj/" target="_blank" rel="noopener noreferrer" className="glass-panel" style={{ textDecoration: 'none', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ background: 'rgba(123, 97, 255, 0.1)', padding: '1rem', borderRadius: '12px' }}>
              <Network size={28} style={{ color: 'var(--accent-secondary)' }} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>LinkedIn</h3>
              <p style={{ margin: 0, color: 'var(--text-secondary)' }}>Connect professionally</p>
            </div>
          </a>

          <a href="https://github.com/anuraj12" target="_blank" rel="noopener noreferrer" className="glass-panel" style={{ textDecoration: 'none', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '12px' }}>
              <Code size={28} style={{ color: 'var(--text-primary)' }} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>GitHub</h3>
              <p style={{ margin: 0, color: 'var(--text-secondary)' }}>Check out my code and projects</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
