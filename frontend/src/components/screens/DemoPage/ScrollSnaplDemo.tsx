import DemoCard from './DemoCard'
import { components } from '@/db/components'
import Center from './Center'
import { ScrollSnap } from 'code-components/dist/components/ScrollSnap'
import ColorBox from './ColorBox'

const ScrollSnapDemo = () => {
  return (
    <DemoCard {...components.ScrollSnap}>
      <Center>
        <div sx={{ size: '250px', maxWidth: '250px', maxHeight: '250px', overflow: 'hidden' }}>
          <ScrollSnap>
            <ColorBox size={100}>
              <Center>Scroll This Way 👇</Center>
            </ColorBox>
            <ColorBox size={100} color="rgb(94, 32, 252)" />
            <ColorBox size={100} />
            <ColorBox size={100} color="rgb(94, 32, 252)" />
            <ColorBox size={100} />
            <ColorBox size={100} color="rgb(94, 32, 252)">
              <Center>Scroll This Way 👆</Center>
            </ColorBox>
          </ScrollSnap>
        </div>
      </Center>
    </DemoCard>
  )
}

export default ScrollSnapDemo
