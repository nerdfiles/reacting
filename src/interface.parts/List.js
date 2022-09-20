/**
 * @filepath ./src/interface.parts/List.js
 * @fileoverview yet another list web component
 * @name List
 * @function
 * @description a singular ❮list❯ implementation in reactjs.
 * @license wtfpl, version 2
 * @version 0.0.0-novel.0
 * @since 0.0.0-novel.0
 * @kind constant
 * @author aha <patagnome@protonmail.com>
 * @todo none
 * @param props - properties for a bespoke list element.
 * @param props[dataList] - yet another mapping.
 * @returns {HTMLLIElement} markup.
 */
import Listing from './Listing'
import Person from '../domain/person'

const EMPTY_LIST = (
  <li>
    <span
      class='m-view-icon__default__'
      aria-label='empty'
    ></span>
  </li>
)

/**
 * @name List
 * @description for data lists. it's probably in the living standard somewhere anyway. 
 * @param {} props
 */
const List = (props) => {
  /**
   * @constant
   * @default
   */
  const DATA_LIST = props?.dataList

  return (
    DATA_LIST?.length
      ? DATA_LIST.map((dataRef, keyRef) => {
        const NAME = dataRef.first_name || dataRef.name
        const nullPerson = {
          name: NAME,
          age: 0,
          tags: ['human']
        }
        const person = new Person(nullPerson)

        return (
          <Listing
            concept={person}
            key={keyRef}
          />
        )
      })
      : EMPTY_LIST
  )
}

export default List

// EOF
