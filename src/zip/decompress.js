import { createGunzip } from 'zlib'
import { pipeline } from 'stream'
import { createReadStream, createWriteStream } from 'fs'

import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const decompress = async () => {
    const gzip = createGunzip()
    const source = createReadStream(path.join(__dirname, 'files', 'archive.gz'))
    const destination = createWriteStream(path.join(__dirname, 'files', 'fileToCompress.txt'))
    
    pipeline(source, gzip, destination, (err) => {
      if (err) {
        throw new Error('UNZIP operation failed')
      }
    })
}

decompress()