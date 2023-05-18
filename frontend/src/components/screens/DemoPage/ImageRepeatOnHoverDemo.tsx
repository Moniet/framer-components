import DemoCard from './DemoCard'
import { components } from '@/db/components'
import Center from './Center'
import { ImageRepeatOnHover } from 'code-components/dist/components/ImageRepeatOnHover'

const ImageRepeatOnHoverDemo = () => {
  return (
    <DemoCard {...components.ImageRepeatOnHover}>
      <Center>
        <div sx={{ size: '250px', overflow: 'hidden' }}>
          <ImageRepeatOnHover />
        </div>
      </Center>
    </DemoCard>
  )
}

export default ImageRepeatOnHoverDemo
