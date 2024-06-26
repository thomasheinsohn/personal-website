import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import clsx from 'clsx'
import { Analytics } from '@vercel/analytics/react'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title:
    'Thomas Heinsohn Software Engineer | Developer Expert in Java, Kotlin & Microservices Berlin',
  description:
    'Experienced Software Developer in Berlin, specializing in backend technologies including Java, Kotlin, and Spring. Proficient in developing robust microservices, enhancing legacy monolith applications, and implementing efficient CI/CD pipelines using Jenkins, Docker, and Kubernetes. Active participant in Agile Scrum teams, delivering solutions for the telecommunications sector.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
      )}
    >
      <head>
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,500,700&display=swap"
        />
      </head>
      <body className="flex min-h-full flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
