import DemoCard from './DemoCard'
import { components } from '@/db/components'
import Center from './Center'
import { FlipOnScroll } from 'code-components/dist/components/FlipOnScroll'

const FlipOnScrollDemo = () => {
  return (
    <DemoCard {...components.FilpOnScroll}>
      <Center>
        <div sx={{ size: '250px' }}>
          <FlipOnScroll offsetTop={500} offsetBottom={0} rotateX={60}>
            <img src="./astronaut.png" sx={{ size: '250px' }} />
          </FlipOnScroll>
        </div>
      </Center>
    </DemoCard>
  )
}

export default FlipOnScrollDemo
