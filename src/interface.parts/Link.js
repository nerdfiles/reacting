/**
 * @name Link
 */
const Link = (props) => {
  return (
    <link
      className={props.byClass}
      rel='preload'
      onLoad={props.init}
      href={props.href}
      as='script'
    />
  )
}

export default Link

// EOF
