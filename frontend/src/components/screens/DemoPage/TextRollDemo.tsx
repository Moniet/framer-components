import React, { useState } from 'react'
import DemoCard from './DemoCard'
import { TextRoll } from 'code-components/dist/components/TextRoll'
import { components } from '@/db/components'
import Center from './Center'
import { Flex, Slider } from 'theme-ui'

const TextRollDemo = () => {
  return (
    <DemoCard {...(components.TextRoll as any)}>
      <Center>
        <div sx={{ height: '50px', width: '200px' }}>
          <Center>
            <TextRoll
              text="Enter Any Text, Any It Will Roll, Like This"
              typography={{
                color: 'white',
                fontSize: 40,
                fontWeight: 600,
                font: 'inherit',
              }}
            />
          </Center>
        </div>
      </Center>
    </DemoCard>
  )
}

export default TextRollDemo
