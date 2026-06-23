'use client'
import { useEffect, useState } from 'react'

const roles = ['Student Builder', 'COO at Hands of Hope', 'Founder of NextLine AI']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setRoleIndex((i) => (i + 1) % roles.length)
        setFade(true)
      }, 300)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="top"
      className="hero-bg"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 80px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative grid */}
      <div
        className="dot-grid"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.4,
          pointerEvents: 'none',
        }}
      />

      {/* Floating orbs */}
      <div
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(77,143,255,0.08) 0%, transparent 70%)',
          top: '-100px',
          left: '50%',
          transform: 'translateX(-50%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
        {/* Status badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(0,204,150,0.1)',
            border: '1px solid rgba(0,204,150,0.25)',
            borderRadius: '999px',
            padding: '6px 16px',
            marginBottom: '40px',
          }}
        >
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: '#00cc96',
              display: 'inline-block',
              animation: 'pulse 2s ease-in-out infinite',
            }}
          />
          <span style={{ color: '#00cc96', fontSize: '13px', fontWeight: 600 }}>
            Open to internships and collaborations
          </span>
        </div>

        {/* Name */}
        <h1
          style={{
            fontSize: 'clamp(48px, 8vw, 88px)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            lineHeight: 1,
            color: '#eef0ff',
            marginBottom: '20px',
          }}
        >
          Sahas Konreddy
        </h1>

        {/* Rotating role */}
        <div
          style={{
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '28px',
          }}
        >
          <span
            style={{
              fontSize: 'clamp(18px, 3vw, 24px)',
              fontWeight: 600,
              transition: 'opacity 0.3s ease, transform 0.3s ease',
              opacity: fade ? 1 : 0,
              transform: fade ? 'translateY(0)' : 'translateY(8px)',
            }}
            className="gradient-text"
          >
            {roles[roleIndex]}
          </span>
        </div>

        {/* Bio */}
        <p
          style={{
            color: '#8896aa',
            fontSize: 'clamp(15px, 2vw, 18px)',
            lineHeight: 1.7,
            maxWidth: '600px',
            margin: '0 auto 48px',
          }}
        >
          Sophomore at Innovation Academy in Alpharetta with a 4.6 GPA. Running operations at a
          nonprofit that serves underserved communities, building AI tools, and representing the city
          in government-facing project work.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: 'flex',
            gap: '14px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <a href="#experience" className="btn-primary">
            See my work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="19 12 12 19 5 12" />
            </svg>
          </a>
          <a href="https://calendly.com/sahas-konreddy1/30min" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Book a call
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </a>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: 'flex',
            gap: '48px',
            justifyContent: 'center',
            marginTop: '72px',
            flexWrap: 'wrap',
          }}
        >
          {[
            { value: '4.6', label: 'GPA (weighted higher)' },
            { value: '4+', label: 'active roles' },
            { value: '18+', label: 'hrs/week committed' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: 'clamp(28px, 4vw, 40px)',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  color: '#eef0ff',
                  lineHeight: 1,
                  marginBottom: '6px',
                }}
                className="gradient-text"
              >
                {stat.value}
              </div>
              <div style={{ color: '#4a5568', fontSize: '13px', fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          opacity: 0.4,
        }}
      >
        <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', color: '#8896aa' }}>
          SCROLL
        </span>
        <div
          style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, #4d8fff, transparent)',
            animation: 'pulse 2s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  )
}
