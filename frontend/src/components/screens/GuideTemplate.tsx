import { NextSeo } from 'next-seo'
import { ReactNode } from 'react'
import { Flex } from 'theme-ui'

const GuideTemplate = ({
  header = '',
  videoSrc = '',
  children,
  desc = '',
}: {
  header: string
  videoSrc: string
  children: ReactNode
  desc: string
}) => {
  return (
    <Flex
      sx={{
        width: '100%',
        minHeight: '100vh',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        pt: '150px',
        ol: {
          pl: '1rem',
        },
        li: {
          mb: '0.5rem',
        },
      }}
    >
      <NextSeo title={'FrameLib | ' + header} description={desc} />
      <h1
        sx={{
          fontSize: '2rem',
          fontWeight: 800,
          marginBottom: '3rem',
        }}
      >
        {header}
      </h1>
      <video
        src={videoSrc}
        sx={{ width: '100%', height: 'auto', maxWidth: '800px', borderRadius: '10px' }}
        controls
      />
      <section>
        <Flex sx={{ maxWidth: '700px', flexDirection: 'column', gap: '2rem' }}>{children}</Flex>
      </section>
    </Flex>
  )
}

export default GuideTemplate
