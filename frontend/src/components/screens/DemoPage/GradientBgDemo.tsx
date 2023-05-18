import DemoCard from './DemoCard'
import { components } from '@/db/components'
import Center from './Center'
import {
  GradientBgAnimation as FC,
  GradientBgAnimation,
} from 'code-components/dist/components/GradientBgAnimation'

const GradientBgDemo = () => {
  return (
    <DemoCard {...components.GradientBgAnimation}>
      <Center>
        <div sx={{ size: '250px' }}>
          <GradientBgAnimation
            angle={90}
            size={500}
            animation={{
              duration: 20,
              animateAngle: true,
            }}
          />
        </div>
      </Center>
    </DemoCard>
  )
}

export default GradientBgDemo
