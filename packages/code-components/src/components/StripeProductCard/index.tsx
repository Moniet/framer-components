import styles from "./styles.modules.css"
import { useStripeState } from "../../hooks/useStripeState"
import { ControlType, addPropertyControls } from "framer"

export const StripeProductCard = ({
  productId,
  productTitle
}: {
  productId: string
  productTitle: string
}) => {
  const [items, setItem, removeItem] = useStripeState()
  const isSelected = (items as any[]).find((prod) => prod.id === productId)

  const toggleProductInCart = () => {
    if (isSelected) {
      removeItem({
        id: productId
      })
    } else {
      setItem({
        id: productId,
        title: productTitle
      })
    }
  }

  return (
    <div
      className={styles.container}
      onClick={(e) => {
        e.preventDefault()
        toggleProductInCart()
      }}
    >
      <div className={styles.card}>
        <img
          className={styles.image}
          src={"https://placehold.co/600x400.png"} // TODO: add dynamic images2
          alt="" // TODO: add dynamic alt tags
        />
        <div className={styles.title}>
          <b>{productTitle}</b>
        </div>
      </div>
      {isSelected && <div className={styles.selectedView}></div>}
    </div>
  )
}

addPropertyControls(StripeProductCard, {
  productId: {
    type: ControlType.String
  },
  productTitle: {
    type: ControlType.String
  }
})
