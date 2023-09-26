import { ClerkProvider } from '@clerk/nextjs'
import {Toaster} from 'react-hot-toast'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Providers from '@/components/Providers'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChatPDF',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <Providers>
        <html lang="en">
          <head />

          <body className={inter.className}>
            {children}
            <div id="toast-container" className="fixed inset-0 flex flex-col items-end justify-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end z-50">
              <Toaster />
            </div>
          </body>         
        </html>
      </Providers>
    </ClerkProvider>
  )
}
