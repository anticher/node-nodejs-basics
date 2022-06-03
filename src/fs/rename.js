import * as fs from 'fs/promises'
import * as path from 'path'
import { fileURLToPath } from 'url'
import { exists } from './exists.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const rename = async () => {
    try {
        const filePath = path.join(__dirname, 'files', 'wrongFilename.txt')
        const newPath = path.join(__dirname, 'files', 'properFilename.md')
        const fileExists = await exists(filePath)
        const newExists = await exists(newPath)
        if (newExists || !fileExists) {
            throw new Error('FS operation failed')
        } else {
            await fs.rename(filePath, newPath)
        }
    }
    catch (e) {
        if (e.code === 'ENOENT') {
            throw new Error('FS operation failed')
        }
        console.log("\x1b[31m", e)
    }
}

rename()