import DemoCard from './DemoCard'
import { components } from '@/db/components'
import Center from './Center'
import { MagneticButton } from 'code-components/dist/components/MagneticButton1'
import Image from 'next/image'

const MagneticButtonDemo = () => {
  return (
    <DemoCard {...components.MagneticButton}>
      <Center>
        <MagneticButton>
          <Image
            src="/water.jpg"
            width={300}
            height={300}
            alt="Liquid Reveal Sample Image"
            sx={{ borderRadius: '10px' }}
          />
        </MagneticButton>
      </Center>
    </DemoCard>
  )
}

export default MagneticButtonDemo
