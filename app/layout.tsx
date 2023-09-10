import './globals.css'
import { Inter, Jost } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })
const jost = Inter({ subsets: ['latin'] })

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
      <body className={jost.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
