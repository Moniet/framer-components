import Center from './Center'
import { CustomCursorOnHover } from 'code-components/dist/components/CustomCursorOnHover/index'
import DemoCard from './DemoCard'
import { components } from '@/db/components'
const { CustomCursorOnHover: CC } = components

const CustomCursorOnHoverDemo = ({ setHideCursor }: { setHideCursor: (a: boolean) => void }) => {
  return (
    <DemoCard {...CC}>
      <Center>
        <CustomCursorOnHover cursor={{ src: '/default-cursor.png' }}>
          <div
            sx={{ size: '250px', bg: 'accent.2' }}
            onMouseOver={() => setHideCursor(true)}
            onMouseLeave={() => setHideCursor(false)}
          >
            <Center>
              <div sx={{ pointerEvents: 'none' }}>Hover Over Me</div>
            </Center>
          </div>
        </CustomCursorOnHover>
      </Center>
    </DemoCard>
  )
}

export default CustomCursorOnHoverDemo
