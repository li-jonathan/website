import Image from 'next/image'

import { Hero } from '@/components'

export default function Home() {
  return (
    <main className="m-0">
      <Hero />
      <section id="section1" className='h-screen border-8 border-rose-400'>
        1
      </section>
      <section id="section2" className='h-screen border-8 border-blue-400'>
        2
      </section>
      <section id="section3" className='h-screen border-8 border-emerald-400'>
        3
      </section>
    </main>
  )
}
