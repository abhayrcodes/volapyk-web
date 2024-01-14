import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/next"
import Providers from '@/components/Providers'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Volapyk AI - Personalized Privacy',
  description: 'Volapyk is an application that allows users to see how services align with their personalized privacy preferences. We utilize AI to automatically process terms of service and privacy policies, providing easy to understand scores and relevant information.',
  icons: {
    icon: '/images/favicon.ico',
  },
  openGraph: {
    title: 'Volapyk AI - Personalized Privacy',
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
          <div className='text-red-200 bg-red-500/75 text-center p-3 border-red-300 border-2 border-t-0 rounded-b-lg'>
          🚩 Due to beta-phase status, methods used to calculate total and category scores are not completely accurate and are heavily subject to change later on.
          </div>
          <Navbar/>
          {children}
        </Providers>
      </body>
    </html>
  )
}
