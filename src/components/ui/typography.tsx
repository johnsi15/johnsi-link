import { cn } from '@/lib/utils'
import { type ReactNode } from 'react'

interface Props {
  className?: string
  children: ReactNode
}

export function TypographyH1({ className, children }: Props) {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
        className,
      )}
    >
      {children}
    </h1>
  )
}

export function TypographyH2({ className, children }: Props) {
  return (
    <h2
      className={cn(
        'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
        className,
      )}
    >
      {children}
    </h2>
  )
}

export function TypographyP({ className, children }: Props) {
  return (
    <p
      className={cn(
        'text-pretty leading-7 [&:not(:first-child)]:mt-4',
        className,
      )}
    >
      {children}
    </p>
  )
}
