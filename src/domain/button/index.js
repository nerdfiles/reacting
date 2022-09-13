/**
 * @name Button
 * @description Button.
 * @usage
 * const code = Button({
 * })
 */
import t from 'tcomb'
import HelpText from '../helpers/HelpText'

const helpText = new HelpText()

const concept = {
  'aria-expanded': t.maybe(t.Boolean),
  'aria-controls': t.maybe(t.String),
  'aria-pressed': t.maybe(t.String),
  class: t.maybe(t.String),
  id: t.maybe(t.String),
  name: t.maybe(t.String),
  required: t.maybe(t.Boolean),
  tabindex: t.maybe(t.String),
  title: t.maybe(t.String),
  type: t.maybe(t.String),
  value: t.maybe(t.String),
  favicon: t.maybe(t.Boolean)
}

const Button = t.struct(concept, 'Button')

helpText.addHelpText(Button)

export default Button

// EOF
