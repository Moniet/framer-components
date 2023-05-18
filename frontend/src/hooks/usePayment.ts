import { useUser } from '@supabase/auth-helpers-react'
import { useComponents } from './useComponents'
import { useRouter } from 'next/router'

export const usePayment = () => {
  const { data, isLoading } = useComponents()
  const hasPaid = !!data?.data
  const router = useRouter()
  const user = useUser()

  const handleRedirect = () => {
    if (isLoading) return null
    if (!hasPaid && user) return router.push('/purchase')
    if (hasPaid) return router.push('/demo')
    router.push('/sign-in?payment=true')
  }

  return [hasPaid, isLoading, handleRedirect] as const
}
