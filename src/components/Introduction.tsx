import { Container } from '@/components/Container'
import {
  Expandable,
  ExpandableButton,
  ExpandableItems,
} from '@/components/Expandable'
import { SectionHeading } from '@/components/SectionHeading'

const tableOfContents = {
  Frontend: {
    'React + NextJS': 1,
    'JavaScript + TypeScript': 20,
  },
  Backend: {
    'Java + Kotlin': 50,
    Spring: 78,
    'RESTful Web-Services': 78,
    'SQL + NoSQL': 78,
  },
  DevOps: {
    Docker: 82,
    Jenkins: 82,
    'ELK-Stack (Elasticsearch + Logstash + Kibana)': 82,
  },
  Management: {
    SCRUM: 82,
    'GitHub + Jira + Confluence + Bitbucket': 82,
  },
  Languages: {
    German: 82,
    English: 82,
  },
}

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-labelledby="table-of-contents-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="table-of-contents-title">
          Introduction
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Overview of the hard skills ...
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          some more explaining text tbd
        </p>
        <Expandable>
          <ol role="list" className="mt-16 space-y-10 sm:space-y-16">
            <ExpandableItems>
              {Object.entries(tableOfContents).map(([title, pages]) => (
                <li key={title}>
                  <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900">
                    {title}
                  </h3>
                  <ol
                    role="list"
                    className="mt-8 divide-y divide-slate-300/30 rounded-2xl bg-slate-50 px-6 py-3 text-base tracking-tight sm:px-8 sm:py-7"
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
        </Expandable>
      </Container>
    </section>
  )
}
// hier auf die skill eingehen, frontend, backend, devops, management zeug
