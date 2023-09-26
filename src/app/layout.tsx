import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Teleporter',
  description: 'Hello There! And who are YOU. Based on your curiosity, you are a developer...',
  manifest: "/manifest.json",
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        </body>
    </html>
  )
}
