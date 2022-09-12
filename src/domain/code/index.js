/**
 * @name Code
 * @description
 * @usage
 * const code = Code({
 * })
 */
import t from 'tcomb'
import HelpText from '../helpers/HelpText'

const helpText = new HelpText()

const Code = t.struct({
}, 'CategoryCode')

helpText.addHelpText(Code)

export default Code

// EOF
