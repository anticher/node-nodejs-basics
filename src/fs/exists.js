import * as fs from 'fs/promises'

export const exists = async (path) => {  
    try {
      await fs.access(path)
      return true
    } catch {
      return false
    }
  }