import DemoCard from './DemoCard'
import { components } from '@/db/components'
import Center from './Center'
import { FollowCursor as FC } from 'code-components/dist/components/FollowCursor'
import ColorBox from './ColorBox'

const FollowCursor = ({ setHideCursor }: any) => {
  return (
    <div onMouseOver={() => setHideCursor(true)} onMouseLeave={() => setHideCursor(false)}>
      <DemoCard {...components.FollowCursor}>
        <Center>
          <div sx={{ size: '250px' }}>
            <FC movement={50} duration={0.2}>
              <ColorBox>
                <Center>
                  <span sx={{ pointerEvents: 'none' }}>Hover</span>
                </Center>
              </ColorBox>
            </FC>
          </div>
        </Center>
      </DemoCard>
    </div>
  )
}

export default FollowCursor
