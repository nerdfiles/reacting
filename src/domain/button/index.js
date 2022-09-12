/**
 * @name Button
 * @description
 * @usage
 * const code = Button({
 * })
 */
import t from 'tcomb'
import HelpText from '../helpers/HelpText'

const helpText = new HelpText()

const Button = t.struct({
  title: t.maybe(t.String),
  required: t.maybe(t.Boolean),
  type: t.maybe(t.String)
}, 'Button')

helpText.addHelpText(Button)

export default Button

// EOF
