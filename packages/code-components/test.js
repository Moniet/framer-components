const glob = require("glob")
const path = require("path")

const getEntryPoints = () => glob.sync(path.join(__dirname, "src", "**/*.tsx"))

console.log(getEntryPoints())
