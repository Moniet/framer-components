import DemoCard from './DemoCard'
import { TextSlideInOnView } from 'code-components/dist/components/TextSlideInOnView'
import { components } from '@/db/components'
import Center from './Center'
import { useRedo } from './useRedo'

const TextSlideInOnViewDemo = () => {
  const [count, Redo] = useRedo()

  return (
    <DemoCard {...(components.TextSlideInOnView as any)}>
      <Center>
        <div sx={{ height: '100px' }} key={count}>
          <TextSlideInOnView text="Slide In" />
        </div>
      </Center>
      <Redo />
    </DemoCard>
  )
}

export default TextSlideInOnViewDemo
