'use client'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        padding: '48px 24px',
        borderTop: '1px solid #1a1d2e',
        background: '#06070d',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px',
        }}
      >
        <div>
          <div
            style={{
              fontSize: '18px',
              fontWeight: 800,
              color: '#eef0ff',
              letterSpacing: '-0.02em',
              marginBottom: '6px',
            }}
          >
            Sahas Konreddy<span style={{ color: '#4d8fff' }}>.</span>
          </div>
          <div style={{ color: '#4a5568', fontSize: '13px' }}>
            &copy; {year} &middot; Alpharetta, GA
          </div>
        </div>

        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
          <a
            href="mailto:sahas.konreddy1@gmail.com"
            style={{ color: '#4a5568', fontSize: '13px', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#8896aa')}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#4a5568')}
          >
            sahas.konreddy1@gmail.com
          </a>
          <a
            href="tel:6786746812"
            style={{ color: '#4a5568', fontSize: '13px', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#8896aa')}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#4a5568')}
          >
            678-674-6812
          </a>
          <a
            href="https://www.linkedin.com/in/sahas-konreddy-ba0633344"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#4a5568',
              fontSize: '13px',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#4d8fff')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#4a5568')}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
          <a
            href="https://calendly.com/sahas-konreddy1/30min"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#4a5568', fontSize: '13px', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#8896aa')}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#4a5568')}
          >
            Book a call
          </a>
        </div>
      </div>
    </footer>
  )
}
