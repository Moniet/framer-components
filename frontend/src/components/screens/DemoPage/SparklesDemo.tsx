import DemoCard from './DemoCard'
import { components } from '@/db/components'
import Center from './Center'
import { Sparkles } from 'code-components/dist/components/Sparkles'

const SparklesDemo = () => {
  return (
    <DemoCard {...components.Sparkles}>
      <Center>
        <Sparkles duration={0.6}>
          <p sx={{ fontWeight: 600, color: 'text', fontSize: '1.5rem' }}>And I saw sparks ✨</p>
        </Sparkles>
      </Center>
    </DemoCard>
  )
}

export default SparklesDemo
