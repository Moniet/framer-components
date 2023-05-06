import { ComponentType } from "react"

export const withClientSideOnly = (Component: ComponentType) => {
  return (props: any) => {
    if (!globalThis.window) return null
    return <Component {...props} />
  }
}
