export const parseEnv = () => {
    const keys = Object.keys(process.env)
    const result = keys
        .filter((key) => key.startsWith('RSS_'))
        .map((item) => item + '=' + process.env[item])
    console.log(result.join('; '))
}

parseEnv()