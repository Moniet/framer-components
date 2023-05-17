import { createClient } from '@supabase/supabase-js'
import * as glob from 'glob'
import { join } from 'path'
import dotenv from 'dotenv'
import { execSync } from 'child_process'
import fs from 'fs/promises'
dotenv.config()
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

const s3Client = new S3Client({
  region: 'us-east-1',
  endpoint: 'https://0acea4c6e5c7538a87b39d1b161e32ec.r2.cloudflarestorage.com',
  credentials: {
    accessKeyId: process.env.CF_ACCESS_ID as string,
    secretAccessKey: process.env.CF_SECRET_ACCESS_KEY as string,
  },
})

;(async () => {
  const packageVersion = execSync('pnpm view code-components version').toString()
  const version = 'v' + packageVersion?.[0]
  const entryPoints = [
    glob.sync(join(process.cwd(), version, '**/*.tsx')),
    glob.sync(join(process.cwd(), version, '**/*.ts')),
    glob.sync(join(process.cwd(), version, '**/*.js')),
  ]
    .flat()
    .map((path) => {
      const index = path.indexOf('v1')
      return [path.slice(index), path]
    })

  const publicPaths = glob.sync(join(process.cwd(), 'public', '*')).map((path) => {
    const index = path.indexOf('public')
    return version + '/' + path.slice(index)
  })

  for (let [path, origPath] of entryPoints) {
    const jsData = await fs.readFile(origPath)

    await s3Client.send(
      new PutObjectCommand({
        Body: jsData.toString(),
        Bucket: 'jsx',
        Key: path,
        ContentType: /\.(t|j)sx?/.test(path) ? 'text/javascript' : undefined,
      })
    )
  }

  for (let pubPath of publicPaths) {
    const data = await fs.readFile(pubPath)

    await s3Client.send(
      new PutObjectCommand({
        Body: data,
        Bucket: 'jsx',
        Key: pubPath,
      })
    )
  }
})()
