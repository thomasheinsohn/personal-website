import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Vitae } from '@/components/Vitae'
import { TableOfContents } from '@/components/TableOfContents'

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <NavBar />
      <TableOfContents />
      <Vitae />
      <Contact />
      <Footer />
    </>
  )
}
