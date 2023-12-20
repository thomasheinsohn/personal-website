'use client'
import { useState, FormEvent } from 'react'
import { Container } from '@/components/Container'
import { GridPattern } from '@/components/GridPattern'
import bcrypt from 'bcryptjs'

export default function Login() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const correctHash =
    '$2a$10$BU6iBDlMUnKORfRZMEYvuePI/nbHLh7QGRtmuUaJicCy0c6pa4ne2'

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        setError('Error hashing password.')
        return
      }

      if (bcrypt.compareSync(password, correctHash)) {
        console.log('Login successful')
        setError('')
      } else {
        setError('Incorrect password. Please try again.')
      }
    })
  }

  return (
    <div className="relative flex flex-auto items-center">
      <div className="absolute inset-0 -z-10 text-slate-900/10 [mask-image:linear-gradient(transparent,white,transparent)]">
        <GridPattern x="50%" y="50%" patternTransform="translate(0 60)" />
      </div>
      <Container className="flex flex-col items-center py-16 text-center sm:py-20 lg:py-32">
        <h1 className="font-display text-5xl font-extrabold text-slate-900 sm:text-6xl">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
          <button
            type="submit"
            className="mt-6 text-base font-medium text-blue-600 hover:text-blue-800"
          >
            Login <span aria-hidden="true">&rarr;</span>
          </button>
        </form>
        {error && (
          <p className="mt-4 text-lg tracking-tight text-red-600">{error}</p>
        )}
      </Container>
    </div>
  )
}
