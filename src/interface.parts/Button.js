/**
 * @name Button
 * @description
 * @param {Object.props}
 */
const Button = (props) => {
  return (
    <button
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
