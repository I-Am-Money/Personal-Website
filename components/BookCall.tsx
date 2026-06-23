'use client'
import { useEffect, useRef } from 'react'

export default function BookCall() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((item, i) => {
            setTimeout(() => item.classList.add('visible'), i * 130)
          })
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)

    // Load Calendly embed widget
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      observer.disconnect()
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section
      id="book"
      ref={sectionRef}
      style={{
        padding: '120px 24px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'start',
        }}
        className="book-grid"
      >
        <style>{`
          @media (max-width: 768px) {
            .book-grid {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
          }
        `}</style>

        {/* Left: copy */}
        <div>
          <div className="section-label reveal" style={{ marginBottom: '16px' }}>
            Book a call
          </div>
          <h2
            className="reveal"
            style={{
              fontSize: 'clamp(32px, 4vw, 50px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: '#eef0ff',
              lineHeight: 1.1,
              marginBottom: '24px',
            }}
          >
            30 minutes, no agenda required
          </h2>
          <p
            className="reveal"
            style={{
              color: '#8896aa',
              fontSize: '16px',
              lineHeight: 1.75,
              marginBottom: '16px',
            }}
          >
            Whether you want to discuss NextLine AI, explore a collaboration, talk nonprofit strategy,
            or just connect with someone who is doing interesting work in high school, pick a time that
            works for you.
          </p>
          <p
            className="reveal"
            style={{
              color: '#8896aa',
              fontSize: '16px',
              lineHeight: 1.75,
              marginBottom: '40px',
            }}
          >
            Available most mornings before school and evenings on weekdays. Weekends by request.
          </p>

          {/* What to expect */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4d8fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                ),
                title: '30 minutes',
                desc: 'Focused conversation, no filler.',
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00cc96" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                  </svg>
                ),
                title: 'Any topic',
                desc: 'Startups, nonprofits, school, tech, or life.',
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15.05 5A5 5 0 0119 8.95M15.05 1A9 9 0 0123 8.94m-1 7.98v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 9.9a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                ),
                title: 'Video or phone',
                desc: 'Your preference, confirmed on booking.',
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  display: 'flex',
                  gap: '14px',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: '#0e1018',
                    border: '1px solid #1a1d2e',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div style={{ color: '#eef0ff', fontSize: '14px', fontWeight: 600, marginBottom: '2px' }}>
                    {item.title}
                  </div>
                  <div style={{ color: '#4a5568', fontSize: '13px' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Calendly embed */}
        <div className="reveal-scale">
          <div
            style={{
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid #1a1d2e',
              background: '#0e1018',
            }}
          >
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/sahas-konreddy1/30min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=0e1018&text_color=eef0ff&primary_color=4d8fff"
              style={{ minWidth: '280px', height: '700px' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
