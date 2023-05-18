import DemoCard from './DemoCard'
import { components } from '@/db/components'
import Center from './Center'
import { ImageParallaxOnScroll } from 'code-components/dist/components/ImageParallaxOnScroll'

const ImageParallaxOnScrollDemo = () => {
  return (
    <DemoCard {...components.ImageParallaxOnScroll}>
      <Center>
        <div sx={{ size: '250px' }}>
          <ImageParallaxOnScroll
            offset={200}
            startAnimationFrom="screen-end"
            image={{
              src: './astronaut.png',
              alt: '',
            }}
          />
        </div>
      </Center>
    </DemoCard>
  )
}

export default ImageParallaxOnScrollDemo
