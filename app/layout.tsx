import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sahas Konreddy',
  description:
    'Student, COO of Hands of Hope, and founder of NextLine AI. Based in Alpharetta, GA.',
  keywords: ['Sahas Konreddy', 'NextLine AI', 'Hands of Hope', 'Innovation Academy'],
  openGraph: {
    title: 'Sahas Konreddy',
    description: 'Student, operator, and builder. Alpharetta, GA.',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Archivo (headings) + Space Grotesk (body) — Minimalist Portfolio pairing */}
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
