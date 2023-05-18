import React from 'react'
import Center from './Center'
import { CopyText } from 'code-components/dist/components/CopyText/index'
import DemoCard from './DemoCard'
import { Button } from 'theme-ui'
import { components } from '@/db/components'

const { CopyText: CT } = components

const CopyTextDemo = () => {
  return (
    <div>
      <DemoCard {...CT}>
        <Center>
          <CopyText text="Example test for framerlib">
            <Button
              bg="text"
              color="background"
              sx={{
                cursor: 'pointer',
                transition: 'transform 0.2s ease',
                '&:active': {
                  transform: `scale(0.95)`,
                },
              }}
            >
              Click to copy
            </Button>
          </CopyText>
        </Center>
      </DemoCard>
    </div>
  )
}

export default CopyTextDemo
