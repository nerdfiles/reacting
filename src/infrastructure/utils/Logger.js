/**
 * @name Logger
 * @description a simple log util
 */
const Logger = (thing) => {
  if (thing && !thing.label && !thing.msg) {
    return console.table(thing)
  }
  const sep = '----------'
  const LABEL = (thing && thing.label) || '🐌'
  const MSG = thing && thing.msg
  const INC = ':'
  console.log(sep)
  console.log(LABEL + INC, MSG)
  console.log(sep)
}

export default Logger

// EOF
