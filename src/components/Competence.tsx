import { Container } from '@/components/Container'
import {
  Expandable,
  ExpandableButton,
  ExpandableItems,
} from '@/components/Expandable'
import { SectionHeading } from '@/components/SectionHeading'

const tableOfContents = {
  Backend: {
    'Java + Kotlin': 4,
    Spring: 4,
    'RESTful Web-Services': 4,
    'SQL + NoSQL': 4,
  },
  Frontend: {
    'React + NextJS': 3,
    'JavaScript + TypeScript': 3,
  },
  DevOps: {
    Docker: 4,
    Jenkins: 3,
    'ELK-Stack (Elasticsearch + Logstash + Kibana)': 3,
  },
  Management: {
    Scrum: 4,
    'GitHub + Jira + Confluence + Bitbucket': 4,
  },
  Languages: {
    German: 4,
    English: 4,
  },
}

export function Competence() {
  return (
    <section
      id="competence"
      aria-labelledby="table-of-contents-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="table-of-contents-title">
          Competences
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Overview of the competences
        </p>
        {/* <p className="mt-4 text-lg tracking-tight text-slate-700">
          some more explaining text tbd
        </p> */}
        <Expandable>
          <ol role="list" className="mt-12 space-y-8 sm:space-y-12">
            <ExpandableItems>
              {Object.entries(tableOfContents).map(([title, pages]) => (
                <li key={title}>
                  <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900">
                    {title}
                  </h3>
                  <ol
                    role="list"
                    className="mt-4 divide-y divide-slate-300/30 rounded-2xl bg-slate-50 px-6 py-3 text-base tracking-tight sm:px-8 sm:py-4"
                  >
                    {Object.entries(pages).map(([title, pageNumber]) => (
                      <li
                        key={title}
                        className="flex justify-between py-3"
                        aria-label={`${title} on page ${pageNumber}`}
                      >
                        <span
                          className="font-medium text-slate-900"
                          aria-hidden="true"
                        >
                          {title}
                        </span>
                        <span
                          className="font-mono text-slate-400"
                          aria-hidden="true"
                        >
                          {pageNumber}
                        </span>
                      </li>
                    ))}
                  </ol>
                </li>
              ))}
            </ExpandableItems>
          </ol>
          <ExpandableButton>See more</ExpandableButton>
          <ol className=" mt-8 flex w-full flex-row items-center justify-end space-x-4">
            <li className="font-small text-base">1 - Low</li>
            <li className="font-small text-base">2 - Middle</li>
            <li className="font-small text-base">3 - High</li>
            <li className="font-small text-base">4 - Very High</li>
          </ol>
        </Expandable>
      </Container>
    </section>
  )
}
