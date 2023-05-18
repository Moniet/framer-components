import { useEffect, useState } from 'react'
import Center from './Center'
import DemoCard from './DemoCard'
import { components } from '@/db/components'

const { GlobalCustomCursor: CC } = components

let timeout: NodeJS.Timeout

const CustomGlobalCursorDemo = ({ setHideCursor }: { setHideCursor: (a: boolean) => void }) => {
  const [replaceCursor, setReplaceCursor] = useState(false)

  useEffect(() => {
    if (replaceCursor) {
      setHideCursor(true)
      const root = document.querySelector('html') as HTMLElement
      root.style.cursor = 'url("/galaxy-cursor.png"), default'
      timeout = setTimeout(() => {
        setReplaceCursor(false)
        root.style.setProperty('cursor', 'normal')
      }, 10000)
    } else {
      setHideCursor(false)
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
        const root = document.querySelector('html') as HTMLElement
        root.style.setProperty('cursor', 'normal')
        setHideCursor(false)
      }
    }
  }, [replaceCursor])

  return (
    <DemoCard {...CC}>
      <div
        sx={{ size: '100%' }}
        onMouseEnter={() => {
          setReplaceCursor(true)
        }}
      >
        <Center>
          <p>The global cursor will be replace for 10 seconds</p>
        </Center>
      </div>
    </DemoCard>
  )
}

export default CustomGlobalCursorDemo
