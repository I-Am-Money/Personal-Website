'use client'
import { useEffect, useRef } from 'react'

const preHighSchool = [
  { course: 'Spanish 1', s1: 95, s2: 96 },
  { course: '9th Lit / Comp H', s1: 91, s2: 93 },
  { course: 'Algebra C&C H', s1: 96, s2: 99 },
  { course: 'Physical Science H', s1: 96, s2: 97 },
  { course: 'Spanish 2 H', s1: 98, s2: 99 },
  { course: 'Geometry H', s1: 94, s2: 93 },
]

const freshman = [
  { course: 'AP Government', s1: 93, s2: 94 },
  { course: 'AP Seminar', s1: 92, s2: 96 },
  { course: 'Biology H', s1: 92, s2: 93 },
  { course: 'Intro to Software', s1: 90, s2: 93 },
  { course: 'Intro to Engineering', s1: 90, s2: 93 },
  { course: 'Intro to Healthcare', s1: 90, s2: 93 },
  { course: 'Algebra 2 H', s1: 99, s2: 99 },
  { course: 'Spanish 3 H', s1: 95, s2: 98 },
]

const sophomore = [
  { course: 'AP World History', s1: 97 },
  { course: 'AP Precalculus', s1: 96 },
  { course: 'AP CSP', s1: 94 },
  { course: 'AP Lang', s1: 92 },
  { course: 'Intro to Cybersecurity', s1: 93 },
  { course: 'Chemistry H', s1: 99 },
  { course: 'Business Communications', s1: 97 },
]

function gradeColor(g: number) {
  if (g >= 97) return 'var(--teal)'
  if (g >= 93) return 'var(--blue)'
  return 'var(--indigo)'
}

function CourseRow({ course, s1, s2 }: { course: string; s1: number; s2?: number }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '9px 14px',
      borderRadius: '8px',
      background: 'rgba(255,255,255,0.02)',
      border: '1px solid var(--border)',
      gap: '12px',
      transition: 'background 0.15s ease, border-color 0.15s ease',
    }}
    onMouseEnter={(e) => {
      const t = e.currentTarget
      t.style.background = 'rgba(255,255,255,0.04)'
      t.style.borderColor = 'var(--border-hover)'
    }}
    onMouseLeave={(e) => {
      const t = e.currentTarget
      t.style.background = 'rgba(255,255,255,0.02)'
      t.style.borderColor = 'var(--border)'
    }}
    >
      <span style={{ color: 'var(--ash)', fontSize: '13px', fontWeight: 500, flex: 1 }}>{course}</span>
      <div style={{ display: 'flex', gap: '12px', flexShrink: 0 }}>
        <span style={{ fontSize: '13px', fontWeight: 700, color: gradeColor(s1), minWidth: '24px', textAlign: 'center' }}>{s1}</span>
        {s2 !== undefined && (
          <span style={{ fontSize: '13px', fontWeight: 700, color: gradeColor(s2), minWidth: '24px', textAlign: 'center' }}>{s2}</span>
        )}
      </div>
    </div>
  )
}

function CourseBlock({ title, courses, note }: { title: string; courses: { course: string; s1: number; s2?: number }[]; note?: string }) {
  return (
    <div className="card-shell reveal">
      <div className="card-inner" style={{ padding: '28px' }}>
        <div style={{ fontFamily: "'Archivo', sans-serif", fontSize: '15px', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: '6px' }}>
          {title}
        </div>
        {note && <div style={{ color: 'var(--muted)', fontSize: '11px', fontWeight: 600, marginBottom: '14px', letterSpacing: '0.04em' }}>{note}</div>}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          {courses.map((c) => <CourseRow key={c.course} {...c} />)}
        </div>
      </div>
    </div>
  )
}

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal, .reveal-left, .reveal-scale').forEach((item, i) => {
            setTimeout(() => item.classList.add('visible'), i * 110)
          })
          observer.unobserve(el)
        }
      },
      { threshold: 0.06 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="education" ref={sectionRef} style={{ padding: '140px 0', background: 'var(--bg)' }}>
      <div className="section-max">

        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
          <span className="eyebrow reveal" style={{ marginBottom: '20px', display: 'inline-flex' }}>
            <span className="eyebrow-dot" style={{ background: 'var(--indigo)' }} />
            Education
          </span>
          <h2
            className="reveal"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.0, marginBottom: '16px' }}
          >
            Innovation Academy
          </h2>
          <p className="reveal" style={{ color: 'var(--ash)', fontSize: '15px', marginBottom: '36px' }}>
            Alpharetta, GA &nbsp;&bull;&nbsp; Expected May 2028 &nbsp;&bull;&nbsp; Major: IT / Computer Science &nbsp;&bull;&nbsp; Minor: Cybersecurity
          </p>

          {/* Stat cards */}
          <div className="reveal" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {[
              { value: '4.6', label: 'GPA (unweighted)', color: 'var(--blue)' },
              { value: '14.5', label: 'credits earned', color: 'var(--teal)' },
              { value: 'Summa Cum Laude', label: 'academic honor', color: 'var(--indigo)' },
            ].map((s) => (
              <div key={s.label} className="card-shell" style={{ flex: '1', minWidth: '140px' }}>
                <div className="card-inner" style={{ padding: '20px 24px' }}>
                  <div style={{ fontFamily: "'Archivo', sans-serif", fontSize: 'clamp(20px, 2.5vw, 30px)', fontWeight: 900, letterSpacing: '-0.04em', color: s.color, marginBottom: '4px', lineHeight: 1 }}>
                    {s.value}
                  </div>
                  <div style={{ color: 'var(--muted)', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="reveal" style={{ color: 'var(--muted)', fontSize: '11px', marginTop: '12px', fontStyle: 'italic' }}>
            All grades shown are unweighted. Add 7 points to any Honors or AP course for the weighted equivalent.
          </p>
        </div>

        {/* Course grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px', marginBottom: '64px' }}>
          <CourseBlock title="Pre-high school" courses={preHighSchool} note="Sem 1 / Sem 2" />
          <CourseBlock title="Freshman year" courses={freshman} note="Sem 1 / Sem 2" />
          <CourseBlock title="Sophomore year, Sem 1" courses={sophomore} />
        </div>

        {/* Languages */}
        <div>
          <h3 className="reveal" style={{ fontFamily: "'Archivo', sans-serif", fontSize: '22px', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '20px' }}>
            Language skills
          </h3>
          <div className="reveal" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {[
              { lang: 'English', spoken: 'Advanced', written: 'Advanced', read: 'Advanced', color: 'var(--blue)' },
              { lang: 'Telugu', spoken: 'Intermediate', written: 'None', read: 'None', color: 'var(--indigo)' },
              { lang: 'Spanish', spoken: 'Novice', written: 'Intermediate', read: 'Intermediate', color: 'var(--teal)' },
            ].map((l) => (
              <div key={l.lang} className="card-shell" style={{ flex: '1', minWidth: '180px' }}>
                <div className="card-inner" style={{ padding: '20px 24px' }}>
                  <div style={{ fontFamily: "'Archivo', sans-serif", fontSize: '15px', fontWeight: 800, letterSpacing: '-0.02em', color: l.color, marginBottom: '14px' }}>{l.lang}</div>
                  {[['Spoken', l.spoken], ['Written', l.written], ['Read', l.read]].map(([label, val]) => (
                    <div key={label} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '7px', gap: '12px' }}>
                      <span style={{ color: 'var(--muted)', fontSize: '12px' }}>{label}</span>
                      <span style={{ color: val === 'None' ? 'var(--muted)' : 'var(--ash)', fontSize: '12px', fontWeight: 600 }}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
