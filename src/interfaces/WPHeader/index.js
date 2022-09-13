/**
 * @name WPHeader
 * @description footer 
 * @param {Object.props}
 */
const WPHeader = (props) => {
  /**
   * @constant
   * @default
   */
  const HTMLHEADER_CLASS = 'm-view--wpheader__default__'
  /**
   * @constant
   * @default
   */
  const HTMLHEADINGELEMENT_CLASS = 'm-view--copyline__default__'

  return (
    <header
      className={HTMLHEADER_CLASS}
      itemScope
      itemType='https://schema.org/WPHeader'
    >
      <h1 className={HTMLHEADINGELEMENT_CLASS}>header</h1>
    </header>
  )
}

export default WPHeader

// EOF
