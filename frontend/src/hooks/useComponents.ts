import { useUser } from '@supabase/auth-helpers-react'
import useSWR from 'swr'

export const useComponents = () => {
  const user = useUser()
  const endpoint = user ? 'api/components' : null
  const { data, error, isLoading } = useSWR(endpoint, (url) => fetch(url).then((res) => res.json()))

  return {
    data,
    error,
    isLoading,
  }
}
