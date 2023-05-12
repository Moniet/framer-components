import { useRef, useState } from "react"
import {
  getNumProps,
  getTypeographyStyles,
  typography
} from "../../utils/framerControlProps"
import { useEffect } from "react"
import { useSplitText } from "../../hooks/useSplitText"
import styles from "./styles.module.css"
import { useMemo } from "react"

const getRandomChar = () => {
  const num = Math.floor(Math.max(33, Math.random() * 126))
  return String.fromCharCode(num)
}

const Letter = ({ maxIterations = 10, letter }) => {
  const totalIterations = useMemo(
    () => Math.min(10, Math.floor(Math.max(1, Math.random() * maxIterations))),
    [maxIterations]
  )

  const [l, setShuffle] = useState("")
  const count = useRef(0)

  useEffect(() => {
    let i

    i = setInterval(() => {
      if (count.current < totalIterations) {
        setShuffle(getRandomChar())
        count.current = count.current + 1
      } else {
        setShuffle(letter)
        clearInterval(i)
      }
    }, Math.max(100, Math.random() * 200))

    return () => {
      clearInterval(i)
    }
  }, [])

  return <span>{l}</span>
}

export const ShuffleText = ({
  text = "Example Text",
  maxIterations = 10,
  typography
}: any) => {
  const splitText = useSplitText(text)
  const letters = splitText.map(({ letter, isSpace }, i: number) => (
    <Letter
      key={i}
      maxIterations={maxIterations}
      letter={isSpace ? " " : letter}
    />
  ))

  return (
    <div
      style={{ ...getTypeographyStyles(typography) }}
      className={styles.container}
    >
      {letters}
    </div>
  )
}

export const propsControls = {
  typography,
  maxIterations: getNumProps(10, false)
}
