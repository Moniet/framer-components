import React from 'react'
import Center from './Center'
import { Count } from 'code-components/dist/components/Count/index'
import DemoCard from './DemoCard'
import { Button } from 'theme-ui'
import { components } from '@/db/components'

const { Count: CT } = components

const CountDemo = () => {
  return (
    <div>
      <DemoCard {...CT}>
        <Center>
          <Count
            from={0}
            to={100}
            duration={4}
            runOnEveryView
            typography={{
              color: '#fff',
            }}
          />
        </Center>
      </DemoCard>
    </div>
  )
}

export default CountDemo
