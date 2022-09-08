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

const Person = t.struct({
  additionalName: t.String,
  name: t.String,
  middle_name: t.maybe(t.String),
  surname: t.maybe(t.String),
  age: t.Integer,
  tags: t.list(t.String)
}, 'Person')

Profile.addProfile(Person)
HelpText.addHelpText(Person)

export default Person

// EOF
