import Image from 'next/image'
import Link from 'next/link'

import { GridPattern } from '@/components/GridPattern'
import { SectionHeading } from '@/components/SectionHeading'
import logoImage from '@/images/logo2.png'
import { Github, Linkedin, Mail } from 'lucide-react'

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="author-title"
      className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-4"
    >
      <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
        <GridPattern x="50%" y="100%" />
      </div>
      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
        <div className="bg-slate-50 pt-px sm:rounded-6xl">
          <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src={logoImage}
              alt=""
              sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem"
            />
          </div>
          <div className="lg:py-22 lg:px-18 md:py-22 px-4 py-10 sm:px-10 sm:py-16">
            <SectionHeading number="3" id="author-title">
              Contact
            </SectionHeading>
            <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-blue-950 sm:text-6xl">
              <span className="block text-blue-950"></span>
              Thomas Heinsohn
            </p>
            <p className="ml-1 mt-4 text-lg tracking-tight text-slate-700">
              Software Engineer and Consultant
            </p>
            <div className="ml-1 mt-4">
              <p>
                <Link
                  target="_blank"
                  href="https://github.com/thomasheinsohn"
                  className="inline-flex items-center text-base font-medium tracking-tight text-blue-950"
                >
                  <Github />
                  <span className="ml-3">Visit GitHub</span>
                </Link>
              </p>
              <p className="mt-3">
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/thomas-heinsohn-9873aa1a0/"
                  className="inline-flex items-center text-base font-medium tracking-tight text-blue-950"
                >
                  <Linkedin />
                  <span className="ml-3">Contact via LinkedIn</span>
                </Link>
              </p>

              <p className="mt-3">
                <Link
                  href="mailto:contact@thomasheinsohn.com"
                  className="inline-flex items-center text-base font-medium tracking-tight text-blue-950"
                >
                  <Mail />
                  <span className="ml-3">Contact via Mail</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
