'use client'
import { useEffect, useRef } from 'react'

const initiatives = [
  {
    title: 'Food & Supply Distribution',
    body: 'Coordinating regular supply drives across the Atlanta metro area. Food, hygiene products, and household essentials distributed directly to families who need them, not through a warehouse chain.',
  },
  {
    title: 'Youth Outreach',
    body: 'Running programs that connect underserved youth with resources, mentorship, and a network they would not otherwise have access to.',
  },
  {
    title: 'Community Resilience Programs',
    body: 'Long-term initiatives focused on building lasting support systems rather than one-time donations. The goal is independence, not dependency.',
  },
  {
    title: 'Local Partnership Network',
    body: 'Working with local businesses, faith communities, and other nonprofits to multiply impact without multiplying overhead.',
  },
]

export default function Community() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal, .reveal-scale').forEach((item, i) => {
            setTimeout(() => item.classList.add('visible'), i * 100)
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
      id="community"
      ref={sectionRef}
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: '140px 0' }}
    >
      <div className="section-max">
        {/* Header */}
        <span className="eyebrow reveal" style={{ marginBottom: '28px', display: 'inline-flex' }}>
          Nonprofit
        </span>
        <div
          style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', marginBottom: '72px', alignItems: 'end' }}
          className="comm-header"
        >
          <style>{`
            @media (max-width: 768px) {
              .comm-header { grid-template-columns: 1fr !important; gap: 24px !important; }
              .comm-img-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
          <h2
            className="reveal"
            style={{ fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.0 }}
          >
            Running a nonprofit at 15
          </h2>
          <p className="reveal" style={{ color: 'var(--ash)', fontSize: '15px', lineHeight: 1.75 }}>
            Hands of Hope Outreach operates across the Atlanta area tackling food insecurity,
            access to basic necessities, and long-term community support. Sahas runs daily
            operations as COO.
          </p>
        </div>

        {/* Photo grid — 2fr + 1fr asymmetric */}
        <div
          className="comm-img-grid reveal-scale"
          style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '12px', marginBottom: '56px' }}
        >
          <img
            src="https://picsum.photos/seed/outreach-event/1200/800"
            alt="Community outreach event"
            style={{ width: '100%', height: '360px', objectFit: 'cover', borderRadius: '12px', display: 'block' }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <img
              src="https://picsum.photos/seed/supply-distribution/600/380"
              alt="Supply distribution"
              style={{ width: '100%', height: '172px', objectFit: 'cover', borderRadius: '12px', display: 'block', flex: 1 }}
            />
            <img
              src="https://picsum.photos/seed/volunteer-coord/600/380"
              alt="Volunteer coordination"
              style={{ width: '100%', height: '172px', objectFit: 'cover', borderRadius: '12px', display: 'block', flex: 1 }}
            />
          </div>
        </div>

        {/* Initiative grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
          {initiatives.map((item) => (
            <div
              key={item.title}
              className="reveal"
              style={{
                padding: '28px',
                border: '1px solid var(--border)',
                background: 'rgba(255,255,255,0.025)',
                borderRadius: '12px',
              }}
            >
              <div style={{ color: 'var(--ink)', fontFamily: "'Archivo', sans-serif", fontSize: '15px', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '10px' }}>
                {item.title}
              </div>
              <p style={{ color: 'var(--ash)', fontSize: '13px', lineHeight: 1.75 }}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
