import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'

const resources = [
  {
    title: 'Master of Science (M.Sc.)',
    description: 'Nordakademie University of Business',
    subdescription:
      'Dual Applied Computer Science / Software Engineering from Nordakademie Graduate School, Hamburg (October 2020 - Present)',
  },
  {
    title: 'Bachelor of Science (B.Sc.)',
    description: 'University of Potsdam',
    subdescription:
      'Business Informatics from the University of Potsdam, Potsdam (October 2016 - October 2020)',
  },
  {
    title: 'Lead Software Developer (Title: Lead Consultant)',
    description: 'CGI Deutschland B.V. & Co. KG',
    subdescription: 'text',
  },
  {
    title: 'Software Developer (Title: Consultant)',
    description: 'CGI Deutschland B.V. & Co. KG',
    subdescription: 'text',
  },
  {
    title: 'Working Student (Title: Inhouse IT-Consulant)',
    description: 'proAlpha Business Solutions GmbH',
    subdescription: 'text',
  },
  {
    title: 'Educational Trip to China (October 2024)',
    description:
      'Educational trip with the university for two weeks of visiting companies and culture.',
    subdescription: 'text',
  },
  {
    title: 'Educational Trip to India (March 2023)',
    description:
      'Educational trip with the university for three weeks of visiting companies and culture.',
    subdescription: 'text',
  },
  {
    title: 'Private Frontend Project',
    description: 'Private Project',
    subdescription: `Developed website ${'www.google.com'}`,
  },
]

export function Vitae() {
  return (
    <section
      id="vitae"
      aria-labelledby="resources-title"
      className="mt-4 scroll-mt-14 py-8 sm:scroll-mt-24 sm:py-14 lg:py-14"
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
          className="-mx-3 grid grid-cols-1 gap-y-10  lg:text-center xl:-mx-12"
        >
          {resources.map((resource) => (
            <li
              key={resource.title}
              className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:gap-y-10 xl:px-12"
            >
              <div>
                <h3 className="text-lg font-bold tracking-tight text-blue-950">
                  {resource.title}
                </h3>
                <p className="mt-1 text-base text-slate-600">
                  {resource.description}
                </p>
                <p className="mt-2 text-base text-slate-800">
                  {resource.subdescription}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
