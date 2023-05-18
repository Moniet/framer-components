import React from 'react'
import { Flex } from 'theme-ui'

const Center = ({ children }: any) => {
  return (
    <Flex sx={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
      {children}
    </Flex>
  )
}

export default Center
