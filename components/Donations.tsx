'use client'
import { useState, useRef, useEffect } from 'react'

const PRESET_AMOUNTS = [5, 10, 25, 50, 100]

export default function Donations() {
  const [selected, setSelected] = useState<number>(25)
  const [custom, setCustom] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((item, i) => {
            setTimeout(() => item.classList.add('visible'), i * 120)
          })
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const effectiveAmount = custom ? parseFloat(custom) : selected

  const handleDonate = async () => {
    setError('')
    const amount = effectiveAmount

    if (!amount || isNaN(amount) || amount < 1 || amount > 1000) {
      setError('Please enter an amount between $1 and $1,000.')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: Math.round(amount * 100) }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error ?? 'Something went wrong. Please try again.')
        return
      }

      if (data.url) {
        window.location.href = data.url
      }
    } catch {
      setError('Unable to connect. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="support"
      ref={sectionRef}
      style={{
        padding: '120px 24px',
        background: '#08090f',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,204,150,0.05) 0%, transparent 70%)',
          bottom: '-200px',
          left: '-100px',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start',
          }}
          className="donate-grid"
        >
          <style>{`
            @media (max-width: 768px) {
              .donate-grid {
                grid-template-columns: 1fr !important;
                gap: 40px !important;
              }
            }
          `}</style>

          {/* Left: context */}
          <div>
            <div className="section-label reveal" style={{ marginBottom: '16px' }}>
              Support
            </div>
            <h2
              className="reveal"
              style={{
                fontSize: 'clamp(30px, 4vw, 46px)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: '#eef0ff',
                lineHeight: 1.1,
                marginBottom: '24px',
              }}
            >
              Back the work
            </h2>
            <p
              className="reveal"
              style={{
                color: '#8896aa',
                fontSize: '15px',
                lineHeight: 1.75,
                marginBottom: '16px',
              }}
            >
              Contributions go toward two things: keeping Hands of Hope running (outreach events,
              supply drives, community programs) and the early-stage costs of building NextLine AI.
            </p>
            <p
              className="reveal"
              style={{
                color: '#8896aa',
                fontSize: '15px',
                lineHeight: 1.75,
                marginBottom: '32px',
              }}
            >
              There are no middlemen and no overhead bloat. A $10 contribution actually goes
              $10 toward something real.
            </p>

            <div
              className="reveal"
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              {[
                {
                  color: '#fb923c',
                  label: 'Hands of Hope',
                  desc: 'Food drives, supply distribution, and community outreach across the Atlanta area.',
                },
                {
                  color: '#4d8fff',
                  label: 'NextLine AI',
                  desc: 'Infrastructure, tooling, and development costs for building the product.',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    padding: '16px 20px',
                    background: '#0e1018',
                    border: `1px solid ${item.color}25`,
                    borderRadius: '12px',
                    borderLeft: `3px solid ${item.color}`,
                  }}
                >
                  <div
                    style={{
                      color: item.color,
                      fontSize: '13px',
                      fontWeight: 700,
                      marginBottom: '6px',
                    }}
                  >
                    {item.label}
                  </div>
                  <div style={{ color: '#8896aa', fontSize: '13px', lineHeight: 1.6 }}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: donation widget */}
          <div className="reveal-scale">
            <div
              style={{
                background: '#0e1018',
                border: '1px solid #1a1d2e',
                borderRadius: '20px',
                padding: '36px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top border glow */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '1px',
                  background: 'linear-gradient(90deg, transparent, rgba(0,204,150,0.5), rgba(77,143,255,0.3), transparent)',
                }}
              />

              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#eef0ff',
                  marginBottom: '8px',
                }}
              >
                Choose an amount
              </h3>
              <p style={{ color: '#4a5568', fontSize: '13px', marginBottom: '24px' }}>
                Processed securely via Stripe. No account required.
              </p>

              {/* Preset amounts */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '8px',
                  marginBottom: '16px',
                }}
              >
                {PRESET_AMOUNTS.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => {
                      setSelected(amt)
                      setCustom('')
                      setError('')
                    }}
                    className={`amount-btn${!custom && selected === amt ? ' selected' : ''}`}
                  >
                    ${amt}
                  </button>
                ))}
              </div>

              {/* Custom amount */}
              <div style={{ position: 'relative', marginBottom: '24px' }}>
                <span
                  style={{
                    position: 'absolute',
                    left: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: custom ? '#eef0ff' : '#4a5568',
                    fontSize: '15px',
                    fontWeight: 600,
                    pointerEvents: 'none',
                  }}
                >
                  $
                </span>
                <input
                  type="number"
                  min="1"
                  max="1000"
                  step="1"
                  placeholder="Custom amount"
                  value={custom}
                  onChange={(e) => {
                    setCustom(e.target.value)
                    setError('')
                  }}
                  style={{
                    width: '100%',
                    padding: '11px 14px 11px 28px',
                    background: '#151821',
                    border: `1px solid ${custom ? '#4d8fff' : '#1a1d2e'}`,
                    borderRadius: '8px',
                    color: '#eef0ff',
                    fontSize: '15px',
                    fontWeight: 600,
                    outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                />
              </div>

              {/* Summary line */}
              {effectiveAmount > 0 && !isNaN(effectiveAmount) && (
                <div
                  style={{
                    padding: '10px 14px',
                    background: 'rgba(77,143,255,0.07)',
                    border: '1px solid rgba(77,143,255,0.15)',
                    borderRadius: '8px',
                    marginBottom: '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span style={{ color: '#8896aa', fontSize: '13px' }}>Total</span>
                  <span style={{ color: '#4d8fff', fontSize: '16px', fontWeight: 700 }}>
                    ${effectiveAmount.toFixed(2)}
                  </span>
                </div>
              )}

              {error && (
                <p
                  style={{
                    color: '#f87171',
                    fontSize: '13px',
                    marginBottom: '16px',
                    padding: '10px 14px',
                    background: 'rgba(248,113,113,0.08)',
                    borderRadius: '8px',
                    border: '1px solid rgba(248,113,113,0.2)',
                  }}
                >
                  {error}
                </p>
              )}

              <button
                onClick={handleDonate}
                disabled={loading}
                className="btn-primary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  opacity: loading ? 0.7 : 1,
                  cursor: loading ? 'not-allowed' : 'pointer',
                }}
              >
                {loading ? (
                  <>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{ animation: 'spin 1s linear infinite' }}
                    >
                      <path d="M21 12a9 9 0 11-6.219-8.56" />
                    </svg>
                    Redirecting to Stripe...
                  </>
                ) : (
                  <>
                    Donate${effectiveAmount > 0 && !isNaN(effectiveAmount) ? ` $${effectiveAmount}` : ''}
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </>
                )}
              </button>

              <p
                style={{
                  textAlign: 'center',
                  color: '#4a5568',
                  fontSize: '12px',
                  marginTop: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
                Payments processed by Stripe. Card info never touches this server.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}
