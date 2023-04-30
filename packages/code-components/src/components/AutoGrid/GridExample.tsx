const Item = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "deepskyblue",
        borderRadius: "10px"
      }}
    />
  )
}

export const GridExample = () => {
  return (
    <>
      {Array(20)
        .fill("")
        .map((_, i) => (
          <Item key={i} />
        ))}
    </>
  )
}
