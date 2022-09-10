/**
 * @name Button
 * @description
 * @param {Object.props}
 */
const Button = (props) => {
  const RANDMAX = 1000000
  const glue = ''
  const _id = [
    'element_',
    String(Math.floor(Math.random() * RANDMAX))
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
