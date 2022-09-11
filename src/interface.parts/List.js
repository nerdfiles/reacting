/**
 *
 */
import Listing from './Listing'
import Person from '../domain/person'

const EMPTY_LIST = (
  <p>empty</p>
)

/**
 * @name List
 * @description
 * for data lists. it's probably in the living standard somewhere anyway.
 * @param {} props
 */
const List = (props) => {
  const DATA_LIST = props.dataList && props.dataList.length
  return (
    DATA_LIST
      ? DATA_LIST.map((dataRef, keyRef) => {
        const NAME = dataRef.first_name || dataRef.name
        const person = new Person({
          name: NAME,
          age: 0,
          tags: ['human']
        })

        return (
          <Listing
            key={keyRef}
            concept={person}
          />
        )
      })
      : EMPTY_LIST
  )
}

export default List

// EOF
