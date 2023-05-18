import DemoCard from './DemoCard'
import { components } from '@/db/components'
import Center from './Center'
import { SkewOnScroll } from 'code-components/dist/components/SkewOnScroll'
import Image from 'next/image'

const SkewOnScrollDemo = () => {
  return (
    <DemoCard {...components.SkewOnScroll}>
      <Center>
        <div
          sx={{
            size: '250px',
            overflow: 'hidden',
            border: 'solid 1px',
            borderColor: 'rgba(255,255,255,0.2)',
            borderRadius: '10px',
          }}
        >
          <SkewOnScroll duration={1.5} stretchiness={2} skew={60}>
            <Image width={250} height={250} alt="" src="/dog-in-space.png" />
          </SkewOnScroll>
        </div>
      </Center>
    </DemoCard>
  )
}

export default SkewOnScrollDemo
