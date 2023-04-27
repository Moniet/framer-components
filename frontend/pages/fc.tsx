import { StripeCart } from "code-components/dist/components/StripeCart"
import { Button } from "code-components/dist/components/Button"
import * as framer from "framer"
import { useRouter } from "next/router"
import { StripeProductCard } from "code-components/dist/components/StripeProductCard/index"

import { GradientBgAnimation } from "code-components/dist/components/GradientBgAnimation"

const FC = () => {
  const router = useRouter()

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        fontFamily: "Helvetica, sans-serif"
      }}
    >
      <div style={{ width: "200px", height: "200px" }}>
        <GradientBgAnimation
          angle={-90}
          size={300}
          blur={0}
          animation={{
            duration: 20
          }}
        />
      </div>
    </div>
  )
}

export default FC
