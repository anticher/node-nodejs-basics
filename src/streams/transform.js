import { Transform } from 'stream'

const customTransform = new Transform({
    transform(data, encoding, callback) {
        if (encoding !== 'buffer') {
            return
        }
        const resultString = data
            .toString('utf8')
            .split('')
            .reverse()
            .join('')
            .trim()
        callback(null, resultString)
    }
})

export const transform = async () => {
    try {
        process.stdin.pipe(customTransform).pipe(process.stdout);
    }
    catch (e) {
        console.log("\x1b[31m", e)
    }
}

transform()