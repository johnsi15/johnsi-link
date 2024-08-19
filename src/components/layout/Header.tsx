import { cn } from '@/lib/utils'
import Link from 'next/link'
import { GitHub } from '../icons/Logos'
import { LinkToExternal } from '../ui/LinkToExternal'
import { buttonVariants } from '../ui/button'
import { ToggleTheme } from '../ToggleTheme'

export function Header() {
  return (
    <nav
      className={cn(
        'flex w-full',
        'pb-3 pt-4 lg:px-4',
        'sticky top-0 z-50',
        'bg-white dark:bg-emerald-600',
        'rounded-none border-y bg-white p-4 shadow-sm dark:border-neutral-800',
      )}
    >
      <div
        className={cn('flex w-full items-center justify-between', 'container')}
      >
        <div className='flex items-center space-x-5'>
          <div className='flex items-center space-x-1 pr-1 md:pr-4'>
            <Link
              href='/'
              className='flex items-center space-x-3 transition-opacity hover:opacity-80 rtl:space-x-reverse'
            >
              {/* <Logo width={30} /> */}
              <span className='self-center whitespace-nowrap text-lg font-medium tracking-tight dark:text-white'>
                johnsi.link
              </span>
            </Link>
          </div>
        </div>
        <div className='flex items-center space-x-1'>
          <LinkToExternal
            href='https://github.com/johnsi15/johnsi-link'
            className={buttonVariants({
              variant: 'ghost',
              size: 'icon',
            })}
          >
            <GitHub width={20} name='GitHub Repository' />
          </LinkToExternal>

          <ToggleTheme />
          {/*
          <UserButton /> */}
        </div>
      </div>
    </nav>
  )
}
