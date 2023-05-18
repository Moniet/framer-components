import DemoCard from './DemoCard'
import { components } from '@/db/components'
import Center from './Center'
import { ImageScaleOnScroll } from 'code-components/dist/components/ImageScaleOnScroll'

const ImageScaleOnScrollDemo = () => {
  return (
    <DemoCard {...components.ImageScaleOnScroll}>
      <Center>
        <div
          sx={{
            size: '250px',
            overflow: 'hidden',
            border: 'solid 1px',
            borderColor: 'rgba(255,255,255,0.2)',
            borderRadius: '10px',
          }}
        >
          <ImageScaleOnScroll
            scale={1.5}
            image={{
              src: './space-dog-2.png',
            }}
          />
        </div>
      </Center>
    </DemoCard>
  )
}

export default ImageScaleOnScrollDemo
