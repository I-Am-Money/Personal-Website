'use client'
import { useEffect, useRef } from 'react'

const roles = [
  {
    title: 'Student Ambassador',
    org: 'Innovation Academy',
    period: 'Aug 2025 – May 2028',
    hours: '5 hrs / week',
    body: 'Where student council decides what happens, ambassadors make sure it actually does. School tours for prospective families, event coordination, and representing the student body in front of faculty and parents with no safety net. Graduation honor: a cord worn at commencement.',
  },
  {
    title: 'Co-American Region Leader',
    org: 'Hands of Hope Outreach',
    period: 'Sep 2024 – May 2028',
    hours: '13 hrs / week',
    body: 'COO in practice. Planning and executing outreach events, managing volunteers, allocating budget, and coordinating logistics for supply distribution across underserved communities in the Atlanta area. The goal is always long-term resilience, not one-off charity.',
  },
  {
    title: 'Junior Project Proposal Partner',
    org: 'City of Alpharetta',
    period: 'Jul 2025 – Aug 2025',
    hours: '3 hrs / week',
    body: 'Brought two proposals to city officials: increased police visibility at a magnet school and a digital kiosk network for downtown Alpharetta. Co-wrote and coded the kiosk software. Hardware funding fell short, but the process was a full run through utility contacts, public infrastructure permitting, and city-scale project planning.',
  },
  {
    title: 'Intern',
    org: 'Wissen Digital Inc.',
    period: 'May 2025 – Jul 2025',
    hours: '20 hrs / week',
    body: 'Front-end and partial back-end development in Python. General marketing. Communication relay between executives and the wider team, keeping deliverables from falling through handoffs.',
  },
]

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal').forEach((item, i) => {
            setTimeout(() => item.classList.add('visible'), i * 90)
          })
          observer.unobserve(el)
        }
      },
      { threshold: 0.06 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="work"
      ref={sectionRef}
      style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', padding: '140px 0' }}
    >
      <div className="section-max">
        {/* Header — stacked, no split */}
        <div style={{ marginBottom: '72px' }}>
          <h2
            className="reveal"
            style={{ fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.0, marginBottom: '16px' }}
          >
            Four roles running at the same time
          </h2>
          <p className="reveal" style={{ color: 'var(--ash)', fontSize: '15px', lineHeight: 1.75, maxWidth: '440px' }}>
            No waiting for the right age or the right credential. Each one is a real responsibility
            with real stakes.
          </p>
        </div>

        {/* Role list */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {roles.map((role) => (
            <div
              key={role.title}
              className="reveal work-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                gap: '64px',
                padding: '48px 0',
                borderTop: '1px solid var(--border)',
                transition: 'border-top-color 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderTopColor = 'rgba(240,180,41,0.3)' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderTopColor = 'var(--border)' }}
            >
              <style>{`
                @media (max-width: 768px) {
                  .work-row { grid-template-columns: 1fr !important; gap: 16px !important; }
                }
              `}</style>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '8px' }}>
                  {role.org}
                </div>
                <div style={{ color: 'var(--muted)', fontSize: '12px', fontWeight: 500, marginBottom: '4px' }}>
                  {role.period}
                </div>
                <div style={{ color: 'var(--ash)', fontSize: '12px', fontWeight: 600 }}>{role.hours}</div>
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "'Archivo', sans-serif",
                    fontSize: 'clamp(18px, 2.2vw, 26px)',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    lineHeight: 1.1,
                    color: 'var(--ink)',
                    marginBottom: '14px',
                  }}
                >
                  {role.title}
                </h3>
                <p style={{ color: 'var(--ash)', fontSize: '14px', lineHeight: 1.8 }}>{role.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
