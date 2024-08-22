import { db } from '@/server/db'

export const getTwoFactorConfirmationByUserId = async (userId: string) => {
  try {
    const twoFactorConfirmation = await db.twoFactorConfirmation.findUnique({
      where: { userId },
    })
    return twoFactorConfirmation
  } catch (error) {
    console.log('This is error two factor confirmation')
    return null
  }
}
