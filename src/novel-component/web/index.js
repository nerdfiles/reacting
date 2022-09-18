/**
 * @name NovelComponentWeb
 * @description novel-component exports something but "web" is the "goto" file 
 * to see how it should be implemented. generally, the component is
 * "un-opinionated" in its configured design assumption. the goal is to ward
 * off "component"-based thinking and comprehension in designing interfaces.
 * "component" is a metaphor for containment. in the interface we are less
 * interested in what-has-what than what-holds-what. indeed, "what" happens is 
 * described rather than "how", but further specificity implies difference in 
 * relatedness between what's what. what the pattern here is concerned with
 * being "un-opinionated" about is the "what-has-what" while being very opinionated
 * about the "what-holds-what." what-holds-what? the interface holds information
 * about the occasion of its use: this is "pressed", that is "opened", or those
 * are "disabled." all such development is trivial so long as category mistakes
 * do not enter and solution types are not misapplied to the structure of the
 * space of possibility or problem space which conditions for its specializability,
 * exemplification and realizability.
 * @returns {Element} .
 */
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
