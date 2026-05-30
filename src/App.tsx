import React from 'react';
import { Hero } from './components/Hero';
import { Terminal } from './components/Terminal';
import { Experience } from './components/Experience';
import { Publications } from './components/Publications';

const App: React.FC = () => {
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      <main>
        <Hero />
        <div style={{ position: 'relative', zIndex: 1, paddingBottom: '4rem' }}>
          <Terminal />
          <Experience />
          <Publications />
        </div>
      </main>

      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        color: 'var(--text-muted)',
        borderTop: '1px solid var(--border-color)',
        fontSize: '0.875rem'
      }}>
        <div className="container">
          <p>© {new Date().getFullYear()} Anuraj Jaiswal. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem', opacity: 0.7 }}>Senior Software Engineer @ Google</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
