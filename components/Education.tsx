'use client'
import { useEffect, useRef } from 'react'

const preHighSchool = [
  { course: 'Spanish 1', s1: 95, s2: 96 },
  { course: '9th Lit/Comp H', s1: 91, s2: 93 },
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
  if (g >= 97) return '#00cc96'
  if (g >= 93) return '#4d8fff'
  return '#a78bfa'
}

function CourseRow({ course, s1, s2 }: { course: string; s1: number; s2?: number }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 16px',
        borderRadius: '8px',
        background: '#0e1018',
        border: '1px solid #1a1d2e',
        gap: '12px',
      }}
    >
      <span style={{ color: '#8896aa', fontSize: '13px', fontWeight: 500, flex: 1 }}>
        {course}
      </span>
      <div style={{ display: 'flex', gap: '10px', flexShrink: 0 }}>
        <span
          style={{
            fontSize: '13px',
            fontWeight: 700,
            color: gradeColor(s1),
            minWidth: '28px',
            textAlign: 'center',
          }}
        >
          {s1}
        </span>
        {s2 !== undefined && (
          <span
            style={{
              fontSize: '13px',
              fontWeight: 700,
              color: gradeColor(s2),
              minWidth: '28px',
              textAlign: 'center',
            }}
          >
            {s2}
          </span>
        )}
      </div>
    </div>
  )
}

function CourseBlock({
  title,
  courses,
  note,
}: {
  title: string
  courses: { course: string; s1: number; s2?: number }[]
  note?: string
}) {
  return (
    <div className="reveal">
      <h3
        style={{
          fontSize: '16px',
          fontWeight: 700,
          color: '#eef0ff',
          marginBottom: '16px',
          letterSpacing: '-0.01em',
        }}
      >
        {title}
      </h3>
      {note && (
        <p style={{ color: '#4a5568', fontSize: '12px', marginBottom: '12px' }}>{note}</p>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {courses.map((c) => (
          <CourseRow key={c.course} {...c} />
        ))}
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
          el.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((item, i) => {
            setTimeout(() => item.classList.add('visible'), i * 120)
          })
          observer.unobserve(el)
        }
      },
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="education"
      ref={sectionRef}
      style={{
        padding: '120px 24px',
        background: '#08090f',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
          <div className="section-label reveal" style={{ marginBottom: '16px' }}>
            Education
          </div>
          <h2
            className="reveal"
            style={{
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: '#eef0ff',
              lineHeight: 1.1,
              marginBottom: '24px',
            }}
          >
            Innovation Academy
          </h2>
          <p className="reveal" style={{ color: '#8896aa', fontSize: '16px', marginBottom: '32px' }}>
            Alpharetta, GA &middot; Expected graduation May 2028 &middot; Major: IT / Computer Science &middot; Minor: Cybersecurity
          </p>

          {/* Stats */}
          <div
            className="reveal"
            style={{
              display: 'flex',
              gap: '24px',
              flexWrap: 'wrap',
            }}
          >
            {[
              { label: 'GPA (unweighted)', value: '4.6' },
              { label: 'Credits earned', value: '14.5' },
              { label: 'Academic honor', value: 'Summa Cum Laude' },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  padding: '16px 24px',
                  background: '#0e1018',
                  border: '1px solid #1a1d2e',
                  borderRadius: '12px',
                  minWidth: '160px',
                }}
              >
                <div
                  style={{
                    fontSize: 'clamp(20px, 3vw, 28px)',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    color: '#4d8fff',
                    marginBottom: '4px',
                  }}
                >
                  {s.value}
                </div>
                <div style={{ color: '#4a5568', fontSize: '12px', fontWeight: 500 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <p className="reveal" style={{ color: '#4a5568', fontSize: '12px', marginTop: '16px' }}>
            All grades shown are unweighted. Add 7 points to any Honors or AP course for the weighted equivalent.
          </p>
        </div>

        {/* Course grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
          }}
        >
          <CourseBlock
            title="Pre-High School (transferred credits)"
            courses={preHighSchool}
            note="S1 / S2"
          />
          <CourseBlock
            title="Freshman Year"
            courses={freshman}
            note="S1 / S2"
          />
          <CourseBlock
            title="Sophomore Year (Semester 1)"
            courses={sophomore}
          />
        </div>

        {/* Languages */}
        <div className="reveal" style={{ marginTop: '64px' }}>
          <h3
            style={{
              fontSize: '20px',
              fontWeight: 700,
              color: '#eef0ff',
              marginBottom: '24px',
              letterSpacing: '-0.01em',
            }}
          >
            Language skills
          </h3>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {[
              { lang: 'English', spoken: 'Advanced', written: 'Advanced', read: 'Advanced', color: '#4d8fff' },
              { lang: 'Telugu', spoken: 'Intermediate', written: 'None', read: 'None', color: '#a78bfa' },
              { lang: 'Spanish', spoken: 'Novice', written: 'Intermediate', read: 'Intermediate', color: '#00cc96' },
            ].map((l) => (
              <div
                key={l.lang}
                style={{
                  padding: '20px 24px',
                  background: '#0e1018',
                  border: `1px solid ${l.color}25`,
                  borderRadius: '12px',
                  minWidth: '200px',
                }}
              >
                <div
                  style={{
                    fontSize: '16px',
                    fontWeight: 700,
                    color: l.color,
                    marginBottom: '12px',
                  }}
                >
                  {l.lang}
                </div>
                {[
                  { label: 'Spoken', val: l.spoken },
                  { label: 'Written', val: l.written },
                  { label: 'Read', val: l.read },
                ].map((row) => (
                  <div
                    key={row.label}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '6px',
                      gap: '16px',
                    }}
                  >
                    <span style={{ color: '#4a5568', fontSize: '12px' }}>{row.label}</span>
                    <span
                      style={{
                        color: row.val === 'None' ? '#4a5568' : '#8896aa',
                        fontSize: '12px',
                        fontWeight: 600,
                      }}
                    >
                      {row.val}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
