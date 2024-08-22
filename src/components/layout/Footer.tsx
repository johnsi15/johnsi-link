import { cn } from '@/lib/utils'

interface Props {
  className?: string
}

export function Footer({ className }: Props) {
  return (
    <footer className={cn('bg-gray-800 py-4 text-white', className)}>
      <div className='container mx-auto text-center'>
        <p>&copy; 2023 My Website. All rights reserved.</p>
      </div>
    </footer>
  )
}
