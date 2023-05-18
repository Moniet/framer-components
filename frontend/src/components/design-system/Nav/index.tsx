import Link from 'next/link'
import { Button, Flex } from 'theme-ui'
import { useMedia } from 'react-use'
import { useState } from 'react'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { usePayment } from '@/hooks/usePayment'

const Hamburger = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_503_348)">
      <path d="M23 11.0187H1C0.447715 11.0187 0 11.4665 0 12.0187C0 12.571 0.447715 13.0187 1 13.0187H23C23.5523 13.0187 24 12.571 24 12.0187C24 11.4665 23.5523 11.0187 23 11.0187Z" />
      <path d="M23 4.01935H1C0.447715 4.01935 0 4.46706 0 5.01935C0 5.57163 0.447715 6.01934 1 6.01934H23C23.5523 6.01934 24 5.57163 24 5.01935C24 4.46706 23.5523 4.01935 23 4.01935Z" />
    </g>
    <defs>
      <clipPath>
        <rect width="24" height="24" transform="translate(0 0.019043)" />
      </clipPath>
    </defs>
  </svg>
)
const Cross = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
      <path d="M18 6a1 1 0 0 0-1.414 0L12 10.586 7.414 6A1 1 0 0 0 6 6a1 1 0 0 0 0 1.414L10.586 12 6 16.586A1 1 0 0 0 6 18a1 1 0 0 0 1.414 0L12 13.414 16.586 18A1 1 0 0 0 18 18a1 1 0 0 0 0-1.414L13.414 12 18 7.414A1 1 0 0 0 18 6Z" />
    </svg>
  )
}

const Nav = () => {
  const isSmall = useMedia('(max-width: 991px)', false)
  const [showMenu, setShowMenu] = useState(false)
  const user = useUser()
  const sb = useSupabaseClient()
  const [hasPaid, isLoading, toSignIn] = usePayment()
  return (
    <nav>
      <Flex
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'fixed',
          top: 0,
          left: 0,
          px: '3rem',
          backgroundColor: 'rgba(0,0,0,0.2)',
          backdropFilter: 'blur(5px)',
          width: '100%',
          height: '100px',
          zIndex: '1000000',
        }}
      >
        <Link href="/" sx={{ fontWeight: 600 }}>
          FRAMER.LIB 📚
        </Link>

        {isSmall && (
          <Button
            onClick={() => setShowMenu(!showMenu)}
            sx={{
              position: 'absolute',
              right: 0,
              top: '50%',
              backgroundColor: 'transparent',
              transform: 'translateY(-50%)',
              svg: {
                fill: 'text',
              },
              cursor: 'pointer',
              display: ['block', , , , 'none'],
            }}
          >
            {!showMenu ? (
              <span sx={{ width: '20px' }}>
                <Hamburger />
              </span>
            ) : (
              <Cross />
            )}
          </Button>
        )}

        {(isSmall ? showMenu : true) && (
          <div
            sx={{
              display: 'flex',
              flexDirection: ['column', , , , 'row'],
              alignItems: 'center',
              position: ['absolute', , , , 'relative'],
              transform: ['translateY(calc(100% + 2rem))', , , , 'none'],
              bottom: [0, , , , 'none'],
              right: ['2rem', , , , 'none'],
              p: [4, , , , 0],
              borderRadius: '10px',
              bg: ['accent.1', , , , 'transparent'],
              gap: ['1.5rem', , , , '3rem'],
              fontSize: '1rem',
              a: {
                color: 'text',
                textDecoration: 'none',
              },
            }}
          >
            <Link href="/guide">Guide</Link>
            <Link href="/demo">Demo</Link>
            {!user && (
              <Link href="sign-in">
                <Button
                  as="div"
                  bg="transparent"
                  sx={{
                    border: 'solid 1px',
                    borderColor: 'text',
                    color: 'text',
                    pointerEvents: 'none',
                    borderRadius: '8px',
                  }}
                >
                  Sign In
                </Button>
              </Link>
            )}
            {user && (
              <Button
                onClick={() => {
                  sb.auth.signOut()
                }}
                bg="transparent"
                sx={{
                  border: 'solid 1px',
                  borderColor: 'text',
                  color: 'text',
                  borderRadius: '8px',
                  fontWeight: 400,
                }}
              >
                Sign Out
              </Button>
            )}
            {!hasPaid && !isLoading && (
              <Button
                bg="text"
                color="background"
                onClick={() => toSignIn()}
                sx={{ borderRadius: '8px' }}
              >
                Buy Now
              </Button>
            )}
          </div>
        )}
      </Flex>
    </nav>
  )
}

export default Nav
