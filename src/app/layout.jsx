"use client"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { RecoilRoot } from 'recoil'

import './globals.css'
import { Montserrat } from 'next/font/google'


const mont= Montserrat ({
   subsets: ['latin'], 
   weight: ['400']
  })

export const metadata = {
  title: 'Niggiwears',
  description: 'Look Good in spoortwears',
}

export default function RootLayout({ children }) {
  return (
    <RecoilRoot>

    <html lang="en">
      <body className={mont.className}>
        <Navbar />
        <main className={`${mont.className}`}>{children}
        </main>
        <Footer />
      </body>
    </html>
    </RecoilRoot>
  )
}
