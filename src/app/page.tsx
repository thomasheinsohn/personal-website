import { redirect } from 'next/navigation'
import { login, logout } from '../../lib'
import { GridPattern } from '@/components/GridPattern'
import { Container } from '@/components/Container'

export default async function Page() {
  async function createForm(formData: FormData) {
    'use server'
    const password = formData.get('password')

    if (typeof password === 'string') {
      await login(password)
    } else {
      throw new Error('Password is required and must be a string.')
      // add error state here for wrong password
    }
  }

  return (
    <div className="relative flex flex-auto items-center">
      <div className="absolute inset-0 -z-10 text-slate-900/10 [mask-image:linear-gradient(transparent,white,transparent)]">
        <GridPattern x="50%" y="50%" patternTransform="translate(0 60)" />
      </div>
      <Container className="flex flex-col items-center py-16 text-center sm:py-20 lg:py-32">
        <h1 className="mb-7 font-display text-3xl font-extrabold text-slate-900 sm:text-3xl">
          This website is currently under construction ...
        </h1>
        <h1 className="font-display text-5xl font-extrabold text-slate-900 sm:text-6xl">
          Login
        </h1>
        <section>
          <form action={createForm}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="m-6"
            />
            <br />
            <button
              type="submit"
              className="mt-6 text-base font-medium text-blue-600 hover:text-blue-800"
            >
              Login <span aria-hidden="true">&rarr;</span>
            </button>
          </form>
        </section>
      </Container>
    </div>
  )
}
