/**
 * @name actions
 */
export const GET_KEY = 'GET'
export const POST_KEY = 'POST'
export const OPTIONS_KEY = 'OPTIONS'

/**
 * @name GET_NAME
 * @param {} value
 */
export function GET_NAME (value) {
  return {
    type: GET_KEY,
    payload: value
  }
}

/**
 * @name POST_NAME
 * @param {} value
 */
export function POST_NAME (value) {
  return {
    type: POST_KEY,
    payload: value
  }
}

/**
 * @name OPTIONS
 * @param {} value
 */
export function OPTIONS (value) {
  return {
    type: OPTIONS_KEY,
    payload: value
  }
}

// EOF
