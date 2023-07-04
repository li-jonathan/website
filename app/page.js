import { Hero, Jobs, Projects } from '@/components'

export default function Home() {
  return (
    <main className="m-0">
      <Hero />
      <section id="about" className='h-80 bg-emerald-700'>
        ABOUT
      </section>
      <Jobs />
      <Projects />
    </main>
  )
}
