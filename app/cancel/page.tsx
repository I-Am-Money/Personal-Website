import Link from 'next/link'

export default function CancelPage() {
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
        <h1 style={{ color: '#eef0ff', fontSize: '26px', fontWeight: 700, marginBottom: '12px' }}>
          Payment cancelled
        </h1>
        <p style={{ color: '#8896aa', fontSize: '16px', lineHeight: 1.6, marginBottom: '32px' }}>
          No charge was made. You can try again anytime.
        </p>
        <Link href="/#support" className="btn-secondary" style={{ justifyContent: 'center' }}>
          Go back
        </Link>
      </div>
    </div>
  )
}
