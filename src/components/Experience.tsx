import React from 'react';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

const experiences = [
  {
    company: 'Google',
    role: 'Senior Software Engineer',
    location: 'Sunnyvale, CA',
    period: 'July 2022 - Present',
    projects: [
      {
        name: 'Regional Traffic Director',
        points: [
          'Architected and led the implementation of the Regional Config and Control Plane in C++ and Go, establishing regional isolation serving 1M+ clients to ensure failures have regional blast radius, unblocking key GCP initiatives.',
          'Mentored junior engineers through regional turnup, design, and productionization.',
          'Designed and built Python scripts to automate the regional components turnup, reducing manual overhead from 2-3 days to 1-2 hours.'
        ]
      },
      {
        name: 'Global Config Rollout',
        points: [
          'Architected a 0-to-1 global configuration pipeline for a unified control plane in Google\'s internal service mesh infrastructure, unblocking a new production control plane.',
          'Unified heterogeneous configuration surfaces by integrating with Borg orchestration, standardizing the configuration lifecycle for 20k+ internal services (recognized with internal engineering awards).',
          'Engineered progressive delivery safety gates (slow rollout, cancellation, emergency rollback), preventing client misconfigurations and infrastructure regressions from propagating globally.',
          'Optimized infrastructure stability by implementing compliant rollout strategies and multi-stage validation frameworks to prevent the propagation of invalid configurations.'
        ]
      },
      {
        name: 'Dynamic Config Fetching',
        points: [
          'Identified a critical performance bottleneck for proxyless clients, re-writing the wildcard retrieval mechanism in C++ to a targeted extraction process to optimize control plane efficiency.',
          'Unblocked the migration of 100M+ proxyless (Stubby and gRPC) clients by optimizing configuration extraction, preventing potential memory and CPU contention issues during high-load periods.',
          'Reduced CPU usage by (≈50%) and request latency by (≈90%).'
        ]
      },
      {
        name: 'Fault Injection Support',
        points: [
          'Led the end-to-end design and implementation of a client-side Fault Injection system, coordinating complex cross-functional API, control plane and config plane changes.',
          'Architected configuration delivery model utilizing xDS dynamic parameters and constraints matching, enabling targeted fault injection overrides (latency, aborts) on specific clients without impacting global traffic.',
          'Enhanced system stability by designing a robust "soft deletion" (tombstone) mechanism for dynamic configurations, establishing clean state management.'
        ]
      }
    ]
  },
  {
    company: 'Eclipse Mining Technologies',
    role: 'Software Developer I',
    location: 'Tucson, AZ',
    period: 'August 2020 - July 2021',
    projects: [
      {
        name: 'Data Transformation Platform',
        points: [
          'Developed new features for a Data Transformation system handling complex industry data, ensuring robust analytics and ingestion.',
          'Created responsive data visualization UIs and implemented data aggregation features, helping clients audit and validate critical data assets.',
          'Created front-end permission monitoring dashboards using React.'
        ]
      }
    ]
  },
  {
    company: 'Rochester Institute of Technology',
    role: 'iOS Developer',
    location: 'Rochester, NY',
    period: 'June 2020 - August 2020',
    projects: [
      {
        name: 'Medical Monitoring iOS App',
        points: [
          'Designed and developed iPhone applications used for medical purposes that ingest real-time patient data via Core Bluetooth, enabling remote real-time diagnostics.',
          'Worked extensively with Cocoa frameworks like Realm Database, Swift charts, and Alamofire for secure data storage, visualization, and networking.',
          'Implemented MVC design patterns for clean, maintainable, and scalable client architecture.'
        ]
      }
    ]
  },
  {
    company: 'Dassault Systemes',
    role: 'Software Engineer',
    location: 'Pune',
    period: 'June 2016 - July 2019',
    projects: [
      {
        name: '3D Geological Modeling (Surpac)',
        points: [
          'Developed and maintained features a native C++ desktop modelling application, focusing on low-level memory efficiency, system stability, and large dataset handling.',
          'Integrated advanced point-cloud processing algorithms for density reduction and triangulation, enabling efficient handling and visualization of massive geological datasets.',
          'Optimized legacy bottlenecks by multi-threading heavy computational features using C++ concurrency primitives, achieving up to a 20-50% improvement in processing times.',
          'Expanded file format support by adding native import and export capabilities for modern 3D model formats, including OBJ and SDM.',
          'Integrated native cloud synchronization features using REST API integrations in C++.'
        ]
      }
    ]
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section container">
      <h2>Architecture & Experience</h2>
      
      <div className="flex flex-col gap-8">
        {experiences.map((exp, i) => (
          <div key={i} className="glass-panel" style={{ padding: '2rem' }}>
            <div className="flex justify-between items-center flex-wrap gap-4" style={{ marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--accent-primary)' }}>{exp.company}</h3>
                <div style={{ fontSize: '1.1rem', fontWeight: 500 }}>{exp.role}</div>
              </div>
              <div className="flex flex-col gap-2" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textAlign: 'right' }}>
                <div className="flex items-center justify-end gap-2">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center justify-end gap-2">
                  <Briefcase size={16} />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {exp.projects.map((proj, j) => (
                <div key={j}>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <ChevronRight size={18} color="var(--accent-secondary)" />
                    {proj.name}
                  </h4>
                  <ul style={{ listStyleType: 'none', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {proj.points.map((point, k) => (
                      <li key={k} style={{ color: 'var(--text-secondary)', position: 'relative', lineHeight: 1.6 }}>
                        <span style={{ position: 'absolute', left: '-1.5rem', color: 'var(--accent-primary)' }}>•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
