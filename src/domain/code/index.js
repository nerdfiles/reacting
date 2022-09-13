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

const concept = {
}

const Code = t.struct(concept, 'CategoryCode')

helpText.addHelpText(Code)

export default Code

// EOF
