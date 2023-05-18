import DemoCard from './DemoCard'
import { VideoPeek } from 'code-components/dist/components/VideoPeek'
import { components } from '@/db/components'
import Center from './Center'

const VideoPeekDemo = () => {
  return (
    <DemoCard {...(components.VideoPeek as any)}>
      <Center>
        <div sx={{ size: '300px' }}>
          <Center>
            <div sx={{ height: 'fit-content', fontWeight: '600', fontSize: '1.5rem' }}>
              <div sx={{ height: '50px' }}>
                <VideoPeek w={300} h={200} align="top" videoSrc="/image_skew.mp4" margin={10}>
                  <p>📷 Video 1 (hover over me)</p>
                </VideoPeek>
              </div>

              <div sx={{ height: '50px' }}>
                <VideoPeek w={300} h={200} align="top" videoSrc="/liquid_reveal.mp4" margin={10}>
                  <p>🎥 Video 2 (hover over me)</p>
                </VideoPeek>
              </div>
            </div>
          </Center>
        </div>
      </Center>
    </DemoCard>
  )
}

export default VideoPeekDemo
