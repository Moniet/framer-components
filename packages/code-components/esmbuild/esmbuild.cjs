const { execSync } = require("child_process")
const { join } = require("path")
const esbuild = require("esbuild")
const glob = require("glob")
const { esmPlugin } = require("./plugin.esm.cjs")
const { cssPlugin } = require("./plugin.css.cjs")

const defaultPath = join(process.cwd(), "./src")

async function getBuildOptions() {
  const entryPoints = [
    glob.sync(join(__dirname, "../src/**/*.tsx")),
    glob.sync(join(__dirname, "../src/**/*.ts"))
  ].flat()

  return {
    entryPoints,

    minify: true,
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
  const gitBranch = execSync("git branch --show-current")
    .toString()
    .replace("\n", "")
  const outDir = join(process.cwd(), gitBranch)

  const ctx = await esbuild.build({
    outdir: outDir,
    ...(await getBuildOptions())
  })
  console.log(`Build done at ${outDir}`)
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
  } else if (command === "dist") {
    await esbuild.build({
      outdir: "dist",
      ...(await getBuildOptions(defaultPath))
    })
  } else {
    await build()
    console.log("build completed")
  }
})()
