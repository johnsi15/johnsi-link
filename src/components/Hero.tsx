'use client'

import RetroGrid from '@/components/magicui/retro-grid'
import { TypographyH1, TypographyP } from '@/components/ui/typography'

export function Hero() {
  return (
    <div className='relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden'>
      <TypographyH1 className='max-w-[75ch] duration-500 animate-in fade-in-5 slide-in-from-bottom-2'>
        Create a short URL
      </TypographyH1>
      <TypographyP className='max-w-[75ch] text-center text-sm duration-700 animate-in fade-in-5 slide-in-from-top-2 md:text-base [&:not(:first-child)]:mt-6'>
        Johnsi.link is an open-source platform that empowers you to create,
        manage, and share short links effortlessly. It's fast, secure, and
        incredibly user-friendly, making it the perfect tool for streamlining
        your link management.
      </TypographyP>

      <RetroGrid />
    </div>
  )
}
