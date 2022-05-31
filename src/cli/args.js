export const parseArgs = () => {
    const args = process.argv.slice(2)
    const result = []
    args.forEach((item, index) => {
        if (index % 2 === 0 && item.startsWith('--')) {
            result.push(item.substring(2) + ' is ' + args[index + 1])
        }
    })
    console.log(result.join(', '))
}

parseArgs()