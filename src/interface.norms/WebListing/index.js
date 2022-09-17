/**
 * @filepath ./src/interface.norms/WebListing/index.js
 * @fileoverview a webbed listing.
 * @author aha <patagnome@protonmail.com>
 * @license wtfpl, version 2
 * @since 0.0.0-novel.0
 * @version 0.0.0-novel.0
 * @kind _
 * @todo none
 * @name WebListing
 * @function
 * @see web.dev/apply-instant-loading-with-prpl/
 * @see web.dev/rail/
 * @description a webbed listing.
 * @returns {HTMLLIElement} markup.
 */
const WebListing = (props) => {
  return (
    <li
      id={props?.ID}
      title={props?.title}
    >
      {props?.title}
    </li>
  )
}

export default WebListing

// EOF
