import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import NextlineAI from '@/components/NextlineAI'
import Work from '@/components/Work'
import Community from '@/components/Community'
import Projects from '@/components/Projects'
import Mission from '@/components/Mission'
import Interests from '@/components/Interests'
import BookCall from '@/components/BookCall'
import Donations from '@/components/Donations'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="top">
        <Hero />
        <NextlineAI />
        <Work />
        <Community />
        <Projects />
        <Mission />
        <Interests />
        <BookCall />
        <Donations />
      </main>
      <Footer />
    </>
  )
}
