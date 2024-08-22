import { Hero } from '@/components/Hero'

export default async function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center text-white dark:bg-neutral-900'>
      <div className='container flex flex-col items-center justify-center gap-12 px-4 py-16'>
        <Hero />
      </div>
    </main>
  )
}
