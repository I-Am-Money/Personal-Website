export function ImageSlot({
  label,
  aspect = '16/9',
  height,
}: {
  label: string
  aspect?: string
  height?: string
}) {
  return (
    <div
      style={{
        aspectRatio: height ? undefined : aspect,
        height: height ?? undefined,
        background: 'linear-gradient(135deg, var(--surface) 0%, var(--surface-2) 100%)',
        border: '1px dashed rgba(255,255,255,0.10)',
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
          pointerEvents: 'none',
        }}
      />
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      <span
        style={{
          color: 'rgba(255,255,255,0.18)',
          fontSize: '10px',
          fontWeight: 700,
          letterSpacing: '0.10em',
          textTransform: 'uppercase',
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          padding: '0 12px',
        }}
      >
        {label}
      </span>
    </div>
  )
}
