import { NextResponse } from 'next/server'

// Trigger this middleware to run on the `/secret-page` route
export const config = {
  matcher: '/secret-page',
}

export default function middleware(request: Request) {
  const url = new URL(request.url)
  url.pathname = '/login'

  return NextResponse.rewrite(url)
}
