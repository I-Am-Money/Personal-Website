'use client'
import { useEffect, useRef } from 'react'

const experiences = [
  {
    id: 'ambassador',
    title: 'Student Ambassador',
    org: 'Innovation Academy',
    location: 'Alpharetta, GA',
    period: 'Aug 2025 – May 2028',
    hours: '5 hrs / week',
    gradient: 'linear-gradient(135deg, #1a0533 0%, #2d1065 50%, #1e0a4f 100%)',
    accentColor: '#a78bfa',
    borderColor: 'rgba(167,139,250,0.3)',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    summary:
      'Where student council sets the policies, ambassadors make sure they actually happen. Giving school tours, coordinating events, and representing the student body in front of parents and faculty with zero script and full accountability.',
    skills: ['Public speaking', 'Event coordination', 'Decision-making under pressure', 'Soft skills'],
  },
  {
    id: 'coo',
    title: 'Co-American Region Leader (COO)',
    org: 'Hands of Hope Outreach',
    location: 'Alpharetta, GA',
    period: 'Sep 2024 – May 2028',
    hours: '13 hrs / week',
    gradient: 'linear-gradient(135deg, #1a0a00 0%, #3d1500 50%, #2a0e00 100%)',
    accentColor: '#fb923c',
    borderColor: 'rgba(251,146,60,0.3)',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    summary:
      'Running daily operations at a community nonprofit tackling food insecurity and access to basic necessities. Responsible for volunteer management, logistics across outreach events, budgeting, and keeping the organization accountable to its mission while it grows.',
    skills: ['Operations management', 'Budget oversight', 'Volunteer coordination', 'Strategic planning'],
  },
  {
    id: 'city',
    title: 'Junior Project Proposal Partner',
    org: 'City of Alpharetta',
    location: 'Alpharetta, GA',
    period: 'Jul 2025 – Aug 2025',
    hours: '3 hrs / week',
    gradient: 'linear-gradient(135deg, #001a1a 0%, #003d3d 50%, #001f2e 100%)',
    accentColor: '#22d3ee',
    borderColor: 'rgba(34,211,238,0.3)',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    summary:
      'Brought two proposals to city officials: increased police presence at a magnet school, and a digital kiosk network for downtown Alpharetta. Co-coded the software for the kiosk system. The hardware funding fell short, but the planning process covered everything from utility contacts to internet permitting in public spaces.',
    skills: ['Civic outreach', 'Software development', 'Budgeting', 'Project scoping', 'Government relations'],
  },
  {
    id: 'wissen',
    title: 'Intern',
    org: 'Wissen Digital Inc.',
    location: 'Alpharetta, GA',
    period: 'May 2025 – Jul 2025',
    hours: '20 hrs / week',
    gradient: 'linear-gradient(135deg, #001a0a 0%, #003d1a 50%, #001f10 100%)',
    accentColor: '#34d399',
    borderColor: 'rgba(52,211,153,0.3)',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    summary:
      'Front-end and partial back-end web development in Python, plus general marketing work. Acted as a communication bridge between executives and the rest of the team, managing handoffs and keeping deliverables on schedule.',
    skills: ['Python', 'Front-end dev', 'Marketing', 'Executive communication', 'Team coordination'],
  },
]

function ExperienceCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = el.querySelectorAll('.reveal, .reveal-left, .reveal-right')
          items.forEach((item, i) => {
            setTimeout(() => item.classList.add('visible'), i * 120)
          })
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const isEven = index % 2 === 0

  return (
    <div
      ref={cardRef}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: '480px',
        borderRadius: '24px',
        overflow: 'hidden',
        border: `1px solid ${exp.borderColor}`,
        marginBottom: '32px',
      }}
      className="experience-card"
    >
      <style>{`
        @media (max-width: 768px) {
          .experience-card {
            grid-template-columns: 1fr !important;
          }
          .exp-visual-panel {
            min-height: 220px !important;
          }
        }
      `}</style>

      {/* Visual panel */}
      <div
        className={`exp-visual-panel reveal-${isEven ? 'left' : 'right'}`}
        style={{
          background: exp.gradient,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px',
          position: 'relative',
          overflow: 'hidden',
          order: isEven ? 0 : 1,
          minHeight: '300px',
        }}
      >
        {/* Geometric decoration */}
        <div
          style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            border: `1px solid ${exp.accentColor}22`,
            top: '-80px',
            right: '-80px',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            border: `1px solid ${exp.accentColor}18`,
            bottom: '-40px',
            left: '-40px',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            color: exp.accentColor,
            marginBottom: '24px',
            filter: `drop-shadow(0 0 20px ${exp.accentColor}55)`,
          }}
        >
          {exp.icon}
        </div>
        <div
          style={{
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: exp.accentColor,
            opacity: 0.8,
            textAlign: 'center',
          }}
        >
          {exp.hours}
        </div>
        <div
          style={{
            marginTop: '16px',
            padding: '6px 16px',
            borderRadius: '999px',
            background: `${exp.accentColor}18`,
            border: `1px solid ${exp.accentColor}33`,
            color: exp.accentColor,
            fontSize: '12px',
            fontWeight: 600,
          }}
        >
          {exp.period}
        </div>
      </div>

      {/* Content panel */}
      <div
        className={`reveal-${isEven ? 'right' : 'left'}`}
        style={{
          background: '#0e1018',
          padding: '48px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          order: isEven ? 1 : 0,
        }}
      >
        <div
          style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: exp.accentColor,
            marginBottom: '10px',
          }}
        >
          {exp.org} &middot; {exp.location}
        </div>
        <h3
          style={{
            fontSize: 'clamp(20px, 2.5vw, 28px)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: '#eef0ff',
            lineHeight: 1.2,
            marginBottom: '20px',
          }}
        >
          {exp.title}
        </h3>
        <p
          style={{
            color: '#8896aa',
            fontSize: '15px',
            lineHeight: 1.75,
            marginBottom: '28px',
          }}
        >
          {exp.summary}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {exp.skills.map((skill) => (
            <span
              key={skill}
              style={{
                padding: '4px 12px',
                borderRadius: '6px',
                background: `${exp.accentColor}10`,
                border: `1px solid ${exp.accentColor}25`,
                color: exp.accentColor,
                fontSize: '12px',
                fontWeight: 600,
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = headerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal').forEach((item, i) => {
            setTimeout(() => item.classList.add('visible'), i * 100)
          })
          observer.unobserve(el)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" style={{ padding: '120px 24px', maxWidth: '1200px', margin: '0 auto' }}>
      <div ref={headerRef} style={{ marginBottom: '64px' }}>
        <div className="section-label reveal" style={{ marginBottom: '16px' }}>
          Work Experience
        </div>
        <h2
          className="reveal"
          style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: '#eef0ff',
            lineHeight: 1.1,
            maxWidth: '600px',
          }}
        >
          What I have been building and leading
        </h2>
      </div>

      <div>
        {experiences.map((exp, i) => (
          <ExperienceCard key={exp.id} exp={exp} index={i} />
        ))}
      </div>
    </section>
  )
}
