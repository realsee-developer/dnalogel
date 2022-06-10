#!/usr/bin/env node

const glob = require('glob')
const path = require('path')
const replace = require('replace')
const { compile } = require('svelte/compiler')
const  { readFile, writeFile, unlink } = require('fs/promises')

const libsPath = path.resolve(path.resolve(), 'libs')

replace({
	regex: /\.svelte/g,
	replacement: "",
	paths: [libsPath],
	recursive: true,
})

const sveltes = glob.sync('**/*.svelte', { cwd: libsPath })

const run = async () => {
	for (const svelte1 of sveltes.map((svelte) => path.resolve(libsPath, svelte))) {
		const code = ( await readFile(svelte1) ).toString()
		const { js } = compile(code, { css: true })
		await writeFile(svelte1.replace('.svelte', '.js'), js.code)
		await unlink(path.resolve(libsPath, svelte1))
	}
}

run().then(r => console.log("✨ svelte compile done！ ✨"))
