'use client'

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        position: 'relative',
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 80px',
        textAlign: 'center',
        overflow: 'hidden',
        background: 'var(--bg)',
      }}
    >
      {/* Gradient orbs — GPU animated, never on scrolling content */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            width: '700px',
            height: '700px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(91,143,255,0.13) 0%, transparent 65%)',
            top: '-160px',
            left: '50%',
            transform: 'translateX(-50%)',
            animation: 'orb-drift-1 18s ease-in-out infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,204,150,0.08) 0%, transparent 65%)',
            bottom: '0px',
            right: '-100px',
            animation: 'orb-drift-2 22s ease-in-out infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(129,140,248,0.07) 0%, transparent 65%)',
            bottom: '120px',
            left: '-80px',
            animation: 'orb-drift-3 26s ease-in-out infinite',
          }}
        />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '840px', width: '100%' }}>

        {/* Eyebrow badge */}
        <div style={{ animation: 'hero-fade 0.8s var(--ease-spring) 0.1s both' }}>
          <span className="eyebrow" style={{ marginBottom: '36px', display: 'inline-flex' }}>
            <span className="eyebrow-dot" style={{ background: 'var(--teal)', animation: 'pulse-dot 2s ease infinite' }} />
            Open to internships and collaborations
          </span>
        </div>

        {/* Name */}
        <h1
          style={{
            fontSize: 'clamp(52px, 10vw, 112px)',
            fontWeight: 900,
            letterSpacing: '-0.05em',
            lineHeight: 0.92,
            color: '#f0f2ff',
            marginBottom: '28px',
            animation: 'hero-fade 0.9s var(--ease-spring) 0.2s both',
          }}
        >
          Sahas<br />
          <span className="gradient-text">Konreddy</span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(16px, 2.2vw, 20px)',
            fontWeight: 400,
            color: 'var(--ash)',
            lineHeight: 1.7,
            maxWidth: '560px',
            margin: '0 auto 52px',
            animation: 'hero-fade 0.9s var(--ease-spring) 0.35s both',
          }}
        >
          Sophomore at Innovation Academy. COO of a nonprofit fighting food
          insecurity across Atlanta. Building NextLine AI. Based in Alpharetta, GA.
        </p>

        {/* CTA row */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            animation: 'hero-fade 0.9s var(--ease-spring) 0.45s both',
          }}
        >
          <a href="#experience" className="btn-primary">
            See my work
            <span className="btn-icon-wrap">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </span>
          </a>

          <a
            href="https://calendly.com/sahas-konreddy1/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Book a call
            <span className="btn-icon-wrap">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </span>
          </a>
        </div>

        {/* Stats */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'clamp(32px, 6vw, 80px)',
            marginTop: '80px',
            flexWrap: 'wrap',
            animation: 'hero-fade 1s var(--ease-spring) 0.55s both',
          }}
        >
          {[
            { value: '4.6', label: 'GPA unweighted', color: 'var(--blue)' },
            { value: '4', label: 'active roles', color: 'var(--teal)' },
            { value: '18+', label: 'hours per week', color: 'var(--indigo)' },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontSize: 'clamp(32px, 5vw, 52px)',
                  fontWeight: 900,
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  color: s.color,
                  marginBottom: '6px',
                }}
              >
                {s.value}
              </div>
              <div style={{ color: 'var(--muted)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          opacity: 0.3,
          animation: 'hero-fade 1s ease 1.2s both',
        }}
      >
        <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--ash)', textTransform: 'uppercase' }}>Scroll</span>
        <div
          style={{
            width: '1px',
            height: '44px',
            background: 'linear-gradient(to bottom, var(--blue), transparent)',
            animation: 'pulse-dot 2s ease infinite',
          }}
        />
      </div>
    </section>
  )
}
