#!/usr/bin/env node

import glob from 'glob'
import * as path from 'path'
import replace from 'replace'

import { readFile, writeFile, unlink } from 'fs/promises'
import { compile } from 'svelte/compiler'

const __dirname = path.resolve()

const libsPath = path.resolve(__dirname, 'libs')

replace({
	regex: /\.svelte/g,
	replacement: "",
	paths: [libsPath],
	recursive: true,
})

const sveltes = glob.sync('**/*.svelte', { cwd: libsPath })

const run = async () => {
	sveltes.map((svelte) => path.resolve(libsPath, svelte)).forEach(async (svelte) => {
		const code = ( await readFile(svelte) ).toString()
		const { js } = compile(code, { css: true })
		await writeFile(svelte.replace('.svelte', '.js'), js.code)
		
		await unlink(path.resolve(libsPath, svelte))
	})
}

run()
