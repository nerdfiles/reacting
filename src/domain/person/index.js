/**
 * @name Person
 * @usage
 * const person = Person({
 *   surname: 'smith'
 * })
 */
import t from 'tcomb'

const Person = t.struct({
  name: t.String,
  middle_name: t.maybe(t.String),
  surname: t.maybe(t.String),
  age: t.Integer,
  tags: t.list(t.String)
}, 'Person')

Person.prototype.getFullName = function () {
  return `${this.name} ${this.surname}`
}

export default Person

// EOF
