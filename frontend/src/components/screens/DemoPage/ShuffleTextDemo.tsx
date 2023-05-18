import DemoCard from './DemoCard'
import { components } from '@/db/components'
import Center from './Center'
import { ShuffleText } from 'code-components/dist/components/ShuffleText'

const ShuffleTextDemo = () => {
  return (
    <DemoCard {...components.ShuffleText}>
      <Center>
        <ShuffleText typography={{ color: '#fff' }} />
      </Center>
    </DemoCard>
  )
}

export default ShuffleTextDemo
