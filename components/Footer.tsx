'use client'

const FOOTER_LINKS = [
  { label: 'NextLine AI',  href: '#nextline' },
  { label: 'Work',         href: '#work' },
  { label: 'Community',    href: '#community' },
  { label: 'Projects',     href: '#projects' },
  { label: 'About',        href: '#mission' },
  { label: 'Book a call',  href: '#book' },
]

const CONTACT_LINKS = [
  { label: 'sahas.konreddy1@gmail.com', href: 'mailto:sahas.konreddy1@gmail.com' },
  { label: '678-674-6812',              href: 'tel:6786746812' },
  { label: 'LinkedIn',                  href: 'https://www.linkedin.com/in/sahas-konreddy-ba0633344', external: true },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--bg)' }}>
      {/* Top row */}
      <div className="section-max" style={{ padding: '64px 32px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
        <div>
          <div style={{ fontFamily: "'Archivo', sans-serif", fontSize: '20px', fontWeight: 900, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: '10px' }}>
            Sahas Konreddy
          </div>
          <p style={{ color: 'var(--muted)', fontSize: '13px', lineHeight: 1.75, maxWidth: '320px' }}>
            Student, COO, and founder. Building things that work for people who need them.
            Based in Alpharetta, Georgia.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px 48px' }}>
          <div>
            <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '14px' }}>Navigation</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {FOOTER_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  style={{ color: 'var(--ash)', textDecoration: 'none', fontSize: '13px', fontWeight: 500, transition: 'color 0.18s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ink)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ash)')}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '14px' }}>Contact</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {CONTACT_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target={l.external ? '_blank' : undefined}
                  rel={l.external ? 'noopener noreferrer' : undefined}
                  style={{ color: 'var(--ash)', textDecoration: 'none', fontSize: '13px', fontWeight: 500, transition: 'color 0.18s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ink)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ash)')}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            footer .section-max > div:first-child,
            footer .section-max > div:last-child {
              grid-column: 1 / -1 !important;
            }
          }
        `}</style>
      </div>

      {/* Bottom bar */}
      <div className="section-max" style={{ padding: '20px 32px 28px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ color: 'var(--muted)', fontSize: '12px' }}>
          &copy; {year} Sahas Konreddy &nbsp;&bull;&nbsp; Alpharetta, GA
        </div>
        <a
          href="#top"
          style={{ color: 'var(--muted)', fontSize: '12px', textDecoration: 'none', transition: 'color 0.18s ease' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ash)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
