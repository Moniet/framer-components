import { Sparkles } from 'code-components/dist/components/Sparkles'
import { ReactNode, useState } from 'react'
import { Button, Flex, Grid } from 'theme-ui'
import { motion } from 'framer-motion'

import { FiCopy } from 'react-icons/fi'

type CardProps = {
  children: ReactNode
  title: string
  tag: string
}

const Card = ({ children = '', title = '', tag = '' }: CardProps) => {
  const copyLink = () => {}

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        aspectRatio: '1.35',
        gap: '1rem',
      }}
    >
      <Flex
        sx={{
          border: 'solid 1px',
          borderColor: '#262627',
          bg: '#0f0f0f',
          borderRadius: '10px',
          size: '100%',
        }}
      >
        {children}
      </Flex>
      <Flex sx={{ justifyContent: 'space-between' }}>
        <div>
          <p>
            <b sx={{ fontWeight: 600, fontSize: '1rem' }}>{title}</b>
          </p>
          <p sx={{ fontSize: '1rem', color: '#999' }}>{tag}</p>
        </div>
        <Button
          onClick={() => copyLink()}
          sx={{
            display: 'flex',
            color: 'text',
            bg: '#262626',
            borderRadius: '50px',
            alignItems: 'center',
            py: '0.5rem',
            gap: '0.5rem',
            height: 'fit-content',
            cursor: 'pointer',
            transition: 'transform 0.2s ease',
            '&:active': {
              transform: 'scale(0.9)',
            },
          }}
        >
          <FiCopy size={15} />
          Copy
        </Button>
      </Flex>
      <div sx={{ pt: '10rem' }} />
    </Flex>
  )
}

const DemoPage = () => {
  const [page, setPage] = useState()
  const totalPages = 10 // totalCount / page limit

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
          gap: '1rem',
        }}
      >
        <Card title={'Squircle'} tag="Utility">
          <div />
        </Card>
      </Grid>
    </Flex>
  )
}

export default DemoPage
