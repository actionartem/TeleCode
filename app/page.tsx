import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { WhyUs } from '@/components/why-us'
import { InteractiveSelector } from '@/components/interactive-selector'
import { Cases } from '@/components/cases'
import { Process } from '@/components/process'
import { Packages } from '@/components/packages'
import { About } from '@/components/about'
import { FAQ } from '@/components/faq'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <InteractiveSelector />
        <Cases />
        <Process />
        <Packages />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
