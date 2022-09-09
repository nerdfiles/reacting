/**
 * @name WPHeader
 * @description
 * footer
 * @param {Object.props}
 */
const WPHeader = ({ props }) => {
  return (
    <header
      className='m-view--wpheader__default__'
      itemScope
      itemType='https://schema.org/WPHeader'
    >
      <h1 className='m-view--line__default__'>header</h1>
    </header>
  )
}

export default WPHeader

// EOF
