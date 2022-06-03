import * as fs from 'fs/promises'
import * as path from 'path'
import { fileURLToPath } from 'url'
import { exists } from './exists.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const makeCopy = async (from, to) => {
    fs.mkdir(to)
    const files = await fs.readdir(from)
    for (const file of files) {
        await fs.copyFile(path.join(from, file), path.join(to, file))
    }
}

export const copy = async () => {
    try {
        const folderPath = path.join(__dirname, 'files')
        const copyPath = path.join(__dirname, 'files_copy')

        const folderExists = await exists(folderPath)
        const copyExists = await exists(copyPath)
        if (copyExists || !folderExists) {
            throw new Error('FS operation failed')
        } else {
            makeCopy(folderPath, copyPath)
        }
    }
    catch (e) {
        if (e.code === 'ENOENT') {
            throw new Error('FS operation failed')
        }
        console.log("\x1b[31m", e)
    }
}

copy()