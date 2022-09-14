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
  return function (e) {
    const HREF = e.target.href
    const SUBJECT = [HREF, ';', endpoint].join(GLUE)
    console.log(SUBJECT)
    return SUBJECT
  }
}

export default link

// EOF
