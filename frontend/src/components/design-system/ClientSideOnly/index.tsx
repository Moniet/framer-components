import { useMountedState } from "react-use"

const ClientSideOnly = ({ children }: any) => {
  const mounted = useMountedState()

  if (!mounted) return null

  return <>{children}</>
}

export default ClientSideOnly
