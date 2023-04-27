import { StripeCart } from "code-components/dist/components/StripeCart"
import { Button } from "code-components/dist/components/Button"
import * as framer from "framer"
import { useRouter } from "next/router"

const FC = () => {
  const router = useRouter()

  return (
    <div onClick={() => router.push("/fc")}>
      <StripeCart />
    </div>
  )
}

export default FC
