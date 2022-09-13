/**
 * @name actions
 */
export const ACTION_KEY = 'ACTION_KEY'

export function ACTION_NAME (value) {
  return {
    type: ACTION_KEY,
    payload: value
  }
}

// EOF
