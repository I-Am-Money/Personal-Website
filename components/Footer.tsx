'use client'

export default function Footer() {
  const year = new Date().getFullYear()

  const linkStyle = {
    color: 'var(--muted)',
    textDecoration: 'none',
    fontSize: '13px',
    transition: 'color 0.2s ease',
  }

  const hover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = 'var(--ash)'
  }
  const leave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = 'var(--muted)'
  }

  return (
    <footer
      style={{
        padding: '40px 0 32px',
        borderTop: '1px solid var(--border)',
        background: 'var(--bg)',
      }}
    >
      <div
        className="section-max"
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}
      >
        <div>
          <div style={{ fontFamily: "'Archivo', sans-serif", fontSize: '17px', fontWeight: 900, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: '4px' }}>
            Sahas Konreddy<span style={{ color: 'var(--blue)' }}>.</span>
          </div>
          <div style={{ color: 'var(--muted)', fontSize: '12px' }}>
            &copy; {year} &nbsp;&bull;&nbsp; Alpharetta, GA
          </div>
        </div>

        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
          <a href="mailto:sahas.konreddy1@gmail.com" style={linkStyle} onMouseEnter={hover} onMouseLeave={leave}>
            sahas.konreddy1@gmail.com
          </a>
          <a href="tel:6786746812" style={linkStyle} onMouseEnter={hover} onMouseLeave={leave}>
            678-674-6812
          </a>
          <a
            href="https://www.linkedin.com/in/sahas-konreddy-ba0633344"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...linkStyle, display: 'inline-flex', alignItems: 'center', gap: '5px' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--blue)' }}
            onMouseLeave={leave}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
          <a
            href="https://calendly.com/sahas-konreddy1/30min"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
            onMouseEnter={hover}
            onMouseLeave={leave}
          >
            Book a call
          </a>
        </div>
      </div>
    </footer>
  )
}
