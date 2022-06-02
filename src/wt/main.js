import { Worker } from 'worker_threads'
import os from 'os'

import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const workerCreate = (data, id) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker(path.join(__dirname, 'worker.js'), {
            workerData: data
        })
        const workerId = id
        worker.on('error', () => {
            console.log('message from worker', workerId, 'is error')
            const obj = { 'status': 'error', 'data': null }
            resolve(obj)
        })
        worker.on('message', (message) => {
            console.log('message from worker', workerId, 'is', message)
            const obj = { 'status': 'resolved', 'data': message }
            resolve(obj)
        })
    })
}

export const performCalculations = async () => {
    try {
        const resultArr = []
        const cpuCount = os.cpus().length
        let workerCount = 0
        let workerDataCount = 10
        console.log('Hello, i am the main worker, this cpu has', cpuCount, 'cores')
        while (workerCount < cpuCount) {
            resultArr.push(workerCreate(workerDataCount, workerCount))
            workerCount += 1
            workerDataCount += 1
        }
        const result = await Promise.all(resultArr)
        console.log(result)
    }
    catch (e) {
        console.log(e)
    }

}

performCalculations()