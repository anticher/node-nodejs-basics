import { createWriteStream } from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const write = async () => {
    const writeableStream = createWriteStream(path.join(__dirname, 'files', 'fileToWrite.txt'), 'utf8')
    process.stdin.pipe(writeableStream)
}

write()