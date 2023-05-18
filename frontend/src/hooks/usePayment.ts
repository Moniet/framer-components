import { useComponents } from './useComponents'
import { useRouter } from 'next/router'

export const usePayment = () => {
  const { data, isLoading } = useComponents()
  const hasPaid = !!data
  const router = useRouter()

  const handleRedirect = () => {
    if (hasPaid) return router.push('/demo')
    router.push('/sign-in?payment=true')
  }

  return [hasPaid, isLoading, handleRedirect] as const
}
