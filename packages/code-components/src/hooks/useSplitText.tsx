export const useSplitText = (text = "Example Split Text") => {
  let textArr = text.split("")

  const splitText = (() => {
    let result = [] as any

    for (let i = 0; i < text.length; i++) {
      const isSpace = / /.test(textArr[i])

      if (isSpace) {
        result.push({
          isSpace: true
        })
      } else {
        result.push({
          letter: textArr[i],
          isLetter: true,
          position: i
        })
      }
    }

    return result
  })()

  return splitText || []
}
