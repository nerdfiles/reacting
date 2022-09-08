/**
 * @name Profile
 * @description
 */
class Profile {
  /**
   * addProfile.
   *
   * @param {} concept
   */
  addProfile (concept) {
    /**
     * Person.prototype.getFullName.
     */
    concept.prototype.getFullName = function () {
      return `${this.name} ${this.surname}`
    }
  }
}

export default Profile

// EOF
