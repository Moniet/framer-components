import { components } from '@/db/components'
import DemoCard from './DemoCard'
import { Video } from 'code-components/dist/components/Video'
import Center from './Center'

const props = components['VideoWithThumbnail']

const VideoWithThumbnailDemo = () => {
  return (
    <DemoCard {...props}>
      <Center>
        <Video />
      </Center>
    </DemoCard>
  )
}

export default VideoWithThumbnailDemo
