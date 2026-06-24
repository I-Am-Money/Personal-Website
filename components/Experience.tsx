'use client'
import { useRef, useEffect } from 'react'

const experiences = [
  {
    id: 'ambassador',
    num: '01',
    title: 'Student Ambassador',
    org: 'Innovation Academy',
    location: 'Alpharetta, GA',
    period: 'Aug 2025 – May 2028',
    hours: '5 hrs / week',
    accentColor: '#a78bfa',
    bgGradient: 'radial-gradient(ellipse 80% 70% at 30% 50%, #1a0a44 0%, #050508 100%)',
    summary:
      'Where student council sets the agenda, ambassadors make it happen. Running school tours for prospective families, coordinating events, and representing the student body in front of faculty and parents with no script and full accountability.',
    skills: ['Public speaking', 'Event coordination', 'Time management', 'Decision under pressure'],
    visual: (
      <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '300px' }}>
        {[1,2,3,4,5].map(i => (
          <circle key={i} cx="160" cy="200" r={i * 36} stroke={`rgba(167,139,250,${0.12 - i * 0.02})`} strokeWidth="1" />
        ))}
        {/* Mortarboard */}
        <polygon points="160,60 260,110 160,160 60,110" fill="rgba(167,139,250,0.15)" stroke="rgba(167,139,250,0.5)" strokeWidth="1.5" />
        <rect x="140" y="155" width="40" height="50" rx="4" fill="rgba(167,139,250,0.1)" stroke="rgba(167,139,250,0.3)" strokeWidth="1" />
        {/* Tassel */}
        <line x1="250" y1="110" x2="250" y2="155" stroke="rgba(167,139,250,0.5)" strokeWidth="1.5" />
        <circle cx="250" cy="158" r="5" fill="rgba(167,139,250,0.6)" />
        {/* Radiating lines */}
        {[0,30,60,90,120,150,180,210,240,270,300,330].map(angle => (
          <line
            key={angle}
            x1="160"
            y1="110"
            x2={160 + Math.cos((angle * Math.PI) / 180) * 90}
            y2={110 + Math.sin((angle * Math.PI) / 180) * 90}
            stroke={`rgba(167,139,250,0.07)`}
            strokeWidth="1"
          />
        ))}
      </svg>
    ),
  },
  {
    id: 'coo',
    num: '02',
    title: 'Co-American Region Leader',
    org: 'Hands of Hope Outreach',
    location: 'Alpharetta, GA',
    period: 'Sep 2024 – May 2028',
    hours: '13 hrs / week',
    accentColor: '#fb923c',
    bgGradient: 'radial-gradient(ellipse 80% 70% at 70% 50%, #2a0e00 0%, #050508 100%)',
    summary:
      'COO of a nonprofit addressing food insecurity and access to basic necessities across underserved communities. Managing volunteers, coordinating outreach logistics, allocating budget, and keeping the organization moving toward long-term impact rather than short-term noise.',
    skills: ['Operations management', 'Budget oversight', 'Volunteer coordination', 'Strategic planning'],
    visual: (
      <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '300px' }}>
        {/* Network of connected circles */}
        {[
          [160, 140], [100, 200], [220, 200],
          [60, 140], [260, 140], [160, 260],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="18" fill={`rgba(251,146,60,${0.08 + i * 0.02})`} stroke="rgba(251,146,60,0.35)" strokeWidth="1.5" />
        ))}
        {/* Connections */}
        {[
          [[160,140],[100,200]], [[160,140],[220,200]],
          [[160,140],[60,140]], [[160,140],[260,140]],
          [[100,200],[160,260]], [[220,200],[160,260]],
        ].map(([[x1,y1],[x2,y2]], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(251,146,60,0.2)" strokeWidth="1" />
        ))}
        {/* Heart at center */}
        <path
          d="M160 130 C160 120 145 108 133 115 C122 122 122 138 133 148 L160 175 L187 148 C198 138 198 122 187 115 C175 108 160 120 160 130Z"
          fill="rgba(251,146,60,0.18)"
          stroke="rgba(251,146,60,0.6)"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    id: 'city',
    title: 'Junior Project Proposal Partner',
    num: '03',
    org: 'City of Alpharetta',
    location: 'Alpharetta, GA',
    period: 'Jul 2025 – Aug 2025',
    hours: '3 hrs / week',
    accentColor: '#22d3ee',
    bgGradient: 'radial-gradient(ellipse 80% 70% at 30% 60%, #001a22 0%, #050508 100%)',
    summary:
      'Brought two proposals to city officials: increased police presence at a magnet school and a digital kiosk network for downtown Alpharetta. Co-wrote and coded the kiosk software. Hardware funding fell through, but the process covered utility contacts, public electronics permitting, and full city-scale project planning.',
    skills: ['Civic outreach', 'Software development', 'Budgeting', 'Government relations', 'Delegation'],
    visual: (
      <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '300px' }}>
        {/* City grid */}
        {[60, 100, 140, 180, 220, 260].map(x => (
          <line key={`v${x}`} x1={x} y1="60" x2={x} y2="260" stroke="rgba(34,211,238,0.07)" strokeWidth="1" />
        ))}
        {[80, 120, 160, 200, 240].map(y => (
          <line key={`h${y}`} x1="60" y1={y} x2="260" y2={y} stroke="rgba(34,211,238,0.07)" strokeWidth="1" />
        ))}
        {/* Buildings */}
        <rect x="80" y="180" width="30" height="80" rx="2" fill="rgba(34,211,238,0.1)" stroke="rgba(34,211,238,0.4)" strokeWidth="1.5" />
        <rect x="120" y="140" width="40" height="120" rx="2" fill="rgba(34,211,238,0.12)" stroke="rgba(34,211,238,0.5)" strokeWidth="1.5" />
        <rect x="170" y="160" width="35" height="100" rx="2" fill="rgba(34,211,238,0.1)" stroke="rgba(34,211,238,0.35)" strokeWidth="1.5" />
        <rect x="215" y="190" width="25" height="70" rx="2" fill="rgba(34,211,238,0.08)" stroke="rgba(34,211,238,0.3)" strokeWidth="1.5" />
        {/* Map pin */}
        <circle cx="160" cy="90" r="16" fill="rgba(34,211,238,0.2)" stroke="rgba(34,211,238,0.7)" strokeWidth="2" />
        <circle cx="160" cy="90" r="5" fill="rgba(34,211,238,0.9)" />
        <line x1="160" y1="106" x2="160" y2="130" stroke="rgba(34,211,238,0.5)" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: 'wissen',
    num: '04',
    title: 'Intern',
    org: 'Wissen Digital Inc.',
    location: 'Alpharetta, GA',
    period: 'May 2025 – Jul 2025',
    hours: '20 hrs / week',
    accentColor: '#34d399',
    bgGradient: 'radial-gradient(ellipse 80% 70% at 60% 40%, #001a0a 0%, #050508 100%)',
    summary:
      'Front-end and partial back-end web development in Python. General marketing. Acted as a communication relay between executives and the team, managing deliverables and keeping handoffs from falling through the cracks.',
    skills: ['Python', 'Front-end dev', 'Marketing', 'Executive communication', 'Team coordination'],
    visual: (
      <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '300px' }}>
        {/* Terminal border */}
        <rect x="60" y="80" width="200" height="160" rx="12" fill="rgba(52,211,153,0.06)" stroke="rgba(52,211,153,0.3)" strokeWidth="1.5" />
        {/* Terminal dots */}
        <circle cx="84" cy="104" r="5" fill="rgba(239,68,68,0.6)" />
        <circle cx="100" cy="104" r="5" fill="rgba(251,191,36,0.6)" />
        <circle cx="116" cy="104" r="5" fill="rgba(52,211,153,0.6)" />
        {/* Code lines */}
        <line x1="80" y1="125" x2="130" y2="125" stroke="rgba(52,211,153,0.5)" strokeWidth="2" strokeLinecap="round" />
        <line x1="80" y1="145" x2="200" y2="145" stroke="rgba(52,211,153,0.25)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="90" y1="165" x2="170" y2="165" stroke="rgba(52,211,153,0.25)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="90" y1="185" x2="210" y2="185" stroke="rgba(52,211,153,0.2)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="80" y1="205" x2="150" y2="205" stroke="rgba(52,211,153,0.2)" strokeWidth="1.5" strokeLinecap="round" />
        {/* Brackets */}
        <text x="80" y="128" fontFamily="monospace" fontSize="14" fill="rgba(52,211,153,0.7)">{'<'}</text>
        <text x="240" y="128" fontFamily="monospace" fontSize="14" fill="rgba(52,211,153,0.7)">{'/>'}</text>
        {/* Cursor blink */}
        <rect x="155" y="196" width="8" height="14" rx="1" fill="rgba(52,211,153,0.8)" />
      </svg>
    ),
  },
]

function MobileCards() {
  const refs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    refs.current.forEach((el) => {
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((item, i) => {
              setTimeout(() => item.classList.add('visible'), i * 110)
            })
            observer.unobserve(el)
          }
        },
        { threshold: 0.15 }
      )
      observer.observe(el)
      return () => observer.disconnect()
    })
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {experiences.map((exp, i) => (
        <div
          key={exp.id}
          ref={(el) => { refs.current[i] = el }}
        >
          <div className="card-shell">
            <div className="card-inner" style={{ overflow: 'hidden' }}>
              {/* Visual header */}
              <div
                style={{
                  height: '180px',
                  background: exp.bgGradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                <div className="reveal-scale" style={{ width: '140px', height: '140px' }}>
                  {exp.visual}
                </div>
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    fontFamily: "'Archivo', sans-serif",
                    fontSize: '40px',
                    fontWeight: 900,
                    letterSpacing: '-0.05em',
                    color: exp.accentColor,
                    opacity: 0.18,
                    lineHeight: 1,
                  }}
                >
                  {exp.num}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '28px' }}>
                <div
                  className="eyebrow reveal"
                  style={{
                    borderColor: `${exp.accentColor}33`,
                    color: exp.accentColor,
                    marginBottom: '12px',
                  }}
                >
                  <span className="eyebrow-dot" style={{ background: exp.accentColor }} />
                  {exp.org} &nbsp;&bull;&nbsp; {exp.hours}
                </div>
                <h3
                  className="reveal"
                  style={{
                    fontSize: 'clamp(20px, 4vw, 26px)',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    marginBottom: '14px',
                    lineHeight: 1.1,
                  }}
                >
                  {exp.title}
                </h3>
                <p className="reveal" style={{ color: 'var(--ash)', fontSize: '14px', lineHeight: 1.75, marginBottom: '20px' }}>
                  {exp.summary}
                </p>
                <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-tag"
                      style={{ borderColor: `${exp.accentColor}22`, color: exp.accentColor }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function StickyScroll() {
  const containerRef  = useRef<HTMLDivElement>(null)
  const bgRefs        = useRef<(HTMLDivElement | null)[]>([])
  const contentRefs   = useRef<(HTMLDivElement | null)[]>([])
  const visualRefs    = useRef<(HTMLDivElement | null)[]>([])
  const dotRefs       = useRef<(HTMLDivElement | null)[]>([])
  const numRef        = useRef<HTMLDivElement>(null)
  const rafRef        = useRef<number>()
  const lastIndex     = useRef(-1)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const update = () => {
      const rect = container.getBoundingClientRect()
      const totalScroll = rect.height - window.innerHeight
      if (totalScroll <= 0) return

      const progress = Math.max(0, Math.min(1, -rect.top / totalScroll))
      const rawIndex = progress * experiences.length
      const index    = Math.min(experiences.length - 1, Math.floor(rawIndex))

      if (index === lastIndex.current) return
      lastIndex.current = index
      const exp = experiences[index]

      bgRefs.current.forEach((bg, i) => {
        if (!bg) return
        bg.style.opacity   = i === index ? '1' : '0'
      })

      contentRefs.current.forEach((el, i) => {
        if (!el) return
        const active = i === index
        el.style.opacity       = active ? '1' : '0'
        el.style.transform     = active ? 'translateY(0px)' : i < index ? 'translateY(-28px)' : 'translateY(28px)'
        el.style.filter        = active ? 'blur(0px)' : 'blur(3px)'
        el.style.pointerEvents = active ? 'auto' : 'none'
      })

      visualRefs.current.forEach((el, i) => {
        if (!el) return
        const active = i === index
        el.style.opacity   = active ? '1' : '0'
        el.style.transform = active ? 'scale(1) translateY(0)' : 'scale(0.92) translateY(16px)'
      })

      dotRefs.current.forEach((dot, i) => {
        if (!dot) return
        dot.style.background = i === index ? exp.accentColor : 'rgba(255,255,255,0.15)'
        dot.style.height     = i === index ? '28px' : '6px'
      })

      if (numRef.current) {
        numRef.current.textContent = exp.num
        numRef.current.style.color = exp.accentColor
      }
    }

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div ref={containerRef} style={{ height: `${experiences.length * 120}vh` }}>
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100dvh',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
        }}
      >
        {/* ---- Left: visual panel ---- */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          {/* Backgrounds */}
          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              ref={(el) => { bgRefs.current[i] = el }}
              style={{
                position: 'absolute',
                inset: 0,
                background: exp.bgGradient,
                opacity: i === 0 ? 1 : 0,
                transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1)',
              }}
            />
          ))}

          {/* SVG visuals */}
          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              ref={(el) => { visualRefs.current[i] = el }}
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '60px',
                opacity: i === 0 ? 1 : 0,
                transform: 'scale(1)',
                transition: 'opacity 0.7s var(--ease-spring), transform 0.7s var(--ease-spring)',
              }}
            >
              {exp.visual}
            </div>
          ))}

          {/* Large background number */}
          <div
            ref={numRef}
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: '32px',
              left: '32px',
              fontFamily: "'Archivo', sans-serif",
              fontSize: '120px',
              fontWeight: 900,
              letterSpacing: '-0.06em',
              lineHeight: 1,
              opacity: 0.1,
              color: experiences[0].accentColor,
              transition: 'color 0.5s ease',
              userSelect: 'none',
            }}
          >
            {experiences[0].num}
          </div>

          {/* Progress dots */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: '50%',
              right: '20px',
              transform: 'translateY(50%)',
              display: 'flex',
              flexDirection: 'column',
              gap: '7px',
            }}
          >
            {experiences.map((_, i) => (
              <div
                key={i}
                ref={(el) => { dotRefs.current[i] = el }}
                style={{
                  width: '3px',
                  height: i === 0 ? '28px' : '6px',
                  borderRadius: '999px',
                  background: i === 0 ? experiences[0].accentColor : 'rgba(255,255,255,0.15)',
                  transition: 'height 0.45s var(--ease-spring), background 0.45s ease',
                }}
              />
            ))}
          </div>
        </div>

        {/* ---- Right: content panel ---- */}
        <div
          style={{
            position: 'relative',
            background: 'var(--bg)',
            borderLeft: '1px solid var(--border)',
          }}
        >
          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              ref={(el) => { contentRefs.current[i] = el }}
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: 'clamp(40px, 6vw, 80px)',
                opacity: i === 0 ? 1 : 0,
                transform: 'translateY(0px)',
                filter: 'blur(0px)',
                pointerEvents: i === 0 ? 'auto' : 'none',
                transition: 'opacity 0.65s var(--ease-spring), transform 0.65s var(--ease-spring), filter 0.65s var(--ease-spring)',
              }}
            >
              <div
                className="eyebrow"
                style={{
                  borderColor: `${exp.accentColor}33`,
                  color: exp.accentColor,
                  marginBottom: '24px',
                  alignSelf: 'flex-start',
                }}
              >
                <span className="eyebrow-dot" style={{ background: exp.accentColor }} />
                {exp.org} &nbsp;&bull;&nbsp; {exp.location}
              </div>

              <h2
                style={{
                  fontSize: 'clamp(28px, 3vw, 46px)',
                  fontWeight: 900,
                  letterSpacing: '-0.04em',
                  lineHeight: 1.05,
                  marginBottom: '14px',
                  color: '#f0f2ff',
                }}
              >
                {exp.title}
              </h2>

              <div
                style={{
                  display: 'flex',
                  gap: '16px',
                  marginBottom: '24px',
                  flexWrap: 'wrap',
                }}
              >
                <span style={{ color: 'var(--muted)', fontSize: '13px', fontWeight: 600 }}>{exp.period}</span>
                <span style={{ color: 'var(--muted)', fontSize: '13px' }}>|</span>
                <span style={{ color: exp.accentColor, fontSize: '13px', fontWeight: 600 }}>{exp.hours}</span>
              </div>

              <p
                style={{
                  color: 'var(--ash)',
                  fontSize: 'clamp(14px, 1.4vw, 16px)',
                  lineHeight: 1.8,
                  marginBottom: '32px',
                  maxWidth: '420px',
                }}
              >
                {exp.summary}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag"
                    style={{ borderColor: `${exp.accentColor}22`, color: exp.accentColor }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = headerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal, .reveal-left').forEach((item, i) => {
            setTimeout(() => item.classList.add('visible'), i * 120)
          })
          observer.unobserve(el)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience">
      {/* Section header */}
      <div
        ref={headerRef}
        className="section-max"
        style={{ paddingTop: '120px', paddingBottom: '64px' }}
      >
        <span className="eyebrow reveal" style={{ marginBottom: '20px', display: 'inline-flex' }}>
          <span className="eyebrow-dot" style={{ background: 'var(--blue)' }} />
          Work
        </span>
        <h2
          className="reveal"
          style={{
            fontSize: 'clamp(36px, 6vw, 68px)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            lineHeight: 1.0,
            maxWidth: '640px',
          }}
        >
          What I have been
          <br />
          <span className="gradient-text">building and leading</span>
        </h2>
      </div>

      {/* Desktop: sticky scroll */}
      <div className="hidden md:block">
        <StickyScroll />
      </div>

      {/* Mobile: stacked cards */}
      <div
        className="md:hidden section-max"
        style={{ paddingBottom: '80px' }}
      >
        <MobileCards />
      </div>
    </section>
  )
}
