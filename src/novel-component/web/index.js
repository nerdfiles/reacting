/// @group NovelComponentWeb
/// @returns {Element} .
const NovelComponentWeb = (props) => {
  return (
    <span
      title={props?.title}
      href={props?.href}
    >
      {props?.title}
    </span>
  )
}

export default NovelComponentWeb

// EOF
