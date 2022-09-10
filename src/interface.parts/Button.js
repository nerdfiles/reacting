/**
 * @name Button
 * @description
 * @param {Object.props}
 */
const Button = (props) => {
  const RANDSCOPE = 1000000
  const glue = ''
  const _id = [
    'element_',
    String(Math.floor(Math.random() * RANDSCOPE))
  ].join(glue)
  return (
    <button
      id={_id}
      onClick={(e) => {
        props.act()
        e.preventDefault()
      }}
    >
      {props.textLabel}
    </button>
  )
}

export default Button

// EOF
