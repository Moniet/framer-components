import DemoCard from './DemoCard'
import { components } from '@/db/components'
import Center from './Center'
import { SplitTextReveal } from 'code-components/dist/components/SplitTextReveal'
import { useRedo } from './useRedo'

const SplitTextRevealDemo = () => {
  const [count, Redo] = useRedo()
  return (
    <DemoCard {...components.SplitTextReveal}>
      <Center>
        <SplitTextReveal
          key={count}
          duration={0.5}
          offsetY={15}
          text="Split Text"
          typography={{
            color: '#fff',
          }}
        />
      </Center>
      <Redo />
    </DemoCard>
  )
}

export default SplitTextRevealDemo
