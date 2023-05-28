import './globals.css'
import { Inter } from 'next/font/google'
import clsx from 'clsx'

import { Nav, ScrollToTopButton } from '@/components'

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Jonathan Li',
  description: 'Personal website for Jonathan Li',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='smooth-scroll'> 
      <body className={clsx(`${inter.className} bg-slate-100 text-neutral-800 dark:bg-stone-800 dark:text-neutral-100`)}>
        <Nav />
        <ScrollToTopButton />
        {children}
      </body>
    </html>
  )
}
