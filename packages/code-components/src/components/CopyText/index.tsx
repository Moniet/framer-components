import { getSingleChild, getStrProps } from "../../utils/framerControlProps"
import { CopyTextExample } from "./CopyTextExample"
import styles from "./styles.module.css"

type Props = {
  text?: string
  children?: React.ReactNode
}

export const CopyText = ({ text = "Example text", children }: Props) => {
  const handleClick = () => navigator.clipboard.writeText(text)

  return (
    <div
      className={styles.copyText}
      role="button"
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        handleClick()
      }}
    >
      {children || <CopyTextExample />}
    </div>
  )
}

export const propsControls = {
  children: getSingleChild(),
  text: getStrProps("Example Text To Copy!")
}
