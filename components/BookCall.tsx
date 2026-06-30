'use client'
import { useEffect, useRef } from 'react'
import { Clock, ChatText, Phone } from '@phosphor-icons/react'

const FEATURES = [
  {
    icon:  <Clock size={16} weight="bold" />,
    title: '30 minutes',
    desc:  'Come with something specific you want to work through — a question, a decision, or a problem you have been sitting on. The format is a conversation, not a presentation.',
  },
  {
    icon:  <ChatText size={16} weight="bold" />,
    title: 'Open agenda',
    desc:  'NextLine AI, Hands of Hope operations, civic tech, the mechanics of running a startup in high school, or something unrelated to any of those. No topic is off the table and no prep is required.',
  },
  {
    icon:  <Phone size={16} weight="bold" />,
    title: 'Video or phone',
    desc:  'Whichever format works better for you. The connection details come with your booking confirmation and can be changed up to 24 hours before.',
  },
]

export default function BookCall() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal, .reveal-scale').forEach((item, i) => {
            setTimeout(() => item.classList.add('visible'), i * 110)
          })
          io.unobserve(el)
        }
      },
      { threshold: 0.08 }
    )
    io.observe(el)

    const script = document.createElement('script')
    script.src   = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      io.disconnect()
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section
      id="book"
      ref={sectionRef}
      style={{ padding: '140px 0', background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }} className="section-max bk-grid">
        <style>{`
          @media (max-width: 768px) {
            .bk-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          }
        `}</style>

        {/* Left */}
        <div>
          <h2 className="reveal" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.0, marginBottom: '28px' }}>
            Schedule a conversation
          </h2>

          <p className="reveal" style={{ color: 'var(--ash)', fontSize: 'clamp(14px, 1.5vw, 16px)', lineHeight: 1.8, marginBottom: '16px' }}>
            If you are working on something and want a second opinion, exploring whether a
            collaboration makes sense, or trying to understand how NextLine AI could apply to your
            business — book time directly. The calendar shows real availability.
          </p>
          <p className="reveal" style={{ color: 'var(--ash)', fontSize: 'clamp(14px, 1.5vw, 16px)', lineHeight: 1.8, marginBottom: '44px' }}>
            Available most weekday mornings before 8am and evenings after 5pm. Weekends work on
            a case-by-case basis — request one through the form and he will confirm within 24 hours.
          </p>

          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {FEATURES.map((item) => (
              <div key={item.title} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(122,82,50,0.08)', border: '1px solid rgba(122,82,50,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--blue)', flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div style={{ paddingTop: '4px' }}>
                  <div style={{ fontFamily: "'Archivo', sans-serif", color: 'var(--ink)', fontSize: '14px', fontWeight: 700, marginBottom: '2px' }}>{item.title}</div>
                  <div style={{ color: 'var(--muted)', fontSize: '13px', lineHeight: 1.65 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Calendly */}
        <div className="reveal-scale">
          <div className="card-shell">
            <div className="card-inner" style={{ overflow: 'hidden' }}>
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/sahas-konreddy1/30min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=131e15&text_color=ede8d8&primary_color=7a5232"
                style={{ minWidth: '280px', height: '680px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
