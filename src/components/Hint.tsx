import { Container } from '@/components/Container'

export function Hint() {
  return (
    <section
      id="hint"
      aria-label="hint"
      className="pb-8 pt-10 sm:pb-10 md:pt-10 lg:py-8"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-3xl font-semibold tracking-tight text-slate-900">
          I am an experienced software developer located in Berlin with four
          years of expertise, specializing in Java backend development,
          primarily using Java, Spring, SQL and RESTful APIs. I am currently
          working on a large project for a major telecommunications company,
          where I leverage my Java skills to develop features and endpoints and
          enhance user experiences.
        </p>
      </Container>
    </section>
  )
}
