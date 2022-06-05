import { createGzip } from 'zlib'
import { pipeline } from 'stream'
import { createReadStream, createWriteStream } from 'fs'

import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const compress = async () => {    
  try {
    const gzip = createGzip()
    const source = createReadStream(path.join(__dirname, 'files', 'fileToCompress.txt'))
    const destination = createWriteStream(path.join(__dirname, 'files', 'archive.gz'))
    pipeline(source, gzip, destination, (err) => {
      if (err) {
        throw new Error('ZIP operation failed')
      }
    })
  }
  catch (e) {
    console.log("\x1b[31m", e)
  }
}

compress()