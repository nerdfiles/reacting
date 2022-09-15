/**
 * @filepath ./src/assets/interface.scripts/link.js
 * @name link
 * @function
 * @author aha <patagnome@protonmail.com>
 * @version 0.0.0-novel.0
 * @since 0.0.0-novel.0
 * @description String('🔎 ' + SUBJECT + ') to say the least, the first GET 
 * should be "quicker" (more responsive because cached)'.
 * 
 * consider [example].
 * [example]: https://reqres.in/api/users?page=2;http://example.com/kite{?s,p,o,g}
 */
import axios from 'axios'
import Ramda from 'ramda'
import Ramdash from 'ramdash'

const link = (sub, byClass) => {
  const GLUE = ''
  const S = 's'
  const P = 'p'
  const O = 'o'
  const G = 'g'
  const SEP = '/'
  const SUB = sub ?? '{NOUN:https://thenounproject.com/icon/ankh-3550481/}'
  const endpoint = [
    'http://example.com',
    SEP,
    SUB, 
    '{', '?',
    (S ?? S),
    ',', P,
    ',', O,
    ',', G, '}'
  ].join(GLUE)

  return (e) => {
    const ELEMENT = e?.target
    const HREF = ELEMENT.href
    const SUBJECT = [HREF, ';', endpoint].join(GLUE)
    axios
      .get(SUBJECT)
      .then((response) => {
        /**
         * @constant
         * @default
         */
        const RESPONSE = response?.data

        /**
         * @constant
         * @default
         */
        const DATA = RESPONSE?.data

        /**
         * @constant
         * @default
         */
        const SELECTOR = [
          'ul',
          (byClass ?? '')
        ].join(GLUE)

        /**
         * @name DATA_LIST
         * @constant
         * @default
         * @function
         * @description a templating function.
         * @returns {HTMLLIElement} tag for a List element; i.e, String as 
         * (syntax) → (meaning) mapping.
         */
        const DATA_LIST = () => DATA.map((ref, key) => {
          const DATUM = `<li style='background-color: white;'>${ref.first_name}</li>`
          return DATUM
        })

        /**
         * @constant
         * @default
         */
        const CONTENT = DATA_LIST()

        const $$element = document.querySelector(SELECTOR)

        // @todo React.findDOMNode
        $$element.innerHTML = CONTENT

        console.table(DATA)
      })

    return SUBJECT
  }
}

export default link

// EOF
