/**
 * @name Input
 * @description
 */
const Input = (props) => {
  return (
    <label for={props.id}>
      <input
        id={props.id}
        name={props.name}
        onInput={(e) => {}}
        required
      />
    </label>
  )
}

export default Input

// EOF
