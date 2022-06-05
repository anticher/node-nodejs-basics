import * as fs from 'fs/promises'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const read = async () => {
    try {
        const filePath = path.join(__dirname, 'files', 'fileToRead.txt')
        const file = await fs.readFile(filePath, 'utf8')
        console.log(file)
    }
    catch (e) {
        if (e.code === 'ENOENT') {
            throw new Error('FS operation failed')
        }
        console.log("\x1b[31m", e)
    }

}

read()