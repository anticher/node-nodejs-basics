import * as fs from 'fs/promises'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const { createHmac } = await import('crypto')

export const calculateHash = async () => {
    const secret = 'abc'
    const text = await fs.readFile(path.join(__dirname, 'files', 'fileToCalculateHashFor.txt'), 'utf8')
    const hash = createHmac('sha256', secret)
        .update(text)
        .digest('hex')
    console.log(hash)
}

calculateHash()