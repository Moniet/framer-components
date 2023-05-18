import React, { useState } from 'react'
import DemoCard from './DemoCard'
import { components } from '@/db/components'
import Center from './Center'
import { Filters } from 'code-components/dist/components/Filters'
import { Flex, Select, Slider } from 'theme-ui'

const FiltersDemo = () => {
  const [amount, setAmount] = useState(50)
  const [filter, setFilter] = useState('sepia')

  return (
    <DemoCard {...components.Filters}>
      <Center>
        <Flex sx={{ flexDirection: 'column', gap: '0.5rem' }}>
          <Filters filter={filter} amount={amount} image={null}>
            <img
              alt="Filters Demo"
              src="./dog-in-space.png"
              sx={{ size: '250px', borderRadius: '10px' }}
            />
          </Filters>
          <Slider
            min={0}
            max={100}
            onChange={(e) => {
              setAmount(Number(e.target.value))
            }}
          />
          <Select defaultValue="sepia" onChange={(e) => setFilter(e.target.value)}>
            <option value="sepia">Sepia</option>
            <option value="grayscale">Grayscale</option>
            <option value="blur">Blur</option>
            <option value="contrast">Contrast</option>
            <option value="hue-rotate">Hue-Rotate</option>
            <option value="invert">Invert</option>
            <option value="saturate">Saturation</option>
          </Select>
        </Flex>
      </Center>
    </DemoCard>
  )
}

export default FiltersDemo
