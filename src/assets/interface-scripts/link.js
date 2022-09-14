import axios from 'axios'

/**
 * @name link
 * @description link.
 * @version 0.0.0-novel.0
 * @since 0.0.0-novel.0
 * @kind function
 * @description consider [example].
 * [example]: https://reqres.in/api/users?page=2;http://example.com/kite{?s,p,o,g}
 */
const link = (sub) => {
  const GLUE = ''
  const S = 's'
  const P = 'p'
  const O = 'o'
  const G = 'g'
  const SEP = '/'
  const SUB = sub ?? '{noun:https://thenounproject.com/icons/}'
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
    console.log('🔎 ' + SUBJECT + ' to say the least, the first GET should be "quicker" (more responsive because cached)')
    axios
      .get(SUBJECT)
      .then((response) => {
        const RESPONSE = response?.data
        const DATA = RESPONSE?.data
        const q = document.querySelector('.m-view--datalist__default__')
        q.innerHTML = ['<code style="background-color: white;">', JSON.stringify(DATA), '</code>'].join(GLUE)
      })
    return SUBJECT
  }
}

export default link

// EOF
