import { useEffect, useState } from 'react'
import Center from './Center'
import DemoCard from './DemoCard'
import { components } from '@/db/components'
import { GlobalCustomCursor } from 'code-components/dist/components/GlobalCustomCursor'

const { GlobalCustomCursor: CC } = components

let timeout: NodeJS.Timeout

const CustomGlobalCursorDemo = ({ setHideCursor }: { setHideCursor: (a: boolean) => void }) => {
  const [replaceCursor, setReplaceCursor] = useState(false)

  useEffect(() => {
    if (replaceCursor) {
      setTimeout(() => {
        setReplaceCursor(false)
        setHideCursor(false)
      }, 10000)
    }
  }, [replaceCursor]) // eslint-disable-line

  return (
    <DemoCard {...CC}>
      <div
        sx={{ size: '100%' }}
        onMouseEnter={() => {
          if (!replaceCursor) {
            setReplaceCursor(true)
            setHideCursor(true)
          }
        }}
      >
        <Center>
          <p>The global cursor will be replace for 10 seconds</p>
          {replaceCursor && <GlobalCustomCursor />}
        </Center>
      </div>
    </DemoCard>
  )
}

export default CustomGlobalCursorDemo
