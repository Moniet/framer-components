import * as React from "react"

const BlinkRevealExample = () => {
  return (
    <div style={{ width: "200px", height: "200px", overflow: "hidden" }}>
      <img
        alt="blink example"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        src="https://images.unsplash.com/photo-1614102073832-030967418971?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2938&q=80"
      />
    </div>
  )
}

export default BlinkRevealExample
