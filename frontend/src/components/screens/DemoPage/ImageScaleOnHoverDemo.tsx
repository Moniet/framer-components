import DemoCard from './DemoCard'
import { components } from '@/db/components'
import Center from './Center'
import { ScaleImage } from 'code-components/dist/components/ScaleImage'

const ImageScaleOnHoverDemo = () => {
  return (
    <DemoCard {...components.ImageScaleOnHover}>
      <Center>
        <div sx={{ size: '250px', overflow: 'hidden' }}>
          <ScaleImage
            image={{
              src: './dog-in-space.png',
            }}
          />
        </div>
      </Center>
    </DemoCard>
  )
}

export default ImageScaleOnHoverDemo
