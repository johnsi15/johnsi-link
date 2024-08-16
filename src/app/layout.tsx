import '@/styles/globals.css'

import { GeistMono } from 'geist/font/mono'
import localFont from 'next/font/local'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { cn } from '@/lib/utils'

import { type Metadata } from 'next'

const interVariable = localFont({
  variable: '--font-sans',
  src: '../fonts/InterVariable.woff2',
  weight: '200 700',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: 'johnsi.link - A beautifully URL shortener',
    template: '%s - johnsi.link',
  },
  description: 'An URL shortener built with a lot of love ❤️',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn(
        `font-sans ${interVariable.variable} ${GeistMono.variable} min-h-screen antialiased`,
      )}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
