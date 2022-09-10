/**
 * @name Listing
 */
const Listing = (props) => {
  const helpText = props?.concept && props.concept.additionalNameHelpText()
  return (
    <li
      className='m-view--listing__default__'
      title={helpText}
    >
      {props.concept.name}
    </li>
  )
}

export default Listing

// EOF
