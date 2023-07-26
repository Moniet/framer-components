import { useComponents } from '@/hooks/useComponents'
import Link from 'next/link'
import { ReactNode, useMemo, useState } from 'react'
import { FiCheck, FiCopy } from 'react-icons/fi'
import { Button, Flex } from 'theme-ui'

type CardProps = {
  children: ReactNode
  title: string
  tags?: string[]
  guideLink?: string
  id: number
  isFree?: boolean
}

const DemoCard = ({ children = '', title = '', tags, id, guideLink, isFree }: CardProps) => {
  const { data } = useComponents()
  const [copied, setCopied] = useState(false)
  const componentData = useMemo(() => data?.find((d: any) => d.id === id), [data, id])
  const copyLink = () => {
    if (data && componentData?.url) {
      navigator.clipboard
        .writeText(componentData.url)
        .then(() => {
          setCopied(true)
          setTimeout(() => setCopied(false), 10000)
        })
        .catch(() => alert("copy didn't work :("))
    }
  }

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        // minHeight: '350px',
        aspectRatio: ['auto', , , , , '1.35'],
        gap: '1rem',
        position: 'relative',
      }}
    >
      <Flex
        sx={{
          border: 'solid 1px',
          borderColor: '#262627',
          bg: '#0f0f0f',
          borderRadius: '10px',
          size: '100%',
          minHeight: '350px',
          p: '2rem',
        }}
      >
        {children}
      </Flex>
      <Flex sx={{ justifyContent: 'space-between' }}>
        <div>
          <p>
            <b sx={{ fontWeight: 600, fontSize: '1rem' }}>{title}</b>
          </p>
          {tags && !guideLink && <p sx={{ fontSize: '1rem', color: '#999' }}>{tags?.['0']}</p>}
          {guideLink && (
            <Link sx={{ color: '#999' }} href={guideLink}>
              View Guide
            </Link>
          )}
        </div>
        {(componentData || isFree) && (
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
              minWidth: 'fit-content',
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
              '&:active': {
                transform: 'scale(0.9)',
              },
            }}
          >
            {copied ? <FiCheck size={15} /> : <FiCopy size={15} />}
            {copied ? 'Copied!' : 'Copy'}
          </Button>
        )}
      </Flex>
    </Flex>
  )
}

export default DemoCard
