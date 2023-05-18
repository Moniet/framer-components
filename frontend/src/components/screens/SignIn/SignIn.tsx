import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { CircleCursor } from 'code-components/dist/components/CircleCursor'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'
import { Button, Card, Flex, Input, Message } from 'theme-ui'

const SignIn = () => {
  const supabase = useSupabaseClient()
  const [email, setEmail] = useState('')
  const [emailSent, setEmailSent] = useState(false)
  const [error, setError] = useState(false)
  const { payment } = useRouter().query

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (email) {
      supabase.auth
        .signInWithOtp({
          email,
          options: {
            emailRedirectTo: window.location.origin + (payment ? '/purchase' : '/demo'),
          },
        })
        .then((e) => {
          if (e.error) {
            setError(true)
          } else {
            setEmailSent(true)
          }
        })
    }
  }

  return (
    <Flex
      sx={{
        width: '100%',
        px: '3rem',
        height: '100%',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        pt: '150px',
      }}
    >
      <Flex
        sx={{ flexDirection: 'column', width: 'min(100%, 500px)' }}
        as="form"
        onSubmit={handleSubmit}
      >
        <h1
          sx={{
            fontSize: '1.8rem',
            mb: '0.5rem',
            outline: 'none',
            '&:focus': { outlineColor: 'transparent', boderColor: 'transparent' },
            textAlign: 'center',
          }}
        >
          Get started with FramerLib 📚
        </h1>
        <p sx={{ textAlign: 'center', letterSpacing: '1px' }}>
          Make complex animations without code
        </p>

        <div sx={{ pt: '4rem' }} />
        <Input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            height: '50px',
            border: 'none',
            borderBottom: 'solid 2px',
            borderColor: 'accent.2',
            borderRadius: 0,
            '&:focus': {
              border: 'none',
              outline: 'none',
              borderBottom: 'solid 2px',
              borderColor: '#999',
            },
          }}
          placeholder="Email"
        />
        <Card bg="accent.1" p="2rem" sx={{ borderRadius: '10px', mt: '2rem' }}>
          {emailSent && (
            <p>Thanks for signing in! Check out your email to get access to the demo page. ✨</p>
          )}
          {!emailSent && <p>We&#39;ll email you a magic link for a password-free sign in. ✨</p>}
          {!emailSent && payment && (
            <Message sx={{ mt: '1rem', bg: 'accent.2', fontWeight: '600' }}>
              <p>
                <span sx={{ fontSize: '1rem' }}>⚠️</span>{' '}
                <span>You can purchase the components after signing in.</span>
              </p>
            </Message>
          )}
        </Card>
        {error && (
          <Message bg="tomato" mt="2rem" sx={{ textAlign: 'center', lineHeight: 2 }}>
            Uh oh! Looks like something went wrong when trying to sign up. <br />
            Please try again, or check your email for a previously sent magic link.
          </Message>
        )}
        {!emailSent && (
          <Button
            bg="text"
            color="background"
            mt="4rem"
            sx={{
              height: '50px',
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
              '&:active': {
                transform: `scale(0.95)`,
              },
            }}
            type="submit"
          >
            Sign In
          </Button>
        )}
      </Flex>
      <CircleCursor bgColor="#fff" opacityOnHover={0.5} />
    </Flex>
  )
}

export default SignIn
