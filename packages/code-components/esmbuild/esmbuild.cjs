const { join, resolve } = require("path")
const esbuild = require("esbuild")
const glob = require("glob")
const { esmPlugin } = require("./plugin.esm.cjs")
const { cssPlugin } = require("./plugin.css.cjs")

const color = (n, v) => `\x1b[${n}m${v}\x1b[0m`
const defaultPath = join(process.cwd(), "./src")
const defaultOutdir = join(process.cwd(), "./dist")

async function getBuildOptions(path) {
  const entryPoints = [
    glob.sync(join(__dirname, "../src/**/*.tsx")),
    glob.sync(join(__dirname, "../src/**/*.ts"))
  ].flat()

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

  const ctx = await esbuild.build({
    outdir: defaultOutdir,
    ...(await getBuildOptions(path))
  })
  console.log(`Build done at ${defaultOutdir}`)
  return ctx
}

let [a, b, command, path, option] = process.argv

;(async () => {
  if (command === "watch") {
    const ctx = await esbuild.context({
      outdir: "dist",
      ...(await getBuildOptions(defaultPath))
    })

    console.log("watching...")
    await ctx.watch()
  } else {
    await build()
  }
})()
