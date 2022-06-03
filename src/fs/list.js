import * as fs from 'fs/promises'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const list = async () => {
    try {
        const folderPath = path.join(__dirname, 'files')
        await fs.readdir(folderPath)
        const files = await fs.readdir(folderPath)
        console.log(files)
    }
    catch (e) {
        if (e.code === 'ENOENT') {
            throw new Error('FS operation failed')
        }
        console.log("\x1b[31m", e)
    }

}

list()