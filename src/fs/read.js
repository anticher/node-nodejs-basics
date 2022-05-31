import * as fs from 'fs/promises'
import * as path from 'path'
import { fileURLToPath } from 'url'
import { exists } from './exists.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const read = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt')
    const fileExists = await exists(filePath)
    if (fileExists) {
        const file = await fs.readFile(path.join(__dirname, 'files', 'fileToRead.txt'), 'utf8')
        console.log(file)
    } else {
        throw new Error('FS operation failed')
    }
}

read()