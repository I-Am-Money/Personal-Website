import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import NextlineAI from '@/components/NextlineAI'
import Education from '@/components/Education'
import BookCall from '@/components/BookCall'
import Donations from '@/components/Donations'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Experience />
        <NextlineAI />
        <Education />
        <BookCall />
        <Donations />
      </main>
      <Footer />
    </>
  )
}
