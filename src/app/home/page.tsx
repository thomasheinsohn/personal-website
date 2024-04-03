import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Hint } from '@/components/Hint'
import { NavBar } from '@/components/NavBar'
import { Vitae } from '@/components/Vitae'
import { Introduction } from '@/components/Introduction'

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Hint /> */}
      <NavBar />
      <Introduction />
      <Vitae />
      <Contact />
      <Footer />
    </>
  )
}
