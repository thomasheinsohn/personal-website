import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'

const resources = [
  {
    title:
      'Master of Science (M.Sc.) Applied Computer Science / Software Engineering',
    description: 'Nordakademie University of Business, Hamburg (2020 - 2024)',
    subdescription: [
      'Dual Master’s Program in Applied Computer Science, while simultaneously working as a software developer',
      'Specialization in Software Engineering with focused on the selection and design of complex software architectures',
      'Relevant Coursework: Requirements Engineering, Complex Software Architectures, Operation of Software Systems, Secure and Reliable Systems, System Modeling, Distributed Systems, Data Analytics, and IT Law',
      'Master’s Thesis (Written in English): Fine-tuned and deployed an open-source large language model (Llama2) in a production environment, and comparing it to ChatGPT',
      'Achieved a final grade of 2.0',
    ],
  },
  {
    title: 'Bachelor of Science (B.Sc.) Business Informatics',
    description: 'University of Potsdam, Potsdam (2016 - 2020)',
    subdescription: [
      'Relevant Coursework: Programming, Software Engineering, Databases & Information Systems, Business Administration, Accounting, Statistics, and Mathematics',
      'Bachelor’s Thesis: Creating a Return on Investment Analysis for Industry 4.0',
    ],
  },
  {
    title: 'Lead Software Developer (Title: Lead Consultant)',
    description: 'CGI Deutschland B.V. & Co. KG, Berlin (since 2024)',
    subdescription: [
      'Development of new microservices and the splitting of a monolith into microservices',
      'Deployment pipelines with Jenkins, Docker, Kubernetes and partly use of OpenShift',
      'Agile development team (Scrum) in a project with client from telecommunications industry',
      'Engineer and develop backend applications utilizing Java, Kotlin, Spring, and SQL',
    ],
  },
  {
    title: 'Software Developer (Title: Consultant)',
    description: 'CGI Deutschland B.V. & Co. KG, Berlin (2020 - 2024)',
    subdescription: [
      'Java backend developer building microservices in an agile environment',
      'Dual Master’s Program in cooperation with Nordakademie University',
    ],
  },
  {
    title: 'Working Student (Title: Inhouse IT-Consulant)',
    description: 'proAlpha Business Solutions GmbH, Berlin (2020)',
    subdescription: [
      'Actively participated in the implementation of a new project management tool',
      'Supported the goLive team in daily operations, and managed the migration, verification, and documentation of project data',
    ],
  },
  {
    title: 'Planned Educational Trip to China (2024)',
    description: 'China (2024)',
    subdescription: ['14 days of Academic Program and Cultural Exposure'],
  },
  {
    title: 'Developing the online presence of a sports psychologist',
    description: 'Private Project',
    subdescription: [
      'Developed a website with React, NextJS, TypeScript considering SEO, Google Ranking and GMaps',
      'Managed hosting, domain registration, and continuous deployment using GitHub Actions, NameCheap and Vercel',
      'Visit the website at https://movementpsychology.de',
    ],
  },
  {
    title: 'Educational Trip to India',
    description: 'India (2023)',
    subdescription: [
      'Academic Program: Engaged in company visits and lectures for firsthand insights into local enterprises',
      'Cultural Exposure and Social Interaction: Interacted with locals to enhance cross-cultural communication skills',
    ],
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
          Overview of professional experience and education
        </p>
        {/* <p className="mt-4 text-lg tracking-tight text-slate-700">
          Design assets, icon teardowns, and a community of fellow icon
          designers where you can ask questions, get feedback, and accelerate
          your learning.
        </p> */}
      </Container>
      <Container size="sm" className="mt-10">
        <ol role="list" className="-mx-3 grid grid-cols-1 gap-y-10 xl:-mx-12">
          {resources.map((resource) => (
            <li
              key={resource.title}
              className="grid auto-rows-min grid-cols-1 items-start gap-10 px-3 sm:gap-y-12 xl:px-14"
            >
              <div>
                <h3 className="text-lg font-bold tracking-tight text-blue-950">
                  {resource.title}
                </h3>
                <p className="mt-1 text-base text-slate-600">
                  {resource.description}
                </p>
                <div className="mt-1 text-base text-slate-800">
                  <ol className="list-inside list-disc">
                    {resource.subdescription.map((elements, index) => (
                      <li className="my-2" key={index}>
                        {elements}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
