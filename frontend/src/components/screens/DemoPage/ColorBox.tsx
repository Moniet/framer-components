import React from 'react'
import { Box } from 'theme-ui'

const ColorBox = ({ children, size = 250, color = '#2061fc' }: any) => {
  return <Box sx={{ size: size + 'px', borderRadius: '10px', bg: color }}>{children}</Box>
}

export default ColorBox
