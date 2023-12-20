import { NextResponse } from 'next/server'

// Trigger this middleware to run on all routes
export const config = {
  matcher: '/*', // Apply middleware to all routes
}

export default function middleware(request: Request) {
  const url = new URL(request.url)
  url.pathname = '/login'

  return NextResponse.rewrite(url)
}
