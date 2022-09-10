/**
 * @filename ./src/infrastructure/services/index.js
 * @name user.services
 * @description
 * client side services which really should be organized into "apps"
 *
 * ```diagram.yuml-ish
 * (start)
 *  ↳(api request handler)
 *    ↳(user api)
 *      ↳(client side service)
 *        ↳(interface elements)
 *          ↳(end)
 * ```
 */
import UserApi from '../../app/user'
import Logger from '../../infrastructure/utils/Logger'

const userApi = new UserApi()

/**
 * @name clientPostData
 * @todo pass object into clientPostData since it's after componentDidMount or whatever
 * @note postData initializes with '' according to line 9 but after the DOM update from
 * onInput, it has not been updated
 */
const postData = (_name, callback) => {
  const NAME = _name
  const payload = {
    name: NAME,
    job: 'surfer'
  }
  const payment = userApi.POST(payload)
  payment
    .then((res) => {
      const dataList = res.data
      Logger({ label: 'res', msg: [dataList] })
      const outcome = [dataList]
      callback(outcome)
    })
    .catch(Logger)
}

/**
 * getData.
 */
const getData = (callback) => {
  const payment = userApi.GET()
  payment
    .then((res) => {
      const dataList = res.data.data
      callback(dataList)
    })
    .catch(Logger)
}

/**
 * deleteData.
 */
const deleteData = (callback) => {
  const payment = userApi.DELETE()
  payment
    .then((res) => {
      const dataList = res.data.data
      callback(dataList)
    })
    .catch(Logger)
}

const services = {
  getData: getData,
  postData: postData,
  deleteData: deleteData
}

export default services

// EOF
