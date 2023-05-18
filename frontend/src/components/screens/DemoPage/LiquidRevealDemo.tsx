import DemoCard from './DemoCard'
import { components } from '@/db/components'
import Center from './Center'
import { LiquidReveal } from 'code-components/dist/components/LiquidReveal'
import Image from 'next/image'
import { useRedo } from './useRedo'

const LiquidRevealDemo = () => {
  return (
    <DemoCard {...components.LiquidReveal}>
      <Center>
        <div>
          <LiquidReveal>
            <Image
              src="/water.jpg"
              width={300}
              height={300}
              alt="Liquid Reveal Sample Image"
              sx={{ borderRadius: '10px', width: '100%' }}
            />
          </LiquidReveal>
          <p sx={{ textAlign: 'center', mt: '1rem' }}>
            Scroll out, then back into view to see the effect
          </p>
        </div>
      </Center>
    </DemoCard>
  )
}

export default LiquidRevealDemo
