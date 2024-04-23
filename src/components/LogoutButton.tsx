import { redirect } from 'next/navigation'
import { logout } from '../../lib'

export function LogoutButton() {
  return (
    <div>
      <form
        action={async () => {
          'use server'
          await logout()
          redirect('/')
        }}
      >
        <button
          type="submit"
          className="mt-3 text-base font-medium text-blue-600 hover:text-blue-950"
        >
          Logout
        </button>
      </form>
    </div>
  )
}
