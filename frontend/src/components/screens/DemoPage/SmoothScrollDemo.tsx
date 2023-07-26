import { components } from '@/db/components'
import DemoCard from './DemoCard'

import Center from './Center'
import { Button, Flex, Text } from 'theme-ui'
import { SmoothScroll } from 'code-components/dist/components/SmoothScroll'
import { useState } from 'react'
import { Count } from 'code-components/dist/components/Count'

const props = components['SmoothScroll']

const SmoothScrollDemo = () => {
  const [isActivated, setIsActivated] = useState(false)
  const [count, setCount] = useState(10)
  const handleStart = () => {
    if (!isActivated) {
      setIsActivated(true)
      let c = 10
      let interval = setInterval(() => {
        setCount(c - 1)
        c = c - 1
      }, 1000)
      setTimeout(() => {
        setIsActivated(false)
        clearInterval(interval)
      }, 10000)
    }
  }

  return (
    <DemoCard {...props}>
      <Center>
        <Flex sx={{ gap: 2, mt: 2, flexDirection: 'column', alignItems: 'center' }}>
          <Button onClick={() => handleStart()}>
            Click to activate &quot;Smooth Scroll&quot; (10 seconds)
          </Button>
          {isActivated && <Text color="text">Count down started ({count})</Text>}
          {isActivated && <SmoothScroll duration={0.8} rootSelector="#__next" />}
        </Flex>
      </Center>
    </DemoCard>
  )
}

export default SmoothScrollDemo
