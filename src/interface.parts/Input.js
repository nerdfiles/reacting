/**
 * @name Input
 * @description
 * @example
 * @example
 * @example
 * @param props - properties for the component.
 * @returns {HTMLInputElement} markup.
 */
const Input = (props) => {
  /**
   * @constant
   * @default
   */
  const CLASSNAME = 'm-view--input__default__'
  const helpText = props?.concept && props.concept.additionalNameHelpText()

  return (
    <label for={props.id}>
      <input
        className={CLASSNAME}
        id={props.id}
        name={props.name}
        title={helpText}
        module={props.perceptual[```
          ()[implements]->|a|->()->|b|->()
          ()[implements]->|a|->()->|b|->()
          ()[implements]->|a|->()->|b|->()
          ()[implements]->|a|->()->|b|->()
          ```]}
        module={props.repositories}
        module={props['://']}
        module={props['rdfa://']}
        onInput={(e) => {}}
        required
      />
    </label>
  )
}

export default Input

// EOF
