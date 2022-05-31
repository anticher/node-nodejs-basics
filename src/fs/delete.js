import * as fs from 'fs/promises'
import * as path from 'path'
import { fileURLToPath } from 'url'
import { exists } from './exists.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const remove = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToRemove.txt')
    const fileExists = await exists(filePath)
    if (fileExists) {
        await fs.unlink(filePath)
    } else {
        throw new Error('FS operation failed')
    }
}

remove()