import * as fs from 'fs/promises'
import * as path from 'path'
import { fileURLToPath } from 'url'
import { exists } from './exists.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const list = async () => {
    const folderPath = path.join(__dirname, 'files')
    const folderExists = await exists(folderPath)

    if (folderExists) {
        const files = await fs.readdir(folderPath)
        console.log(files)
    } else {
        throw new Error('FS operation failed')
    }
}

list()