import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { Terminal } from './components/Terminal';
import { Experience } from './components/Experience';
import { Publications } from './components/Publications';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects';
import { useVisitLogger } from './hooks/useVisitLogger';

const AnalyticsInitializer: React.FC = () => {
  useVisitLogger();
  return null;
};

const App: React.FC = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AnalyticsInitializer />
      <div style={{ position: 'relative', width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <div style={{ position: 'relative', zIndex: 1, paddingBottom: '4rem' }}>
                </div>
              </>
            } />
            <Route path="/terminal" element={
               <div style={{ position: 'relative', zIndex: 1, paddingBottom: '4rem', paddingTop: '4rem' }}>
                 <Terminal />
               </div>
            } />
            <Route path="/publications" element={
               <div style={{ position: 'relative', zIndex: 1, paddingBottom: '4rem', paddingTop: '4rem' }}>
                 <Publications />
               </div>
            } />
            <Route path="/projects" element={
               <div style={{ position: 'relative', zIndex: 1, paddingBottom: '4rem', paddingTop: '4rem' }}>
                 <Projects />
               </div>
            } />
            <Route path="/experience" element={
               <div style={{ position: 'relative', zIndex: 1, paddingBottom: '4rem', paddingTop: '4rem' }}>
                 <Experience />
               </div>
            } />
            <Route path="/contact" element={
               <div style={{ position: 'relative', zIndex: 1, paddingBottom: '4rem', paddingTop: '4rem' }}>
                 <Contact />
               </div>
            } />
          </Routes>
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
    </BrowserRouter>
  );
};

export default App;
