const path = require("path")
const { ProvidePlugin } = require("webpack")
const glob = require("glob")

const getEntryPoints = () => glob.sync(path.join(__dirname, "src", "**/*.tsx"))

module.exports = {
  mode: "production",
  entry: getEntryPoints(),
  target: "web",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  externals: {
    react: "react",
    framerMotion: "framer-motion",
    framer: "framer",
    reactJSX: "react/jsx-runtime",
    reactDOM: "react-dom"
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    extensionAlias: {
      ".js": [".js", ".ts"]
    }
  },
}
