import styled from "@emotion/styled"
import { ReactNode, useEffect, useRef } from "react"
import useMediaQuery from "../../hooks/useMediaQuery"
import styles from "./styles.module.css"
import { getNumProps, getSingleChild } from "../../utils/framerControlProps"
import { ControlType } from "framer"

let starSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.738 57.738">
  <path fill="var(--path-fill)" class="star-path" d="M3080.1,5799.2s12.826-1.28,20.043-8.5,8.826-20.372,8.826-20.372,2.626,13.154,9.843,20.372,19.026,8.5,19.026,8.5-11.808,1.134-19.026,8.352-9.843,20.518-9.843,20.518-1.609-13.3-8.826-20.518S3080.1,5799.2,3080.1,5799.2Z" transform="translate(-3080.101 -5770.331)" />
</svg>
`

const animateStar = (star: any, wrapper: any, time = 800) => {
  const scale = [{ transform: "scale(0.5)" }, { transform: "scale(1)" }]

  const rotate = [{ opacity: 0 }, { opacity: 1 }, { opacity: 0 }]

  const timing = {
    duration: time,
    fill: "forwards"
  }

  wrapper.animate(rotate, timing)
  star.animate(scale, timing)
}

const createStarMover =
  (MIN_SIZE = 5, MAX_SIZE = 15) =>
  (star: HTMLElement) => {
    const starSize = Math.floor(Math.max(Math.random() * MAX_SIZE, MIN_SIZE))
    star.style.width = `${starSize}px`
    star.style.height = `${starSize}px`
    star.style.top = `${Math.floor(Math.random() * 70)}%`
    star.style.left = `${Math.floor(Math.random() * 100)}%`
  }

const createStar = () => {
  const star = document.createElement("div")
  const wrapper = document.createElement("div")

  star.style.position = "absolute"
  star.classList.add(styles.star)

  wrapper.classList.add(styles.startSvgWrapper)
  wrapper.innerHTML = starSVG

  star.appendChild(wrapper)

  return [star, wrapper]
}

const generateSparkles = (
  div: Element | null,
  { numOfStars = 10, duration = 800, minSize = 10, maxSize = 20 }
) => {
  const MIN_INTERVAL = duration
  const MAX_INTERVAL = 3013
  const intervals: NodeJS.Timer[] = []
  const stars: HTMLDivElement[] = []

  for (let i = 0; i < numOfStars; i++) {
    const interval = i * (duration + i * 10)
    const [star, wrapper] = createStar()

    stars.push(star)

    div?.appendChild(star)
    const moveStar = createStarMover(minSize, maxSize)

    intervals.push(
      setInterval(() => {
        moveStar(star)
        animateStar(star, wrapper, duration)
      }, interval)
    )
  }

  return () => {
    intervals?.forEach((int) => clearInterval(int))
    stars.forEach((star) => {
      div?.removeChild(star)
    })
  }
}

export const Sparkles = ({
  children,
  minSize = 10,
  maxSize = 20,
  numOfStars = 5,
  duration = 600,
  color = "#debd05e"
}: {
  children: ReactNode
  minSize?: number
  maxSize?: number
  numOfStars?: number
  duration?: number
  color?: string
}) => {
  const container = useRef<HTMLDivElement>(null)
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)")

  useEffect(() => {
    const stop =
      !reducedMotion &&
      generateSparkles(container?.current, {
        numOfStars,
        duration,
        minSize,
        maxSize
      })

    return () => {
      if (typeof stop == "function") {
        stop()
      }
    }
  }, [reducedMotion, minSize, maxSize, numOfStars, duration])

  return (
    <div
      className={styles.wrapper}
      style={
        {
          "--path-fill": color
        } as any
      }
      ref={container}
    >
      {children}
    </div>
  )
}

export const propsControls = {
  children: getSingleChild(),
  minSize: getNumProps(10, true, 2),
  maxSize: getNumProps(10, true, 2),
  numOfStars: getNumProps(20, false, 5, { min: 1, max: 100 }),
  duration: getNumProps(0.5, false, 0.1, { min: 0.1, max: 2 }),
  color: {
    type: ControlType.Color,
    defaultValue: "#debd05e"
  }
}
