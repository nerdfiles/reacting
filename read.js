const fs = require('fs')
const log = console.log

const toFileSync = (data, filename) =>
  fs.writeFileSync(`${filename}`, JSON.stringify(data, null, 2))
/**
 * @constant
 * @default
 */
const LIST = []

const readFileLines = filename =>
  fs
    .readFileSync(filename)
    .toString('UTF8')
    .split('')

const count = readFileLines('./.count')

// for (const index of count) {
//   LIST.push(index)
// }

// const COUNT = LIST.join('')

// log(LIST)
// log(COUNT)

const inc = (num) => {
  return new Promise((resolve, reject) => {
    try {
      resolve(num)
    } catch (error) {
      reject(error)
    }
  })
}

for (const index of count) {
  LIST.push(inc(index))
}

Promise
  .allSettled(LIST)
  .then((res) => {
    const filtered = res.filter((ref) => {
      return ref
    })

    Promise.all(filtered)
      .then((res) => {
        const FILEPATH = './.module.report.json'
        const output = {}
        const c = res.reduce((acc, ref) => {
          return Number(acc) + Number(ref.value)
        }, [])

        output['module.count'] = c

        toFileSync(output, FILEPATH)
        log('written:', FILEPATH)
      })
      .catch((error) => {
        log(error)
      })
  })
  .catch((error) => {
    log(error)
  })

// EOF
