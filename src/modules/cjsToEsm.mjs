import * as path from 'path'
import { release, version } from 'os'
import { createServer as createServerHttp } from 'http'
import './files/c.js'

import { fileURLToPath } from 'url'
import { createRequire } from 'module'
const customReq = createRequire(import.meta.url)
const unknownObjectA = customReq("./files/a.json")
const unknownObjectB = customReq("./files/b.json")

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const random = Math.random()

export let unknownObject

if (random > 0.5) {
    unknownObject = unknownObjectA
} else {
    unknownObject = unknownObjectB
}

console.log(`Release ${release()}`)
console.log(`Version ${version()}`)
console.log(`Path segment separator is "${path.sep}"`)
console.log(`Path to current file is ${__filename}`)
console.log(`Path to current directory is ${__dirname}`)

export const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted')
})
