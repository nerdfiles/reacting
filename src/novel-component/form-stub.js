/**
 * @filepath ./src/novel-component/form-stub.js
 * @fileoverview a task-based interface.
 * @author aha <patagnome@protonmail.com>
 * @description a task-based interface for https://schema.org/WebActivityHistory.
 * @see https://twitchard.github.io/posts/2021-04-24-behavior-constraining-features.html
 * @summary a task-based interface.
 * @name act
 * @function
 * @version 0.0.0-novel.0
 * @since 0.0.0-novel.0
 * @param {} occasion.
 * @param {} action.
 * @returns Array .
 */
import {
  POST_KEY,
  OPTIONS_KEY,
  GET_KEY
} from './form-actions'

const act = (occasion = [], action) => {
  switch (action.type) {
    case OPTIONS_KEY:
      return {
        next: ''
      }
    case GET_KEY:
      return {
        next: ''
      }
    case POST_KEY:
      return {
        next: ''
      }
    default:
      break
  }
  return occasion
}

export default act

// EOF
