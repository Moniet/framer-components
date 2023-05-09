import styles from "./Effect.module.css"

const components = Array(3).fill("-")
export const Effect1 = ({ isHovering = false, image }) => {
  return (
    <>
      {components.map((_, i) => (
        <img
          key={i}
          className={styles.img}
          alt={image?.alt || ""}
          src={
            image?.src ||
            "https://cdn.openai.com/labs/images/A%20photo%20of%20a%20white%20fur%20monster%20standing%20in%20a%20purple%20room.webp"
          }
          style={
            {
              "--z-index": i,
              "--delay": !isHovering
                ? Math.sin(
                    (((components.length - i - 1) / 10) * Math.PI) / 2
                  ).toFixed(2) + "s"
                : Math.sin(((i / 10) * Math.PI) / 2).toFixed(2) + "s",
              "--clip-path": !isHovering
                ? "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
                : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              "--scale": isHovering ? 1 : 0
            } as any
          }
        />
      ))}
    </>
  )
}


