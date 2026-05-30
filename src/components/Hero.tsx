import React from 'react';
import { MeshBackground } from './MeshBackground';
import { Terminal, Code, Cpu, Network } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <MeshBackground />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="flex flex-col gap-6 animate-fade-in">
          <div className="flex items-center gap-4 text-muted delay-100">
            <Terminal size={20} className="text-gradient" />
            <span style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              System Initialization Sequence
            </span>
          </div>

          <h1 style={{ margin: 0 }}>
            <span style={{ display: 'block', fontSize: '0.4em', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 500 }}>Hello, I'm</span>
            Anuraj <span className="text-gradient">Jaiswal</span>
          </h1>

          <h2 style={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)', color: 'var(--text-primary)', fontWeight: 400, marginTop: '-1rem', border: 'none' }}>
            Senior Software Engineer <span style={{ color: 'var(--text-muted)' }}>@</span> Google
          </h2>

          <p style={{ maxWidth: '600px', fontSize: '1.125rem', color: 'var(--text-secondary)', marginTop: '1rem' }} className="delay-200">
            Designing and developing scalable, secure, and resilient server systems.
            Expert in Service Mesh Architecture, Control Planes, and high‑traffic distributed systems.
          </p>

          <div className="flex gap-4 delay-300" style={{ marginTop: '2rem' }}>
            <a href="#experience" className="btn btn-primary">
              <Network size={20} />
              View Architecture
            </a>
            <a href="#terminal" className="btn btn-outline">
              <Code size={20} />
              Access Terminal
            </a>
          </div>

          <div className="flex gap-8 delay-300" style={{ marginTop: '4rem', opacity: 0.7 }}>
            <div className="flex items-center gap-2">
              <Cpu size={16} color="var(--accent-primary)" />
              <span style={{ fontSize: '0.875rem' }}>High-Performance C++ & Go</span>
            </div>
            <div className="flex items-center gap-2">
              <Network size={16} color="var(--accent-secondary)" />
              <span style={{ fontSize: '0.875rem' }}>Service Mesh & xDS APIs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
