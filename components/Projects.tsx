'use client'
import { useEffect, useRef } from 'react'

const PROJECTS = [
  {
    title: 'Downtown Alpharetta Digital Kiosk Network',
    org:   'City of Alpharetta',
    tags:  ['Software Development', 'ML', 'Civic Tech', 'City Government'],
    body:  'Designed and co-coded a navigation kiosk system for downtown Alpharetta. The system would let visitors locate free parking, find restaurants by cuisine and rating, view interior images of venues, and see available jobs at local businesses. Navigated utility contacts, internet infrastructure permitting, and city coordination from the ground up.',
  },
  {
    title: 'School Safety Proposal',
    org:   'City of Alpharetta',
    tags:  ['Policy', 'Community Advocacy', 'Government Relations'],
    body:  'Collaborated with city officials to advocate for increased police visibility at Innovation Academy. Prepared a formal proposal, presented it to decision-makers, and learned how policy moves through a local government system. The kind of work most people learn in their 30s.',
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal').forEach((item, i) => {
            setTimeout(() => item.classList.add('visible'), i * 110)
          })
          io.unobserve(el)
        }
      },
      { threshold: 0.08 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', padding: '140px 0' }}
    >
      <div className="section-max">
        {/* Split header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'end', marginBottom: '64px' }} className="pj-hdr">
          <style>{`
            @media (max-width: 768px) {
              .pj-hdr { grid-template-columns: 1fr !important; gap: 20px !important; }
              .pj-row { grid-template-columns: 1fr !important; gap: 16px !important; }
            }
          `}</style>
          <h2 className="reveal" style={{ fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.0 }}>
            Work that leaves something behind
          </h2>
          <p className="reveal" style={{ color: 'var(--ash)', fontSize: '15px', lineHeight: 1.75 }}>
            Independent projects with real stakeholders, real constraints, and real consequences.
            Not school assignments — projects taken to city officials, built with city infrastructure,
            and evaluated on whether they actually worked.
          </p>
        </div>

        {/* Pull quote */}
        <div className="reveal" style={{ padding: '40px 44px', background: 'rgba(255,255,255,0.025)', border: '1px solid var(--border)', borderRadius: '12px', marginBottom: '56px' }}>
          <div style={{ color: 'var(--blue)', fontSize: '28px', fontFamily: "'Archivo', sans-serif", fontWeight: 900, lineHeight: 1, marginBottom: '16px', opacity: 0.5 }}>&ldquo;</div>
          <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(17px, 2.2vw, 24px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.35, color: 'var(--ink)', marginBottom: '20px' }}>
            The project could not be fully implemented due to insufficient funding. The planning
            and development process provided valuable hands-on experience.
          </p>
          <div style={{ color: 'var(--muted)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            City of Alpharetta project report
          </div>
        </div>

        {/* Project rows */}
        <div>
          {PROJECTS.map((proj) => (
            <div
              key={proj.title}
              className="reveal pj-row"
              style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '64px', padding: '48px 0', borderTop: '1px solid var(--border)' }}
            >
              <div>
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '12px' }}>
                  {proj.org}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {proj.tags.map((tag) => (
                    <span key={tag} className="skill-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 style={{ fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(18px, 2.2vw, 26px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--ink)', marginBottom: '14px' }}>
                  {proj.title}
                </h3>
                <p style={{ color: 'var(--ash)', fontSize: '14px', lineHeight: 1.8 }}>{proj.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
