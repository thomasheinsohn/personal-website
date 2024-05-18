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
          I am an experienced software developer with over four years of job
          expertise, specializing in backend development, mainly using Java,
          Spring Framework, and RESTful APIs. I am currently working on a large
          project for a major telecommunications company, where I use my Java
          skills to improve system functions and user experiences. I am good at
          solving problems, working with others, and making sure everyone in
          technical teams communicates well. I am also skilled in various
          architectural styles, including microservices, cloud services, and
          database management.
        </p>
      </Container>
    </section>
  )
}
