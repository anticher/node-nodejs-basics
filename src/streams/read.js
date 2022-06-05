import { createReadStream } from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const read = async () => {
    try {
        const readableStream = createReadStream(path.join(__dirname, 'files', 'fileToRead.txt'), 'utf8')
        readableStream.pipe(process.stdout)
    }
    catch (e) {
        console.log("\x1b[31m", e)
    }
}

read()