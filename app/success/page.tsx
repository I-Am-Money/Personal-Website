import Link from 'next/link'

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6" style={{ background: '#06070d' }}>
      <div
        className="text-center max-w-md"
        style={{
          background: '#0e1018',
          border: '1px solid #1a1d2e',
          borderRadius: '20px',
          padding: '48px 40px',
        }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ background: 'rgba(0,204,150,0.12)', border: '1px solid rgba(0,204,150,0.3)' }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00cc96" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h1 style={{ color: '#eef0ff', fontSize: '26px', fontWeight: 700, marginBottom: '12px' }}>
          Thank you for your support
        </h1>
        <p style={{ color: '#8896aa', fontSize: '16px', lineHeight: 1.6, marginBottom: '32px' }}>
          Your contribution goes directly toward the work at Hands of Hope and the development of NextLine AI.
        </p>
        <Link href="/" className="btn-primary" style={{ justifyContent: 'center' }}>
          Back to site
        </Link>
      </div>
    </div>
  )
}
