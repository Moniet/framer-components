import { keyframes } from '@emotion/react'
import { ReactNode, Suspense } from 'react'
import { Flex } from 'theme-ui'

const fadeInOut = keyframes`
  from {
    opacity: 1;
  } to {
    opacity: 0.5;
  }
`

const Fallback = () => {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        aspectRatio: '1.35',
        gap: '1rem',
        animation: `${fadeInOut} 1s ease alternate infinite`,
      }}
    ></Flex>
  )
}

const Skeleton = ({ children }: { children?: ReactNode }) => {
  return <Suspense fallback={<Fallback />}>{children}</Suspense>
}

export default Skeleton
