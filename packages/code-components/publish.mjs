import ghPages from "gh-pages"

ghPages.publish("./dist", null, () => {
  console.log("ghpages published")
})
