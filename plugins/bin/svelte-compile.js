#!/usr/bin/env node

import glob from 'glob'
import * as path from 'path'
import replace from 'replace'

import { readFile, writeFile } from 'fs/promises'
import { compile } from 'svelte/compiler'

const __dirname = path.resolve()

const libsPath = path.resolve(__dirname, 'libs')

console.log('__dirname', __dirname, libsPath)

replace({
  regex: /\.svelte/,
  replacement: "",
  paths: [libsPath],
  recursive: true,
})

const sveltes = glob.sync('**/*.svelte', { cwd: libsPath })

const run = async () => {
  sveltes.map((svelte) => path.resolve(libsPath, svelte)).forEach(async (svelte) => {
    const code = (await readFile(svelte)).toString()
    const { js } = compile(code, { css: false })
    await writeFile(svelte.replace('.svelte', '.js'), js.code)

  })
}

run()
