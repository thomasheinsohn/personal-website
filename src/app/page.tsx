import { redirect } from 'next/navigation'
import { login, logout } from '../../lib'

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
    <section>
      <form action={createForm}>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="m-6"
        />
        <br />
        <button type="submit" className="m-6">
          Login
        </button>
      </form>
      <form
        action={async () => {
          'use server'
          await logout()
          redirect('/')
        }}
      >
        <button type="submit" className="m-6">
          Logout
        </button>
      </form>
    </section>
  )
}
