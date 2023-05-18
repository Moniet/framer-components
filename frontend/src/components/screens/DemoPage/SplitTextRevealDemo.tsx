import DemoCard from './DemoCard'
import { components } from '@/db/components'
import Center from './Center'
import { SplitTextReveal } from 'code-components/dist/components/SplitTextReveal'

const SplitTextRevealDemo = () => {
  return (
    <DemoCard {...components.SplitTextReveal}>
      <Center>
        <SplitTextReveal
          duration={0.5}
          offsetY={15}
          text="Split Text"
          typography={{
            color: '#fff',
          }}
        />
      </Center>
    </DemoCard>
  )
}

export default SplitTextRevealDemo
