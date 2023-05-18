import DemoCard from './DemoCard'
import { VideoPeek } from 'code-components/dist/components/VideoPeek'
import { components } from '@/db/components'
import Center from './Center'

const VideoPeekDemo = () => {
  return (
    <DemoCard {...(components.VideoPeek as any)}>
      <Center>
        <div sx={{ size: '200px' }}>
          <Center>
            <div sx={{ height: 'fit-content' }}>
              <VideoPeek align="top" videoSrc="/image_skew.mp4" margin={20}>
                <p>Example-1 (hover over me)</p>
              </VideoPeek>
              <VideoPeek align="top" videoSrc="/liquid_reveal.mp4" margin={20}>
                <p>Example-2 (hover over me)</p>
              </VideoPeek>
            </div>
          </Center>
        </div>
      </Center>
    </DemoCard>
  )
}

export default VideoPeekDemo
