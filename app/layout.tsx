import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/next"
import Providers from '@/components/Providers'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Volapyk - Personalized Privacy',
  description: 'Volapyk is an application that allows users to see how services align with their personalized privacy preferences. We utilize AI to automatically process terms of service and privacy policies, providing easy to understand scores and relevant information.',
  icons: {
    icon: '/images/favicon.ico',
  },
  openGraph: {
    title: 'Volapyk - Personalized Privacy',
    images: ['/images/open-graph.jpg'],
    url: 'https://volapyk.dev'
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
          <Navbar/>
          {children}
        </Providers>
      </body>
    </html>
  )
}
