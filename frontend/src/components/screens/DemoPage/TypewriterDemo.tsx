import DemoCard from './DemoCard'
import { Typewriter } from 'code-components/dist/components/Typewriter'
import { components } from '@/db/components'
import Center from './Center'

const TypewriterDemo = () => {
  return (
    <DemoCard {...(components.Typewriter as any)}>
      <Center>
        <div sx={{ height: '100px' }}>
          <Typewriter
            cursorBlinking
            cursorColor="#fff"
            cursor
            text="Typewriter Example Text, Cycles like this, Super Customizable, And simple to use!"
            color="#fff"
            fontSize={25}
            fontWeight={600}
          />
        </div>
      </Center>
    </DemoCard>
  )
}

export default TypewriterDemo
