import { useState } from 'react'
import { FiRepeat } from 'react-icons/fi'
import { Button } from 'theme-ui'

export const useRedo = () => {
  const [id, setCount] = useState(0)

  const Redo = () => {
    return (
      <Button
        onClick={() => {
          setCount(id + 1)
        }}
        sx={{ size: '50px', position: 'absolute', top: '1rem', right: '1rem' }}
        bg="accent.2"
      >
        <span sx={{ pointerEvents: 'none' }}>
          <FiRepeat />
        </span>
      </Button>
    )
  }

  return [id, Redo] as const
}
