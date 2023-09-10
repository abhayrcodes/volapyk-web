import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import Providers from '@/components/Providers'

export const metadata = {
  title: 'Volapyk',
  description: 'Volapyk',
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
