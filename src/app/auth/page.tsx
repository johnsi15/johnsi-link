import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'

import { sharedAnimationCards } from '@/components/auth/AnimationCards'
import SocialLogin from '@/components/auth/SocialLogin'
// import Logo from '@/components/icons/logo'

const AuthLoginPage = () => {
  return (
    <Card className={cn('w-full max-w-sm', sharedAnimationCards)}>
      <CardHeader className='flex items-center justify-center text-center'>
        {/* <Logo className='mb-2 h-10 w-10' /> */}
        <CardTitle className='text-2xl font-medium duration-500 animate-in fade-in-20'>
          Log in to johnsi.link
        </CardTitle>
        <CardDescription className='duration-500 animate-in fade-in-30'>
          Log in with your favorite social provider to get started:
        </CardDescription>
      </CardHeader>
      <CardContent className='grid gap-4 duration-500 animate-in fade-in-30'>
        <SocialLogin />
      </CardContent>
    </Card>
  )
}

export default AuthLoginPage
