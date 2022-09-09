/**
 * @name Person
 * @usage
 * const person = Person({
 *   surname: 'smith'
 * })
 */
import t from 'tcomb'
import HelpText from '../helpers/HelpText'
import Profile from '../helpers/Profile'

const profile = new Profile()
const helpText = new HelpText()

const Person = t.struct({
  additionalName: t.maybe(t.String),
  name: t.String,
  middleName: t.maybe(t.String),
  surname: t.maybe(t.String),
  age: t.Integer,
  tags: t.list(t.String)
}, 'Person')

profile.addProfile(Person)
helpText.addHelpText(Person)

export default Person

// EOF
