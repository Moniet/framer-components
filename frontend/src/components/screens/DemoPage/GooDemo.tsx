import DemoCard from './DemoCard'
import { components } from '@/db/components'
import Center from './Center'
import { Goo } from 'code-components/dist/components/Goo'

const GooDemo = () => {
  return (
    <DemoCard {...components.Goo}>
      <Center>
        <div
          sx={{
            size: '250px',
            position: 'relative',
            marginRight: '-125px',
            marginBottom: '-125px',
          }}
        >
          <Goo id={'123'} br={10} />
        </div>
      </Center>
    </DemoCard>
  )
}

export default GooDemo
