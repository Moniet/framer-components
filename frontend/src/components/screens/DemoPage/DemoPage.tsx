import { Sparkles } from 'code-components/dist/components/Sparkles'
import { ReactNode, lazy, useState } from 'react'
import { Button, Flex, Grid } from 'theme-ui'
import { motion } from 'framer-motion'
import useSWR from 'swr'

import { FiCopy } from 'react-icons/fi'
import Skeleton from './Skeleton'
import AutoGridDemo from './AutoGridDemo'
import BlinkRevealDemo from './BlinkRevealDemo'
import CopyTextDemo from './CopyTextDemo'
import CustomCursorOnHoverDemo from './CustomCursorOnHoverDemo'
import { CircleCursor } from 'code-components/dist/components/CircleCursor'
import DonutDemo from './DonutDemo'
import FiltersDemo from './FiltersDemo'
import FlipOnScrollDemo from './FlipOnScrollDemo'
import FlipOnScrollDemo2 from './FlipOnScrollDemo2'
import FlipOnScrollDemo3 from './FollowCursorDemo'
import GooDemo from './GooDemo'
import GradientBgDemo from './GradientBgDemo'
import HorizontalScrollDemo from './HorizontalScrollDemo'
import ImageParallaxOnScrollDemo from './ImageParallaxOnScrollDemo'
import { ImageRepeatOnHover } from 'code-components/dist/components/ImageRepeatOnHover'
import ImageRepeatOnHoverDemo from './ImageRepeatOnHoverDemo'
import ImageScaleOnHoverDemo from './ImageScaleOnHoverDemo'
import ImageScaleOnScrollDemo from './ImageScaleOnScroll'
import LiquidRevealDemo from './LiquidRevealDemo'
import MagneticButtonDemo from './MagneticButtonDemo'
import ScrollSnapDemo from './ScrollSnaplDemo'
import { ShuffleText } from 'code-components/dist/components/ShuffleText'
import ShuffleTextDemo from './ShuffleTextDemo'
import SkewOnScrollDemo from './SkewOnScrollDemo'
import SparklesDemo from './SparklesDemo'
import SplitTextRevealDemo from './SplitTextRevealDemo'
import SquircleDemo from './SquircleDemo'
import TextRepeatOnScrollDemo from './TextRepeatOnScroll'
import TextRollDemo from './TextRollDemo'
import TextSlideInOnViewDemo from './TextSlideInOnViewDemo'
import TypewriterDemo from './TypewriterDemo'
import VideoPeekDemo from './VideoPeekDemo'

const DemoPage = () => {
  const [page, setPage] = useState()
  const totalPages = 10 // totalCount / page limit
  const { data } = useSWR('/api/components', (url) => fetch(url).then((res) => res.json()))
  const [hideCursor, setHideCursor] = useState(false)

  return (
    <Flex
      sx={{
        width: '100%',
        minHeight: '100vh',
        flexDirection: 'column',
        px: '3rem',
        maxWidth: '1200px',
        mx: 'auto',
      }}
    >
      <Flex
        sx={{
          width: '100%',
          height: 'fit-content',
          alignItems: 'center',
          justifyContent: 'center',
          pt: '15rem',
          pb: '10rem',
        }}
      >
        <Sparkles>
          <h1 sx={{ fontSize: '2.5rem', color: 'text', lineHeight: 1.5, textAlign: 'center' }}>
            Copy and Paste in Framer
            <br />
            It&#39;s easy as pie{' '}
            <motion.div
              style={{ display: 'inline-block' }}
              animate={{ y: [-3, 3, -3] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              🥧
            </motion.div>
          </h1>
        </Sparkles>
      </Flex>
      <Grid
        sx={{
          gridTemplateColumns: ['repeat(1, 1fr)', , , 'repeat(2, 1fr)'],
          gap: '5rem 3rem',
        }}
      >
        <AutoGridDemo />
        <BlinkRevealDemo />
        <CopyTextDemo />
        <CustomCursorOnHoverDemo setHideCursor={setHideCursor} />
        <DonutDemo />
        <FiltersDemo />
        <FlipOnScrollDemo />
        <FlipOnScrollDemo2 />
        <FlipOnScrollDemo3 setHideCursor={setHideCursor} />
        <GooDemo />
        <GradientBgDemo />
        <HorizontalScrollDemo />
        <ImageParallaxOnScrollDemo />
        <ImageRepeatOnHoverDemo />
        <ImageScaleOnHoverDemo />
        <ImageScaleOnScrollDemo />
        <LiquidRevealDemo />
        <MagneticButtonDemo />
        <ScrollSnapDemo />
        <ShuffleTextDemo />
        <SkewOnScrollDemo />
        <SparklesDemo />
        <SplitTextRevealDemo />
        <SquircleDemo />
        <TextRepeatOnScrollDemo />
        <TextRollDemo />
        <TextSlideInOnViewDemo />
        <TypewriterDemo />
        <VideoPeekDemo />
      </Grid>

      {!hideCursor && <CircleCursor bgColor="#fff" opacityOnHover={0.5} />}
    </Flex>
  )
}

export default DemoPage