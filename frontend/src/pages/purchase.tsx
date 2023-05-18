import { useUser } from '@supabase/auth-helpers-react'
import { Flex } from 'theme-ui'
import { keyframes } from '@emotion/react'
import getStripe from '@/utils/getStripe'
import { useEffect } from 'react'
import Stripe from 'stripe'

const upDown = keyframes`
  from {
    transform: translateY(10px);
  } to {
    transform: translateY(-10px);
  }
`

const DotAnimate = ({ delay = 0 }) => {
  return (
    <div
      sx={{
        size: '10px',
        background: 'text',
        ml: '1rem',
        borderRadius: '50%',
        display: 'inline-block',
        animation: `${upDown} 1s ease alternate infinite`,
        animationDelay: delay + 's',
        transform: 'translateY(10px)',
      }}
    ></div>
  )
}

const Purchase = () => {
  const user = useUser()

  useEffect(() => {
    ;(async () => {
      if (user) {
        console.log({ user })
        const stripe = await getStripe()
        const checkoutSession = (await fetch('/api/payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: user?.email,
          }),
        })
          .then((res) => res.json())
          .catch((err) => new Error(err))) as any

        if (checkoutSession instanceof Error) {
          console.error(checkoutSession)
          return
        }

        stripe!
          .redirectToCheckout({
            sessionId: checkoutSession.id,
          })
          .catch(console.error)
      }
    })()
  }, [user])

  return (
    <Flex
      sx={{
        width: '100%',
        height: '100vh',
        px: '3rem',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Flex sx={{ alignItems: 'center' }}>
        <h1>Redirecting</h1>
        <DotAnimate /> <DotAnimate delay={0.2} /> <DotAnimate delay={0.4} />
      </Flex>
    </Flex>
  )
}

export default Purchase
