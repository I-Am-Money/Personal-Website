import Link from 'next/link'

export default function SuccessPage() {
  return (
    <div style={{ minHeight: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', background: 'var(--bg)' }}>
      <div className="card-shell" style={{ maxWidth: '440px', width: '100%' }}>
        <div className="card-inner" style={{ padding: '48px 40px', textAlign: 'center' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(0,204,150,0.1)', border: '1px solid rgba(0,204,150,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00cc96" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h1 style={{ fontFamily: "'Archivo', sans-serif", fontSize: '26px', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '12px' }}>
            Thank you
          </h1>
          <p style={{ color: 'var(--ash)', fontSize: '15px', lineHeight: 1.7, marginBottom: '32px' }}>
            Your contribution goes directly toward the work at Hands of Hope and the development of NextLine AI.
          </p>
          <Link href="/" className="btn-primary" style={{ justifyContent: 'center', display: 'inline-flex' }}>
            Back to site
            <span className="btn-icon-wrap">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
