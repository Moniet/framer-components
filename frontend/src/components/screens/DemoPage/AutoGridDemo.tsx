import { Flex } from 'theme-ui'
import DemoCard from './DemoCard'
import { AutoGrid } from 'code-components/dist/components/AutoGrid/index'
import { motion } from 'framer-motion'
import { components } from '@/db/components'

const Box = () => (
  <div sx={{ width: '100%', height: '20px', background: 'text', borderRadius: '3px' }} />
)

const { AutoGrid: AG } = components

const AutoGridDemo = () => {
  return (
    <DemoCard {...AG}>
      <Flex
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          padding: '1rem',
        }}
      >
        <motion.div
          transition={{ duration: 5, repeat: Infinity }}
          animate={{ width: ['150px', '250px', '150px'] }}
          sx={{
            height: 'fit-content',
            bg: 'accent.2',
            p: '1.5rem',
            borderRadius: '10px',
          }}
        >
          <AutoGrid maxWidth={10} minWidth={40} gap={10} justify="center">
            {Array(12)
              .fill('')
              .map((_, i) => (
                <Box key={i} />
              ))}
          </AutoGrid>
        </motion.div>
      </Flex>
    </DemoCard>
  )
}

export default AutoGridDemo
