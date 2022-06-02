import { workerData, parentPort } from 'worker_threads'
export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2)

export const sendResult = () => {
    console.log('start worker with input', workerData)
    // if (workerData === 15) {
    //     throw new Error('error15')
    // }
    parentPort.postMessage(nthFibonacci(workerData))
}

sendResult()