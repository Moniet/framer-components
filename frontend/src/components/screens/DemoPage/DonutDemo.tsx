import React, { useState } from 'react'
import DemoCard from './DemoCard'
import { Donut } from 'code-components/dist/components/Donut'
import { components } from '@/db/components'
import Center from './Center'
import { Flex, Slider } from 'theme-ui'

const DonutDemo = () => {
  const [progress, setProgress] = useState(75)

  return (
    <DemoCard {...(components.Donut as any)}>
      <Center>
        <Flex sx={{ flexDirection: 'column', gap: '2rem' }}>
          <div sx={{ size: '250px' }}>
            <Donut bgColor="rgba(255,255,255,0.1)" strokeColor="white" progress={progress} />
          </div>
          <Flex sx={{ gap: '0.5rem', flexDirection: 'column', alignItems: 'center' }}>
            <Slider
              min={0}
              max={100}
              onChange={(e) => {
                setProgress(Number(e.target.value))
              }}
            />
            <span sx={{ textAlign: 'center' }}>Progress {progress}%</span>
          </Flex>
        </Flex>
      </Center>
    </DemoCard>
  )
}

export default DonutDemo
