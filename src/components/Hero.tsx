import React from 'react';
import { MeshBackground } from './MeshBackground';
import { Code, Network, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <MeshBackground />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="flex flex-col gap-6 animate-fade-in">
          <h1 style={{ margin: 0 }}>
            <span style={{ display: 'block', fontSize: '0.4em', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 500 }}>Hello, I'm</span>
            Anuraj <span className="text-gradient">Jaiswal</span>
          </h1>

          <h2 style={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)', color: 'var(--text-primary)', fontWeight: 400, marginTop: '-1rem', border: 'none' }}>
            Senior Software Engineer <span style={{ color: 'var(--text-muted)' }}>@</span> Google
          </h2>

          <p style={{ maxWidth: '600px', fontSize: '1.125rem', color: 'var(--text-secondary)', marginTop: '1rem' }} className="delay-200">
            Architecting and developing scalable, high-performance distributed systems. 
            Passionate about solving complex engineering challenges, optimizing infrastructure, and delivering robust software solutions at scale.
          </p>

          <div className="flex gap-4 delay-300 flex-wrap" style={{ marginTop: '2rem' }}>
            <Link to="/experience" className="btn btn-primary">
              <Network size={20} />
              View Experiences
            </Link>
            <Link to="/terminal" className="btn btn-outline">
              <Code size={20} />
              Access Terminal
            </Link>
            <Link to="/publications" className="btn btn-outline">
              <BookOpen size={20} />
              Publications
            </Link>
          </div>


        </div>
      </div>
    </section>
  );
};
