import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import Providers from '@/components/Providers'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Volapyk - Personalized Privacy',
  description: 'Volapyk is an application that allows users to see how services align with their personalized privacy preferences. We utilize AI to automatically process terms of service and privacy policies, providing easy to understand scores and relevant information.',
  openGraph: {
    title: 'Volapyk - Personalized Privacy',
    images: ['/images/open-graph.jpg'],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/images/favicon.ico'/>
      </head>
      <body className="bg-slate-900">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
