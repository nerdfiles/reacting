/**
 * @filepath ./src/interface.parts/Link.js
 * @fileoverview _.
 * @author aha <patagnome@protonmail.com>
 * @license wtfpl, version 2
 * @since 0.0.0-novel.0
 * @version 0.0.0-novel.0
 * @kind _.
 * @todo none
 * @name Link
 * @function
 * @see web.dev/apply-instant-loading-with-prpl/
 * @see web.dev/rail/
 * @description _.
 * @todo browse _.
 * @returns {HTMLLinkElement} markup.
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
