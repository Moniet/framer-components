import { ReactNode, useRef } from 'react'
import { Button, Checkbox, Flex, Grid, Link } from 'theme-ui'
import { Typewriter } from 'code-components/dist/components/Typewriter'
import { MagneticButton } from 'code-components/dist/components/MagneticButton1'
import Balancer from 'react-wrap-balancer'
import { useInView, motion } from 'framer-motion'
import { CircleCursor } from 'code-components/dist/components/CircleCursor'
import { VideoPeek } from 'code-components/dist/components/VideoPeek'
import { HiCheckCircle } from 'react-icons/hi'
import { Sparkles } from 'code-components/dist/components/Sparkles'
import { usePayment } from '@/hooks/usePayment'
import { NextSeo } from 'next-seo'
import Video from '../design-system/Video'

const SlideIn = ({ children }: any) => {
  const ref = useRef() as any
  const inView = useInView(ref)

  return (
    <motion.div
      ref={ref}
      sx={{
        fontSize: ['40px', , '45px', '56px'],
        color: 'text',
        fontWeight: 600,
        textAlign: 'center',
      }}
      variants={{
        view: {
          opacity: 1,
          y: 0,
        },
        init: {
          opacity: 0,
          y: 60,
        },
      }}
      initial={'init'}
      animate={inView ? 'view' : 'init'}
      transition={{
        y: {
          type: 'spring',
          duration: '1.2',
        },
      }}
    >
      {children}
    </motion.div>
  )
}

const Header = ({ children }: { children?: ReactNode }) => {
  return (
    <span
      sx={{
        fontSize: ['40px', , '45px', '56px'],
        color: 'text',
        fontWeight: 600,
        textAlign: 'center',
      }}
    >
      {children}
    </span>
  )
}

const FirstSection = () => {
  const [hasPaid, isLoading, redirect] = usePayment()

  return (
    <Flex
      sx={{
        alignItems: 'center',
        justifyContent: 'start',
        flexDirection: 'column',
        width: '100%',
        paddingTop: '150px',
      }}
    >
      <SlideIn>
        <h1 sx={{ textAlign: 'center', lineHeight: 1.5, fontSize: '2rem' }}>
          <Header>No-code Components for Framer</Header>
        </h1>
      </SlideIn>
      <div sx={{ pt: '3rem' }} />
      <div
        sx={{
          perspective: '1000px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Video />
      </div>
      <div sx={{ pt: '3rem' }} />
      <div sx={{ fontWeight: 600, fontSize: '1.25rem' }}>
        <span sx={{ color: '#B5B5B5' }}>Built For</span>{' '}
        <Typewriter text="Designers,Entrepreneurs,Businesses" color="#fff" />
      </div>
      <div sx={{ pt: '3rem' }} />
      <p
        sx={{
          fontWeight: '600',
          fontSize: '1.75rem',
          textAlign: 'center',
          width: '100%',
          minWidth: '300px',
          maxWidth: '400px',
        }}
      >
        <Balancer ratio={0.75}>Copy and Paste React Components for Framer sites.</Balancer>
      </p>
      <div sx={{ pt: '3rem' }} />

      <button onClick={() => redirect()}>
        {/* TODO: add stripe */}
        <MagneticButton
          bgColor="#fff"
          cursorPadding={10}
          buttonPadding={30}
          borderRadius={10}
          typography={{
            color: '#000',
            fontSize: 16,
            fontWeight: 500,
          }}
          text="Buy now $29.99"
        />
      </button>
    </Flex>
  )
}

const StickyCard = ({ header, para }: any) => {
  return (
    <div
      sx={{
        position: 'sticky',
        top: '100px',
        left: 0,
        p: '4rem',
        pr: '2rem',
        bg: 'accent.2',
        borderBottom: 'solid 1px',
        borderColor: 'accent.1',
      }}
    >
      <h3 sx={{ color: 'text', fontSize: '1.5rem', mb: '1.25rem' }}>{header}</h3>
      <p sx={{ color: 'text', fontSize: '1.1rem' }}>{para}</p>
    </div>
  )
}

const SecondSection = () => {
  return (
    <Flex
      sx={{
        width: '100%',
        justifyContent: 'space-between',
        alignItems: ['center', , , , 'start'],
        flexDirection: ['column', , , , 'row'],
        gap: '3rem',
      }}
    >
      <Flex
        sx={{
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <SlideIn>
          <h2 sx={{ lineHeight: 0.75, mb: '1rem' }}>
            <Header>Our Components</Header>
          </h2>
        </SlideIn>
      </Flex>
      <Flex
        sx={{
          flexDirection: 'column',
          bg: 'accent.2',
          width: '100%',
          maxWidth: '500px',
        }}
      >
        <StickyCard
          header="Easy to use"
          para="Our library includes a wide range of components suitable for various industries, from startups and e-commerce businesses to portfolios and personal projects. You can customize each component to fit your unique design requirements and preview your designs in real-time."
        />
        <StickyCard
          header="Lightweight"
          para="Our components are designed to be lightweight, ensuring quick load times and smooth performance. Plus, our team is dedicated to updating and maintaining the library to ensure compatibility with the latest Framer updates."
        />
        <StickyCard
          header="No-code"
          para="With our easy-to-use copy and paste kit, you can enhance your Framer prototypes with beautiful and functional components without having to worry about coding from scratch."
        />
      </Flex>
    </Flex>
  )
}

const VideoPeekTab = ({ text = 'Test', src }: any) => {
  return (
    <VideoPeek align="top" videoSrc={src} w={400} h={225} margin={20}>
      <div
        sx={{
          width: '100%',
          height: '100%',
          p: '1rem',
          borderRadius: '10px',
          bg: 'accent.2',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'text',
        }}
      >
        {text}
      </div>
    </VideoPeek>
  )
}

const ThirdSection = () => {
  return (
    <Flex sx={{ flexDirection: 'column', py: '10rem', gap: '2rem' }}>
      <SlideIn>
        <h4 sx={{ lineHeight: 0.5, mb: '2rem', textAlign: 'center' }}>
          <Header>Components</Header>
        </h4>
      </SlideIn>
      <Grid
        sx={{
          gridGap: '2rem 1rem',
          gridAutoRows: '80px',
          gridTemplateColumns: ['repeat(1, 1fr)', , 'repeat(2, 1fr)', , 'repeat(3, 1fr)'],
        }}
      >
        <VideoPeekTab text="Blink Reveal" src="/blink_reveal.mp4" />
        <VideoPeekTab text="Image Repeat" src="/image_repeat.mp4" />
        <VideoPeekTab text="Image Scale On Scroll" src="/image_scale_on_scroll.mp4" />
        <VideoPeekTab text="Image Skew" src="/image_skew.mp4" />
        <VideoPeekTab text="Liquid Reveal" src="/liquid_reveal.mp4" />
        <VideoPeekTab text="Snap Scroll" src="/snap_scroll.mp4" />
      </Grid>

      <Link href="/demo" sx={{ textAlign: 'center' }}>
        <Button
          as="div"
          bg="#383838"
          color="text"
          mt="2rem"
          sx={{
            fontSize: '1rem',
            width: 'fit-content',
            alignSelf: 'center',
            pointerEvents: 'none',
          }}
        >
          View All
        </Button>
      </Link>
    </Flex>
  )
}

const CheckItem = ({ text = 'Text' }) => {
  return (
    <Flex sx={{ alignItems: 'center', color: 'hsl(0, 0%, 83%)', gap: '0.5rem' }}>
      <span sx={{ color: 'text' }}>
        <HiCheckCircle color="text" size={25} />
      </span>
      <p sx={{ fontSize: '1rem', fontWeight: 600 }}>{text}</p>
    </Flex>
  )
}

const PricingCard = () => {
  return (
    <Flex
      sx={{
        gap: ['3rem', , , '4rem'],
        p: '2rem',
        borderRadius: '10px',
        background: 'accent.2',
        justifyContent: 'space-between',
        alignItems: ['start', , , , 'center'],
        flexDirection: ['column', , , , 'row'],
        alignSelf: 'center',
      }}
    >
      <Flex sx={{ flexDirection: 'column', gap: '1.5rem', color: 'text' }}>
        <span sx={{ fontSize: '1rem', fontWeight: 600 }}>Component Kit</span>
        <h2 sx={{ fontSize: '3rem' }}>$29.99</h2>

        {/* <Flex sx={{ alignItems: 'center' }}>
          <Checkbox />
          <Flex as="p" sx={{ fontSize: '1rem', alignItems: 'center' }}>
            Add one year of updates&nbsp;
            <b sx={{ fontSize: '1.5rem' }}> +$4.99</b>
          </Flex>
        </Flex> */}
      </Flex>
      <Flex sx={{ flexDirection: 'column', gap: '1rem' }}>
        <CheckItem text="Lifetime access" />
        <CheckItem text="A year of updates" />
        <CheckItem text="Copy and Paste in Framer" />
        <CheckItem text="Access to newly added components" />
      </Flex>
    </Flex>
  )
}
const PricingSection = () => {
  const [__, isLoading, redirect] = usePayment()
  return (
    <Flex sx={{ flexDirection: 'column', gap: '2rem' }}>
      <SlideIn>
        <h2 sx={{ textAlign: 'center' }}>
          <Header>Pricing</Header>
        </h2>
      </SlideIn>
      <PricingCard />
      <Button
        disabled={isLoading}
        onClick={() => redirect()}
        bg="#383838"
        color="text"
        mt="2rem"
        sx={{ fontSize: '1rem', width: 'fit-content', alignSelf: 'center' }}
      >
        Buy Now
      </Button>
    </Flex>
  )
}

const Details = ({ header, para }: any) => {
  return (
    <details sx={{ color: 'text' }}>
      <summary sx={{ fontSize: '1.25rem', display: 'flex', fontWeight: 500, mb: '1rem' }}>
        {header}
      </summary>
      <p sx={{ pb: '1rem' }}>{para}</p>
    </details>
  )
}

const LandingPage = () => {
  const [__, isLoading, redirect] = usePayment()

  return (
    <div
      sx={{
        display: 'flex',
        background: 'background',
        flexDirection: 'column',
        width: '100vw',
        minHeight: '100vh',
        height: '100%',
        px: '3rem',
        maxWidth: '1200px',
        mx: 'auto',
      }}
    >
      <NextSeo
        title="FramerLib"
        description="We create highly customizable and easy to work with code-components and code-overrides for Framer"
      />
      <section>
        <FirstSection />
      </section>
      <div sx={{ mt: '10rem' }} />
      <section>
        <SecondSection />
        <Flex
          sx={{
            fontSize: '1rem',
            color: 'text',
            flexDirection: 'column',
            alignSelf: ['center', , , , 'start'],
            mt: ['2rem', , , , 0],
          }}
        >
          <span sx={{ fontWeight: 600, fontSize: '1.5rem' }}>Built with ❤️</span>
          <span>FRAMER.LIB TEAM</span>
        </Flex>
      </section>

      <div sx={{ mt: '5rem' }} />
      <section>
        <ThirdSection />
      </section>
      <div sx={{ mt: '5rem' }} />
      <section>
        <PricingSection />
      </section>
      <div sx={{ mt: '10rem' }} />
      <section>
        <div sx={{ maxWidth: '800px', mx: 'auto' }}>
          <h2 sx={{ fontWeight: 'bold', fontSize: '2rem', textAlign: 'center' }}>FAQs</h2>
          <div sx={{ mt: '3rem' }} />
          <Flex sx={{ flexDirection: 'column', gap: '1rem' }}>
            <Details
              header="What is FramerLib?"
              para="FramerLib is a no-code component library for Framer. 
          Our component kit is a powerful tool that allows you to create stunning, high-quality animations for your Framer prototypes. With its intuitive interface and customizable options, you can easily add movement, transitions, and effects to images, creating a dynamic and engaging user experience."
            />
            <Details
              header="How do I use FramerLib? Is it easy to use?"
              para="The Framerlib component library is designed to make your prototyping process as smooth and efficient as possible. It offers a wide range of pre-built components that you can easily incorporate into your Framer projects.
            Here's why using Framerlib is incredibly user-friendly:
            
            1. Intuitive Integration: Framerlib seamlessly integrates with Framer, allowing you to quickly import and use components without any complex setup. Simply 'Copy' and 'Paste' the component in Framer and start using it right away.
            
            2. Pre-built Components: Framerlib provides a collection of ready-to-use components, such as buttons, image and text animations, and so much more. These components are carefully crafted, well-documented, and follow best practices, making it easy to add interactive elements to your projects.
            
            3. Customization Options: Each component in Framerlib comes with customization options, allowing you to easily tailor them to your specific design needs. Whether it's adjusting colors, sizes, or animations, you have the flexibility to create a unique look and feel for your project."
            />
            <Details
              header="Do I need to know how to code?"
              para="No! you do not need to know how to code to use Framerlib. Framerlib is designed to simplify the prototyping process for those without any coding experience. Buy our kit and simply 'Copy' and 'Paste' the components.  Learn more about how to use the components in the 'Guide' page. "
            />
            <Details
              header="Why should I use FramerLib?"
              para="Framerlib offers an intuitive and accessible experience for users of all skill levels. Its pre-built components, customization options and component reusability make it easy to create interactive projects using Framer. Whether you're a beginner or an experienced designer, FramerLib empowers you to quickly bring your ideas to life without hassle."
            />
          </Flex>
        </div>
      </section>
      <div sx={{ mt: '10rem' }} />
      <Flex
        sx={{
          width: '80vw',
          mx: 'auto',
          flexDirection: 'column',
          alignItems: 'center',
          alignSelf: 'center',
          '& > div': {
            width: '100%',
          },
        }}
      >
        <Sparkles minSize={15} maxSize={25}>
          <p sx={{ mb: '2rem', fontSize: '2rem', textAlign: 'center' }}>
            <b>Get started!</b>
          </p>
          <Flex sx={{ gap: '1rem', width: '100%', justifyContent: 'center' }}>
            <Button
              sx={{ bg: 'text', color: 'background' }}
              disabled={isLoading}
              onClick={redirect}
            >
              Buy Now
            </Button>

            <a href="mailto:support@framerlib.com">
              <Button sx={{ bg: 'accent.1', text: 'text' }}>Request Component</Button>
            </a>
          </Flex>
        </Sparkles>
      </Flex>
      <div sx={{ mt: '10rem' }} />
      <CircleCursor bgColor="#fff" opacityOnHover={0.5} opacity={0.9} />
    </div>
  )
}

export default LandingPage
