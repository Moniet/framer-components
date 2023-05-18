import DemoCard from './DemoCard'
import { components } from '@/db/components'
import Center from './Center'
import { FlipOnScroll } from 'code-components/dist/components/FlipOnScroll2'

const FlipOnScrollDemo = () => {
  return (
    <DemoCard {...components.FilpOnScroll2}>
      <Center>
        <div sx={{ size: '250px' }}>
          <FlipOnScroll initialScale={1.2} rotate={60} offsetTop={-500}>
            <img src="./astronaut.png" sx={{ size: '250px' }} />
          </FlipOnScroll>
        </div>
      </Center>
    </DemoCard>
  )
}

export default FlipOnScrollDemo
