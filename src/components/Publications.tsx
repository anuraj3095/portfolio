import React from 'react';
import { BookOpen, ExternalLink, ShieldCheck } from 'lucide-react';

export const Publications: React.FC = () => {
  return (
    <section id="publications" className="section container">
      <h2>Publications & Patents</h2>
      
      <div className="glass-panel" style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative background element */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%)',
          opacity: 0.1,
          borderRadius: '50%'
        }} />

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2" style={{ color: 'var(--accent-secondary)', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            <ShieldCheck size={16} />
            Defensive Publication
          </div>
          
          <h3 style={{ fontSize: '1.5rem', lineHeight: 1.4, color: 'var(--text-primary)' }}>
            POLICY‑DRIVEN SCALABLE GENERATION OF NETWORK CONFIGURATIONS WITH DYNAMIC PARAMETERS
          </h3>
          
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Technical Disclosure Commons • Apr. 2026
          </div>
          
          <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            <li style={{ color: 'var(--text-secondary)', position: 'relative', paddingLeft: '1.5rem', lineHeight: 1.6 }}>
              <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>•</span>
              Described a stateless, policy‑driven architecture that utilizes a centralized policy database as the source of truth to dynamically generate network configurations from scratch, enhancing scalability and simplifying error recovery.
            </li>
            <li style={{ color: 'var(--text-secondary)', position: 'relative', paddingLeft: '1.5rem', lineHeight: 1.6 }}>
              <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>•</span>
              Designed a multi‑phase translation algorithm using a recursive process to resolve dynamic parameter constraints into mutually exclusive override blocks and soft‑match consumer‑scoped policies to clients.
            </li>
          </ul>

          <div style={{ marginTop: '1.5rem' }}>
            <a 
              href="https://www.tdcommons.org/dpubs_series/9686/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ display: 'inline-flex', padding: '0.5rem 1rem', fontSize: '0.9rem' }}
            >
              <BookOpen size={16} />
              Read Publication
              <ExternalLink size={14} style={{ marginLeft: '0.25rem' }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
