import axios from 'axios'

/**
 * @name request
 * @param {string} method
 * @param {object} payload
 */
const request = (ent,  method, payload) => {
  return new Promise((resolve, reject) => {
    const task = axios[method]
    const baseUrl = 'https://reqres.in/api'
    const entity = ent || 'users' // @todo generalize the entity to apps according to domain-driven design
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
