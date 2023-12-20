import { Container } from '@/components/Container'

export function Hint() {
  return (
    <section
      id="hint"
      aria-label="hint"
      className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Software developer living in Berlin...
        </p>
      </Container>
    </section>
  )
}
