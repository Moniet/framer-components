import { StripeCart } from "code-components/dist/components/StripeCart"
import { Button } from "code-components/dist/components/Button"
import * as framer from "framer"
import { useRouter } from "next/router"

const FC = () => {
  const { id } = useRouter().query as { id: string | number }
  const router = useRouter()

  if (id == 1) {
    return (
      <div onClick={() => router.push("/fc")}>
        <StripeCart />
        <div>back page</div>
      </div>
    )
  }

  return (
    <div>
      <div onClick={() => router.push("/fc?id=1")}>next page</div>
      <StripeCart />
      <Button />
    </div>
  )
}

export default FC
