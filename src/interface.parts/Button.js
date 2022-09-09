/**
 * @name Button
 * @description
 * @param {Object.props}
 */
const Button = (props) => {
  const helpText = props.concept.additionalNameHelpText()
  return (
    <button
      title={helpText}
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
