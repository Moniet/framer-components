import { Flex } from 'theme-ui'

const Footer = () => {
  return (
    <div
      sx={{
        display: 'flex',
        width: '100%',
        padding: '3rem',
        mt: '5rem',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>
        <p>© FramerLib. 2023</p>
      </div>
      <Flex sx={{ gap: '2rem', fontWeight: 600 }}>
        <a referrerPolicy="no-referrer" href="https://twitter.com/framerlib">
          Twitter
        </a>
        <a referrerPolicy="no-referrer" href="mailto:support@framerlib.com">
          Contact
        </a>
      </Flex>
    </div>
  )
}

export default Footer
