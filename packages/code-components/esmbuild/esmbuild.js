const { join, resolve } = require("path")
const esbuild = require("esbuild")
const glob = require("glob")
const { esmPlugin } = require("./plugin.esm")
const { cssPlugin } = require("./plugin.css")

const color = (n, v) => `\x1b[${n}m${v}\x1b[0m`
const defaultPath = join(process.cwd(), "./src")
const defaultOutdir = join(process.cwd(), "./dist")

async function getBuildOptions(path) {
  const entryPoints = glob.sync(join(__dirname, "../src/**/*.tsx"))

  console.log("entry points", entryPoints)

  return {
    entryPoints,
    // minify: true,
    format: "esm",
    bundle: true,
    external: [
      "react",
      "react/jsx-runtime",
      "react-dom",
      "framer",
      "framer-motion"
    ],
    plugins: [esmPlugin, cssPlugin({ inject: true })]
  }
}

async function build() {
  const path = defaultPath

  await esbuild.build({
    outdir: defaultOutdir,
    ...(await getBuildOptions(path))
  })
  console.log(`Build done at ${defaultOutdir}`)
}

async function serve(path = defaultPath, port = 8000) {
  function onRequest(info) {
    const status = color(
      info.status.toString().startsWith("2") ? 32 : 31,
      info.status
    )
    const line = color(
      37,
      `${info.method} ${status} ${info.path} [${info.timeInMS}ms]`
    )
    console.log(line)
  }

  await esbuild.serve({ port, onRequest }, await getBuildOptions(path))
  console.log(`Server listening at http://127.0.0.1:${port}`)
}

build()
