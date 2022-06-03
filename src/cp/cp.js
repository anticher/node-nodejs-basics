import child_process from 'child_process'

import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const spawnChildProcess = async (args) => {
    try {
        const child = child_process.fork(path.join(__dirname, 'files', 'script.js'), args, { silent: true })

        child.stdout.on('data', (data) => {
            process.stdout.write(`parent stdout => ${data}`)
        })
        process.stdin.on('data', (data) => {
            child.stdin.write(data)
        })
    }
    catch (e) {
        console.log("\x1b[31m", e)
    }
}

spawnChildProcess(['1', '2', '3'])