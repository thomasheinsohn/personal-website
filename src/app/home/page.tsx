import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Hint } from '@/components/Hint'
import { NavBar } from '@/components/NavBar'
import { Vitae } from '@/components/Vitae'
import { Competence } from '@/components/Competence'
import { checkSession, logout } from '../../../lib'
import { redirect } from 'next/navigation'

export default async function Home() {
  await checkSession()

  return (
    <>
      <Hero />
      {/* <Hint /> */}
      {/* <NavBar /> */}
      {/* <Competence /> */}
      {/* <Vitae /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </>
  )
}
