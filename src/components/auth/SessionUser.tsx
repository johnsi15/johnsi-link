import { buttonVariants } from '@/components/ui/button'
import { auth } from '@/auth'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Avatar from 'boring-avatars'
import UserMenu from '@/components/auth/UserMenu'
import { SignOut } from '@/components/auth/SignOut'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export async function SessionUser() {
  const session = await auth()

  if (!session?.user) {
    return (
      <Link
        href='/dashboard'
        className={buttonVariants({
          variant: 'outline',
          className: 'group',
        })}
      >
        <span>Get Started</span>
        <ArrowRight className='ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-[2px]' />
      </Link>
    )
  }

  if (session?.user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger
          name={session.user.name ?? 'User Menu'}
          className={buttonVariants({
            variant: 'ghost',
            size: 'icon',
          })}
        >
          {session.user.name && (
            <Avatar size={22} name={session.user.name} variant='beam' />
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56' align='end' forceMount>
          <DropdownMenuLabel className='font-normal'>
            <div className='flex flex-col space-y-1'>
              <p className='text-sm font-medium leading-none'>
                {session.user.name}
              </p>
              <p className='text-xs leading-none text-neutral-400'>
                {session.user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <UserMenu />
          <SignOut />
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
}
