import { useState, useEffect } from "react"

const useMediaQuery = (mediaQuery: string) => {
  const [mediaMatches, setMediaMatches] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia(mediaQuery)
    const handleMediaQueryChange = (ev) => {
      setMediaMatches(ev.matches)
    }

    try {
      mql.addEventListener("change", handleMediaQueryChange)
    } catch (error) {
      ;(mql as any).addListener("change", handleMediaQueryChange)
    }

    setMediaMatches(mql.matches)

    return () => {
      try {
        mql.removeEventListener("change", handleMediaQueryChange)
      } catch (error) {
        ;(mql as any).removeListener("change", handleMediaQueryChange)
      }
    }
  }, [mediaQuery])

  return mediaMatches
}

export default useMediaQuery
