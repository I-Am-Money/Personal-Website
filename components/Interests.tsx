'use client'
import { useEffect, useRef } from 'react'

const interests = [
  {
    title: 'Athletics',
    body: 'Competition has a way of teaching things that no classroom does. The discipline, the loss, the improvement that only comes from showing up consistently.',
    seed: 'track-athletics',
    aspect: '16/7',
    featured: true,
  },
  {
    title: 'Films & TV',
    body: 'Telugu cinema, the occasional anime, and anything that tells a story worth telling. Good storytelling is a skill he studies whether he is watching or building.',
    seed: 'cinema-dark',
    aspect: '4/3',
    featured: false,
  },
  {
    title: 'Learning',
    body: 'AI research, cybersecurity, how cities function, how nonprofits fail, how startups survive the first year. Reading for utility as much as for curiosity.',
    seed: 'books-study',
    aspect: '4/3',
    featured: false,
  },
]

export default function Interests() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
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
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const featured = interests[0]
  const rest = interests.slice(1)

  return (
    <section
      id="interests"
      ref={sectionRef}
      style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', padding: '140px 0' }}
    >
      <div className="section-max">
        {/* Header — balanced split */}
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'end', marginBottom: '64px' }}
          className="interests-header"
        >
          <style>{`
            @media (max-width: 768px) {
              .interests-header { grid-template-columns: 1fr !important; gap: 20px !important; }
            }
          `}</style>
          <h2
            className="reveal"
            style={{ fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.0 }}
          >
            What he does when he is not working
          </h2>
          <p className="reveal" style={{ color: 'var(--ash)', fontSize: '15px', lineHeight: 1.75 }}>
            Athletics builds discipline in ways no classroom replicates — the reps, the loss, the
            improvement that only compounds by showing up. The rest is curiosity: Telugu cinema and
            anime for storytelling, books and research for whatever problem he is currently trying
            to understand.
          </p>
        </div>

        {/* Featured card — full width, horizontal */}
        <div
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.6fr 1fr',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid var(--border)',
            marginBottom: '12px',
            background: 'rgba(255,255,255,0.02)',
          }}
        >
          <style>{`
            @media (max-width: 768px) {
              .interest-featured { grid-template-columns: 1fr !important; }
              .interest-row { grid-template-columns: 1fr !important; }
            }
          `}</style>
          <div className="interest-featured" style={{ display: 'contents' }}>
            <img
              src={`https://picsum.photos/seed/${featured.seed}/1000/500`}
              alt={featured.title}
              style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }}
            />
            <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ color: 'var(--blue)', fontFamily: "'Archivo', sans-serif", fontSize: '11px', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
                {featured.title}
              </div>
              <p style={{ color: 'var(--ash)', fontSize: '14px', lineHeight: 1.75 }}>{featured.body}</p>
            </div>
          </div>
        </div>

        {/* Two cards side-by-side */}
        <div
          className="interest-row"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}
        >
          {rest.map((item) => (
            <div
              key={item.title}
              className="reveal"
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid var(--border)',
                background: 'rgba(255,255,255,0.02)',
              }}
            >
              <img
                src={`https://picsum.photos/seed/${item.seed}/800/400`}
                alt={item.title}
                style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ padding: '28px' }}>
                <div style={{ color: 'var(--blue)', fontFamily: "'Archivo', sans-serif", fontSize: '11px', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
                  {item.title}
                </div>
                <p style={{ color: 'var(--ash)', fontSize: '13px', lineHeight: 1.75 }}>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
