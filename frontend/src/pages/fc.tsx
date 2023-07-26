import * as React from 'react'
import * as framer from 'framer'
import { useRouter } from 'next/router'
import { SplitTextReveal } from 'code-components/dist/components/SplitTextReveal/index'
import { CircleCursor } from 'code-components/dist/components/CircleCursor/index'

import { TextRepeatOnScroll } from 'code-components/dist/components/TextRepeatOnScroll/index'
import { Donut } from 'code-components/dist/components/Donut/index'
import { Sparkles } from 'code-components/dist/components/Sparkles/index'
import { SmoothScroll } from 'code-components/dist/components/SmoothScroll'
import { FlipOnScroll } from 'code-components/dist/components/FlipOnScroll'
import { GlobalCustomCursor } from 'code-components/dist/components/GlobalCustomCursor'
import { Count } from 'code-components/dist/components/Count'
import { ImageWithOverlay } from 'code-components/dist/components/ImageWithOverlay'

const FC = () => {
  const router = useRouter()

  return (
    <>
      <div
        id="main"
        style={{
          width: '100vw',
          height: '100vh',
          margin: 0,
          padding: '10rem 5rem',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            width: '100%',
            gap: '1rem',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
          }}
        >
          <ImageWithOverlay />
          <ImageWithOverlay />
          <ImageWithOverlay />
          <ImageWithOverlay/>
          <ImageWithOverlay />
          <ImageWithOverlay/>
        </div>
        <GlobalCustomCursor />
      </div>
      {/* <SmoothScroll /> */}
    </>
  )
}

export default FC
