import React from 'react'
import DemoCard from './DemoCard'
import Center from './Center'
import { components } from '@/db/components'
import { ImageWithOverlay } from 'code-components/dist/components/ImageWithOverlay'

const props = components['ImageWithOverlay']

const ImageWithOverlayDemo = () => {
  return (
    <DemoCard {...props}>
      <Center>
        <ImageWithOverlay />
      </Center>
    </DemoCard>
  )
}

export default ImageWithOverlayDemo
