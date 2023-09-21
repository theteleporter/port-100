import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Teleporter',
  description: 'Hey, Im The Teleporter. This is my portfolio incase you wanna hire me. Haha!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
