import { useUser } from '@supabase/auth-helpers-react'
import useSWR from 'swr'

export const useComponents = () => {
  const endpoint = 'api/components'
  const { data, error, isLoading } = useSWR(endpoint, (url) => fetch(url).then((res) => res.json()))

  return {
    data,
    error,
    isLoading,
  }
}
