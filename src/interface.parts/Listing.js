/**
 * @filepath ./src/interface.parts/Listing.js
 * @fileoverview some reactjs bullshit for a list.
 * @function
 * @name Listing
 * @author aha <patagnome@protonmail.com>
 * @license wtfpl, version 2
 * @since 0.0.0-novel.0
 * @todo none
 * @version 0.0.0-novel.0
 * @description a rough-and-ready, very stable list element that serves part 
 * to a list. it's currently accepting a title attribute for no particular 
 * reason but demonstration purposes.
 * @summary a function component returning a list element in jsx for
 * reactjs.
 * @kind constant
 * @borrows concept.additionalNameHelpText as title
 * @example
 * <Listing property={something} />
 * @example
 * <Listing
 *   property={something}
 *   withAnother={something}
 * />
 * @example
 * <Listing 
 *   className='non-presentational-name-for-the-element'
 *   title={copyText}
 * />
 * @param {Object} props - props for a listing.
 * @param {Object} props.concept - concept for props in a listing.
 * @returns {HTMLLIElement} returns an `<li>` with some hubris for a text node.
 */
const Listing = (props) => {
  /**
   * @constant
   * @default
   */
	const CLASSNAME = 'm-view--listing__default__'
	const helpText = props?.concept && props.concept.additionalNameHelpText()
  return (
    <li
      className={CLASSNAME}
      title={helpText}
    >
      {props.concept.name}
    </li>
  )
}

export default Listing

// EOF
