import * as fs from 'fs/promises'
import * as path from 'path'
import { fileURLToPath } from 'url'
import { exists } from './exists.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const create = async () => {
    const filePath = path.join(__dirname, 'files', 'fresh.txt')
    const fileExists = await exists(filePath)
    if (fileExists) {
        throw new Error('FS operation failed')
    } else {
        await fs.writeFile(filePath, 'I am fresh and young')
    }
}

create()