import React, { useState } from 'react'
import DemoCard from './DemoCard'
import { Squircle } from 'code-components/dist/components/Squircle'
import { components } from '@/db/components'
import Center from './Center'
import { Flex, Slider } from 'theme-ui'

const SquircleDemo = () => {
  const [progress, setProgress] = useState(30)

  return (
    <DemoCard {...(components.Squircle as any)}>
      <Center>
        <Flex sx={{ flexDirection: 'column', gap: '2rem' }}>
          <div sx={{ size: '250px' }}>
            <Squircle curvature={progress / 100} />
          </div>
          <Flex sx={{ gap: '0.5rem', flexDirection: 'column', alignItems: 'center' }}>
            <Slider
              min={0}
              max={55}
              onChange={(e) => {
                setProgress(Number(e.target.value))
              }}
            />
            <span sx={{ textAlign: 'center' }}>Curve</span>
          </Flex>
        </Flex>
      </Center>
    </DemoCard>
  )
}

export default SquircleDemo
