import DemoCard from './DemoCard'
import { components } from '@/db/components'
import Center from './Center'
import { HorizontalScroll } from 'code-components/dist/components/HorizontalScroll'
import ColorBox from './ColorBox'

const HorizontalScrollDemo = () => {
  return (
    <DemoCard {...components.HorizontalScroll}>
      <Center>
        <div sx={{ size: '250px', maxWidth: '250px', maxHeight: '250px', overflow: 'hidden' }}>
          <HorizontalScroll>
            <ColorBox size={100}>
              <Center>Scroll This Way 👉</Center>
            </ColorBox>
            <ColorBox size={100} color="rgb(94, 32, 252)" />
            <ColorBox size={100} />
            <ColorBox size={100} color="rgb(94, 32, 252)" />
            <ColorBox size={100} />
            <ColorBox size={100} color="rgb(94, 32, 252)">
              <Center>Scroll This Way 👈</Center>
            </ColorBox>
          </HorizontalScroll>
        </div>
      </Center>
    </DemoCard>
  )
}

export default HorizontalScrollDemo
