import './globals.css'
import { Inter } from 'next/font/google'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} grid min-h-screen grid-rows-[auto,1fr,auto]`}>
        <NavBar />
        <main className="max-w-full overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
