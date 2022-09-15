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
        const RESPONSE = response?.data
        const DATA = RESPONSE?.data
        const SELECTOR = [
          'ul',
          (byClass ?? '')
        ].join(GLUE)
        const $$element = document.querySelector(SELECTOR)
        const DATA_LIST = () => DATA.map((ref, key) => {
          const DATUM = `<li style='background-color: white;'>${ref.first_name}</li>`
          return DATUM
        })
        const CONTENT = DATA_LIST()
        // @todo React.findDOMNode
        $$element.innerHTML = CONTENT
        console.table(DATA)
      })
    return SUBJECT
  }
}

export default link

// EOF
