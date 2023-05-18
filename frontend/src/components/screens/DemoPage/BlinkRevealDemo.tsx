import { BlinkReveal } from 'code-components/dist/components/BlinkReveal/index'
import DemoCard from './DemoCard'
import Center from './Center'
import { components } from '@/db/components'
import { useRedo } from './useRedo'

const BlinkRevealDemo = () => {
  const [count, Redo] = useRedo()

  return (
    <DemoCard {...components.BlinkReveal}>
      <Center>
        <BlinkReveal key={count}>
          <img src="/monster.webp" alt="" sx={{ size: '250px', borderRadius: '10px' }} />
        </BlinkReveal>
      </Center>
      <Redo />
    </DemoCard>
  )
}

export default BlinkRevealDemo
