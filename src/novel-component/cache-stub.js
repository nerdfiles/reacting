/**
 * @filepath ./src/novel-component/cache-stub.js
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
import { ACTION_KEY } from './actions'
const act = (occasion = [], action) => {
  switch (action.type) {
    case ACTION_KEY:
      return {
        key: 'value'
      }
    default:
      break
  }
  return occasion
}

export default act

// EOF
