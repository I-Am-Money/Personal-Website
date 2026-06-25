'use client'
import { useState, useRef, useEffect } from 'react'
import { Lock, ArrowRight } from '@phosphor-icons/react'

const PRESET_AMOUNTS = [5, 10, 25, 50, 100]

export default function Donations() {
  const [selected, setSelected] = useState<number>(25)
  const [custom, setCustom]     = useState('')
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState('')
  const sectionRef              = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal, .reveal-scale').forEach((item, i) => {
            setTimeout(() => item.classList.add('visible'), i * 100)
          })
          observer.unobserve(el)
        }
      },
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const effectiveAmount = custom ? parseFloat(custom) : selected

  const handleDonate = async () => {
    setError('')
    const amount = effectiveAmount
    if (!amount || isNaN(amount) || amount < 1 || amount > 1000) {
      setError('Enter an amount between $1 and $1,000.')
      return
    }
    setLoading(true)
    try {
      const res  = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: Math.round(amount * 100) }),
      })
      const data = await res.json()
      if (!res.ok) { setError(data.error ?? 'Something went wrong.'); return }
      if (data.url) window.location.href = data.url
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
      style={{ padding: '140px 0', background: 'var(--surface)', borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}
    >
      <div aria-hidden="true" style={{ position: 'absolute', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(91,143,255,0.05) 0%, transparent 65%)', bottom: '-150px', left: '-80px', pointerEvents: 'none', animation: 'orb-drift-2 20s ease-in-out infinite' }} />

      <div className="section-max donate-layout" style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
        <style>{`
          @media (max-width: 768px) {
            .donate-layout { grid-template-columns: 1fr !important; gap: 40px !important; }
          }
        `}</style>

        {/* Left */}
        <div>
          <h2
            className="reveal"
            style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.0, marginBottom: '28px' }}
          >
            Back the work
          </h2>

          <p className="reveal" style={{ color: 'var(--ash)', fontSize: 'clamp(14px, 1.5vw, 16px)', lineHeight: 1.8, marginBottom: '16px', maxWidth: '400px' }}>
            Contributions go toward two things: keeping Hands of Hope funded (outreach events,
            supply drives, community programs) and the early-stage costs of building NextLine AI.
          </p>
          <p className="reveal" style={{ color: 'var(--ash)', fontSize: 'clamp(14px, 1.5vw, 16px)', lineHeight: 1.8, marginBottom: '40px', maxWidth: '400px' }}>
            No middlemen. A $10 contribution goes $10 toward something real.
          </p>

          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '0', borderTop: '1px solid var(--border)' }}>
            {[
              { label: 'Hands of Hope', desc: 'Food drives, supply runs, and community outreach across Atlanta.' },
              { label: 'NextLine AI', desc: 'Infrastructure and tooling for building the product.' },
            ].map((item) => (
              <div
                key={item.label}
                style={{ padding: '20px 0', borderBottom: '1px solid var(--border)' }}
              >
                <div style={{ color: 'var(--blue)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>
                  {item.label}
                </div>
                <div style={{ color: 'var(--ash)', fontSize: '13px', lineHeight: 1.65 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: donation widget */}
        <div className="reveal-scale">
          <div className="card-shell">
            <div className="card-inner" style={{ padding: '32px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(91,143,255,0.4), transparent)' }} />

              <h3 style={{ fontFamily: "'Archivo', sans-serif", fontSize: '17px', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '6px' }}>Choose an amount</h3>
              <p style={{ color: 'var(--muted)', fontSize: '12px', marginBottom: '24px' }}>Processed securely via Stripe. No account needed.</p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '14px' }}>
                {PRESET_AMOUNTS.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => { setSelected(amt); setCustom(''); setError('') }}
                    className={`amount-btn${!custom && selected === amt ? ' selected' : ''}`}
                  >
                    ${amt}
                  </button>
                ))}
              </div>

              <div style={{ position: 'relative', marginBottom: '20px' }}>
                <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: custom ? '#f0f2ff' : 'var(--muted)', fontSize: '15px', fontWeight: 700, pointerEvents: 'none' }}>$</span>
                <input
                  type="number" min="1" max="1000" step="1" placeholder="Custom amount"
                  value={custom}
                  onChange={(e) => { setCustom(e.target.value); setError('') }}
                  style={{
                    width: '100%', padding: '11px 14px 11px 28px',
                    background: 'rgba(255,255,255,0.04)',
                    border: `1px solid ${custom ? 'var(--blue)' : 'var(--border)'}`,
                    borderRadius: '10px', color: '#f0f2ff', fontSize: '15px', fontWeight: 700,
                    outline: 'none', transition: 'border-color 0.2s ease',
                  }}
                />
              </div>

              {effectiveAmount > 0 && !isNaN(effectiveAmount) && (
                <div style={{
                  padding: '10px 14px', background: 'rgba(91,143,255,0.07)',
                  border: '1px solid rgba(91,143,255,0.14)', borderRadius: '8px',
                  marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}>
                  <span style={{ color: 'var(--ash)', fontSize: '13px' }}>Total</span>
                  <span style={{ color: 'var(--blue)', fontSize: '17px', fontWeight: 800, fontFamily: "'Archivo', sans-serif" }}>
                    ${effectiveAmount.toFixed(2)}
                  </span>
                </div>
              )}

              {error && (
                <div style={{ padding: '10px 14px', background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.2)', borderRadius: '8px', color: '#f87171', fontSize: '13px', marginBottom: '14px' }}>
                  {error}
                </div>
              )}

              <button
                onClick={handleDonate}
                disabled={loading}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer', fontSize: '15px', paddingLeft: '24px' }}
              >
                {loading ? (
                  <>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'spin 1s linear infinite', marginRight: '8px' }}>
                      <path d="M21 12a9 9 0 11-6.219-8.56" />
                    </svg>
                    Redirecting to Stripe...
                  </>
                ) : (
                  <>
                    Donate{effectiveAmount > 0 && !isNaN(effectiveAmount) ? ` $${effectiveAmount}` : ''}
                    <span className="btn-icon-wrap">
                      <ArrowRight size={13} weight="bold" />
                    </span>
                  </>
                )}
              </button>

              <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '11px', marginTop: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                <Lock size={11} weight="bold" />
                Card details never touch this server. Handled by Stripe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
