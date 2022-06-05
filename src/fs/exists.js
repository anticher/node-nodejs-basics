import * as fs from 'fs/promises'

export const exists = async (path) => {  
    try {
      await fs.stat(path)
      return true
    } catch(e) {
      if (e.code === 'ENOENT') {
        return false
      }
      console.log('exists.js error', e.code)
    }
  }