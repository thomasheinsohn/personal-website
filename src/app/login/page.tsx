'use client'
import { login } from '../../../lib'
import { GridPattern } from '@/components/GridPattern'
import { Container } from '@/components/Container'
import { Wrench } from 'lucide-react'
import { useFormState } from 'react-dom'
import { createForm } from '@/app/actions'

const initialState = {
  message: '',
}

export default async function Page() {
  const [state, formAction] = useFormState(createForm, initialState)

  return (
    <div className="relative flex h-screen flex-auto flex-col items-center justify-center">
      <div className="absolute inset-0 -z-10 text-slate-900/10 [mask-image:linear-gradient(transparent,white,transparent)]">
        <GridPattern x="50%" y="50%" patternTransform="translate(0 60)" />
      </div>
      <div className="absolute top-0 mx-auto flex flex-wrap items-center justify-center gap-2 lg:mt-5">
        <h1 className="text-center font-display text-3xl font-extrabold text-slate-900 sm:text-3xl">
          This website is currently under construction
        </h1>
        <Wrench />
      </div>
      <Container className="flex flex-col items-center py-16 text-center sm:py-20 lg:py-32">
        <h1 className="font-display text-5xl font-extrabold text-slate-900 sm:text-6xl">
          Login
        </h1>
        <section>
          <form action={formAction}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="m-6"
            />
            <br />
            <button
              type="submit"
              className="mt-3 text-base font-medium text-blue-950 hover:text-blue-950"
            >
              Login
              <span aria-hidden="true">&rarr;</span>
            </button>
          </form>
          {state?.message && (
            <p className="mt-4 text-lg tracking-tight text-red-600">
              {state?.message}
            </p>
          )}
        </section>
      </Container>
    </div>
  )
}