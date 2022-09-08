import './App.css'
import { useState } from 'react'
import WPHeader from './interfaces/WPHeader'
import WPFooter from './interfaces/WPFooter'
import Button from './interface.parts/Button'
import Api from './api'
import Logger from './utils/Logger'

/**
 * App.
 */
function App () {
  const api = new Api()
  const [clientGetData, clientGetSetData] = useState([])
  const [clientPostData, clientPostSetData] = useState('')
  const EMPTY_LIST = (
    <p>empty</p>
  )
  const DATA_LIST = clientGetData && clientGetData.length

  /**
   * clientPostData.
   * @todo pass object into clientPostData since it's after componentDidMount or whatever
   * @note postData initializes with '' according to line 9 but after the DOM update from
   * onInput, it has not been updated
   */
  const postData = (_name) => {
    const NAME = _name
    const payload = {
      name: NAME,
      job: 'surfer'
    }
    const payment = api.POST(payload)
    payment
      .then((res) => {
        const dataList = res.data
        Logger({ label: 'res', msg: [dataList] })
        clientGetSetData([dataList])
      })
      .catch(Logger)
  }

  /**
   * getData.
   */
  const getData = () => {
    const payment = api.GET()
    payment
      .then((res) => {
        const dataList = res.data.data
        clientGetSetData(dataList)
      })
      .catch(Logger)
  }

  return (
    <div
      itemScope
      itemType='https://schema.org/WebApplication'
      className='App'
      id='top'
    >
      <WPHeader />

      <main>
        <input onInput={(e) => clientPostSetData(e.currentTarget.value)} />
        <ul>
          {
            DATA_LIST
              ? clientGetData.map((dataRef, keyRef) => {
                const NAME = dataRef.first_name || dataRef.name
                return (
                  <li key={keyRef}>
                    {NAME}
                  </li>
                )
              })
              : EMPTY_LIST
          }
        </ul>
      </main>

      <nav>
        <ul>
          <li>
            <Button
              textLabel='get'
              act={() => getData()}
            />
          </li>
          <li>
            <Button
              textLabel='post'
              act={() => postData(clientPostData)}
            />
          </li>
        </ul>
      </nav>

      <WPFooter />
    </div>
  )
}

export default App
