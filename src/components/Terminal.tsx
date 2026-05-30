import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Maximize2, Minus, X } from 'lucide-react';

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

export const Terminal: React.FC = () => {
  const [history, setHistory] = useState<CommandOutput[]>([]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    let output: React.ReactNode = '';

    switch (cmd) {
      case 'help':
        output = (
          <div style={{ color: 'var(--text-secondary)' }}>
            Available commands:<br />
            <span style={{ color: 'var(--accent-primary)' }}>whoami</span>    - Display short bio<br />
            <span style={{ color: 'var(--accent-primary)' }}>skills</span>    - List technical skills<br />
            <span style={{ color: 'var(--accent-primary)' }}>experience</span>- Brief overview of work history<br />
            <span style={{ color: 'var(--accent-primary)' }}>clear</span>     - Clear terminal output
          </div>
        );
        break;
      case 'whoami':
        output = 'Anuraj Jaiswal. Senior Software Engineer at Google. Passionate about distributed systems, control planes, and C++ performance optimization.';
        break;
      case 'skills':
        output = (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
            <div>
              <span style={{ color: 'var(--accent-secondary)' }}>Languages:</span> C++, GO, Python, Java, Swift, JavaScript
            </div>
            <div>
              <span style={{ color: 'var(--accent-secondary)' }}>Networking:</span> Service Mesh Architecture, xDS APIs, Envoy, Load Balancing
            </div>
            <div>
              <span style={{ color: 'var(--accent-secondary)' }}>Database:</span> Spanner, MySQL, MongoDB, Realm, SQLite
            </div>
            <div>
              <span style={{ color: 'var(--accent-secondary)' }}>Tools:</span> Postman, Wireshark, Borg
            </div>
          </div>
        );
        break;
      case 'experience':
        output = (
          <div>
            <div style={{ color: 'var(--accent-primary)' }}>Google (2022-Present)</div>
            - Regional Traffic Director & Global Config Rollout<br />
            <div style={{ color: 'var(--accent-primary)', marginTop: '0.5rem' }}>Eclipse Mining Technologies (2020-2021)</div>
            - Data Transformation Platform<br />
            <div style={{ color: 'var(--accent-primary)', marginTop: '0.5rem' }}>Dassault Systemes (2016-2019)</div>
            - 3D Geological Modeling (Surpac)
          </div>
        );
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      default:
        output = `Command not found: ${cmd}. Type 'help' for available commands.`;
    }

    setHistory([...history, { command: input, output }]);
    setInput('');
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <section id="terminal" className="section container">
      <h2>Interactive Shell</h2>

      <div className="glass-panel" style={{
        maxWidth: '800px',
        margin: '0 auto',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
      }}>
        {/* Terminal Header */}
        <div style={{
          background: 'rgba(0,0,0,0.5)',
          padding: '0.75rem 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid var(--border-color)'
        }}>
          <div className="flex gap-2">
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F56' }}></div>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FFBD2E' }}></div>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#27C93F' }}></div>
          </div>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.875rem',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <TerminalIcon size={14} />
            anuraj@mesh-control-plane:~
          </div>
          <div className="flex gap-2" style={{ color: 'var(--text-muted)' }}>
            <Minus size={14} />
            <Maximize2 size={14} />
            <X size={14} />
          </div>
        </div>

        {/* Terminal Body */}
        <div style={{
          padding: '1.5rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.9rem',
          height: '400px',
          overflowY: 'auto',
          color: 'var(--text-primary)'
        }}>
          <div style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Welcome to AnurajOS v1.0.0 (xDS/Envoy architecture)<br />
            Type 'help' to see available commands.
          </div>

          {history.map((item, i) => (
            <div key={i} style={{ marginBottom: '1rem' }}>
              <div className="flex gap-2">
                <span style={{ color: '#27C93F' }}>➜</span>
                <span style={{ color: 'var(--accent-primary)' }}>~</span>
                <span>{item.command}</span>
              </div>
              <div style={{ marginTop: '0.5rem', lineHeight: '1.5' }}>
                {item.output}
              </div>
            </div>
          ))}

          <form onSubmit={handleCommand} className="flex gap-2" style={{ marginTop: '1rem' }}>
            <span style={{ color: '#27C93F' }}>➜</span>
            <span style={{ color: 'var(--accent-primary)' }}>~</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                flex: 1,
                outline: 'none'
              }}
              autoFocus
              spellCheck="false"
              autoComplete="off"
            />
          </form>
          <div ref={bottomRef} />
        </div>
      </div>
    </section>
  );
};
