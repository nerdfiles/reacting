/**
 * @name HelpText
 * @description
 * saw django do it once
 */
class HelpText {
  /**
   * addHelpText.
   *
   * @param {} concept
   */
  addHelpText (concept) {
    /**
     * concept.prototype.additionalNameHelpText.
     */
    concept.prototype.additionalNameHelpText = function () {
      const contents = 'An additional name for a Person, can be used for a middle name.'
      return contents
    }
  }
}

export default HelpText

// EOF
