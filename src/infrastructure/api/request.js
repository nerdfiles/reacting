import axios from 'axios'

/**
 * @name request
 * @param {string} method
 * @param {object} payload
 */
const request = (entityName, method, payload) => {
  return new Promise((resolve, reject) => {
    const task = axios[method]
    const baseUrl = 'https://reqres.in/api'
    // @todo generalize the entity to apps according to domain-driven design
    const entity = entityName || 'users'
    const glue = '/'
    const endpoint = [baseUrl, entity].join(glue)

    task(endpoint, payload || null)
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        console.log(error)
      })
  })
}

export default request

// EOF
