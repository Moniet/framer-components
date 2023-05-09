import { StripeCart } from "code-components/dist/components/StripeCart"
import { Button } from "code-components/dist/components/Button"
import * as framer from "framer"
import { useRouter } from "next/router"
import { StripeProductCard } from "code-components/dist/components/StripeProductCard/index"

import { GradientBgAnimation } from "code-components/dist/components/GradientBgAnimation"
import { CustomCursorOnHover } from "code-components/dist/components/CustomCursorOnHover/index"

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
      <CustomCursorOnHover>
        <div
          style={{ width: "200px", height: "200px", border: "solid 1px red" }}
        ></div>
      </CustomCursorOnHover>
    </div>
  )
}

export default FC