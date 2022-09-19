const fs = require('fs')
const log = console.log

/**
 * @constant
 * @default
 */
const LIST = []

/**
 * toFileSync.
 *
 * @param {} data
 * @param {} filename
 */
const toFileSync = (data, filename) =>
  fs.writeFileSync(`${filename}`, JSON.stringify(data, null, 2))

/**
 * readFileLines.
 *
 * @param {} filename
 */
const readFileLines = filename =>
  fs
    .readFileSync(filename)
    .toString('UTF8')
    .split('')

/**
 * increment.
 *
 * @param {} num
 */
const increment = (num) => {
  return new Promise((resolve, reject) => {
    try {
      resolve(num)
    } catch (error) {
      reject(error)
    }
  })
}

const count = readFileLines('./.count')

for (const index of count) {
  LIST.push(increment(index))
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
        const moduleCount = res.reduce((acc, ref) => {
          return Number(acc) + Number(ref.value)
        }, [])

        output['module.count'] = moduleCount

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
