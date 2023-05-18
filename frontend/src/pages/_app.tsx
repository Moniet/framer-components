import type { AppProps } from 'next/app'
import '@/styles/reset.css'
import { theme } from '@/styles/theme'
import { Global, ThemeProvider } from 'theme-ui'
import { Manrope } from 'next/font/google'
import Nav from '@/components/design-system/Nav'
import ClientSideOnly from '@/components/design-system/ClientSideOnly'
import Footer from '@/components/design-system/Footer'
import { useState } from 'react'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { CircleCursor } from 'code-components/dist/components/CircleCursor'

const manrope = Manrope({
  weight: 'variable',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())

  return (
    <SessionContextProvider supabaseClient={supabaseClient} initialSession={pageProps}>
      <div className={manrope.className}>
        <ThemeProvider theme={theme}>
          <Global
            styles={{
              html: {
                background: 'background',
              },
            }}
          />
          <ClientSideOnly>
            <Nav />
          </ClientSideOnly>
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </div>
    </SessionContextProvider>
  )
}
