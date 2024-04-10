import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { GridPattern } from './GridPattern'
import { BriefcaseBusiness, GraduationCap, PlaneTakeoff } from 'lucide-react'

const resources = [
  {
    title: 'Master of Science (M.Sc.)',
    description:
      'Applied Computer Science / Software Engineering from Nordakademie Graduate School, Hamburg (October 2020 - Present)',
    image: function FigmaImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-blue-600 text-white/10">
          <GridPattern x="100%" y="100%" patternTransform="translate(112 64)" />
          <GraduationCap className="size-32 text-black" strokeWidth={1} />
        </div>
      )
    },
  },
  {
    title: 'Bachelor of Science (B.Sc.)',
    description:
      'Business Informatics from the University of Potsdam, Potsdam (October 2016 - October 2020)',
    image: function VideoPlayerImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-blue-600 text-white/10">
          <GridPattern x="100%" y="100%" patternTransform="translate(112 64)" />
          <GraduationCap className="size-32 text-black" strokeWidth={1} />
        </div>
      )
    },
  },
  {
    title: 'Educational Trip to China (October 2024)',
    description:
      'Educational trip with the university for two weeks of visiting companies and culture.',
    image: function VideoPlayerImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-blue-500 text-white/10">
          <GridPattern x="100%" y="100%" patternTransform="translate(112 64)" />
          <PlaneTakeoff className="size-24 text-black" strokeWidth={1} />
        </div>
      )
    },
  },
  {
    title: 'Educational Trip to India (March 2023)',
    description:
      'Educational trip with the university for three weeks of visiting companies and culture.',
    image: function VideoPlayerImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-blue-500 text-white/10">
          <GridPattern x="100%" y="100%" patternTransform="translate(112 64)" />
          <PlaneTakeoff className="size-24 text-black" strokeWidth={1} />
        </div>
      )
    },
  },
  {
    title: 'Work',
    description: 'Information will follow ...',
    image: function VideoPlayerImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-blue-400 text-white/10">
          <GridPattern x="100%" y="100%" patternTransform="translate(112 64)" />
          <BriefcaseBusiness className="size-24 text-black" strokeWidth={1} />
        </div>
      )
    },
  },
  {
    title: 'Work 2',
    description: 'Information will follow ...',
    image: function VideoPlayerImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-blue-400 text-white/10">
          <GridPattern x="100%" y="100%" patternTransform="translate(112 64)" />
          <BriefcaseBusiness className="size-24 text-black" strokeWidth={1} />
        </div>
      )
    },
  },
]

export function Vitae() {
  return (
    <section
      id="vitae"
      aria-labelledby="resources-title"
      className="scroll-mt-14 py-14 sm:scroll-mt-24 sm:py-14 lg:py-14"
    >
      <Container>
        <SectionHeading number="2" id="resources-title">
          Curriculum Vitae
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Overview of practical experience and academic experience
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Design assets, icon teardowns, and a community of fellow icon
          designers where you can ask questions, get feedback, and accelerate
          your learning.
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:text-center xl:-mx-12"
        >
          {resources.map((resource) => (
            <li
              key={resource.title}
              className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
            >
              <div className="relative h-28 overflow-hidden rounded-2xl shadow-lg sm:h-28 lg:h-28">
                <resource.image />
              </div>
              <div>
                <h3 className="text-base font-medium tracking-tight text-slate-900">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {resource.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
// list of the companies I worked in? and my current positions
