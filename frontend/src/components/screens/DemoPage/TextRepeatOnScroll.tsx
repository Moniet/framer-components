import React, { useState } from 'react'
import DemoCard from './DemoCard'
import { TextRepeatOnScroll } from 'code-components/dist/components/TextRepeatOnScroll'
import { components } from '@/db/components'
import Center from './Center'
import { Flex, Slider } from 'theme-ui'

const TextRepeatOnScrollDemo = () => {
  return (
    <DemoCard {...(components.TextRepeatOnScroll as any)}>
      <Center>
        <div sx={{ height: '100px' }}>
          <TextRepeatOnScroll
            text="ruh-repeat"
            backgroundColor="#0b0b0f"
            typography={{
              fontSize: 40,
              color: 'deepskyblue',
            }}
          />
        </div>
      </Center>
    </DemoCard>
  )
}

export default TextRepeatOnScrollDemo
