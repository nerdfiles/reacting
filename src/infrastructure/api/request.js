/**
 * @filepath ./src/infrastructure/api/request.js
 * @author aha <patagnome@protonmail.com>
 * @version 0.0.0-novel.0
 * @since 0.0.0-novel.0
 * @name request
 * @description request handler.
 * @param {string} method
 * @param {object} payload
 */
import axios from 'axios'

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
