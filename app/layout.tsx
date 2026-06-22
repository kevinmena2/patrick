import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Patrick Bellis',
  description: 'Senior Software Engineer at Airbnb, ex-Google. Building products used by millions of travelers and hosts worldwide. Based in Somerville, MA.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
