import './App.scss'
import { useState } from 'react'
import WPHeader from './interfaces/WPHeader'
import WPFooter from './interfaces/WPFooter'
import Button from './interface.parts/Button'
import UserApi from './app/user'
import Logger from './utils/Logger'

/**
 * @name App
 * @description
 */
function App () {
  const userApi = new UserApi()
  const [clientGetData, clientGetSetData] = useState([])
  const [clientPostData, clientPostSetData] = useState({})
  const [clientDeleteData, clientDeleteSetData] = useState('')
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
    const payment = userApi.POST(payload)
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
    const payment = userApi.GET()
    payment
      .then((res) => {
        const dataList = res.data.data
        clientGetSetData(dataList)
      })
      .catch(Logger)
  }

  /**
   * deleteData.
   */
  const deleteData = () => {
    const payment = userApi.DELETE()
    payment
      .then((res) => {
        const dataList = res.data.data
        clientDeleteSetData(dataList)
      })
      .catch(Logger)
  }

  const List = () => {
    return (
      DATA_LIST
        ? clientGetData.map((dataRef, keyRef) => {
          const NAME = dataRef.first_name || dataRef.name
          return (
            <li
              className=''
              key={keyRef}
            >
              {NAME}
            </li>
          )
        })
        : EMPTY_LIST
    )
  }

  return (
    <div
      itemScope
      itemType='https://schema.org/WebApplication'
      className='O-view--webapp__default__'
      id='top'
    >
      <WPHeader />

      <main className='S-view--loci__default__'>
        <input
          id=''
          name=''
          onInput={(e) => clientPostSetData(e.currentTarget.value)}
          className='m-view--datapoint__default__'
        />
        <ul className=''>
          {List()}
        </ul>
      </main>

      <nav className=''>
        <ul className=''>
          <li className=''>
            <Button
              textLabel='get'
              act={() => getData()}
            />
          </li>
          <li className=''>
            <Button
              textLabel='post'
              act={() => postData(clientPostData)}
            />
          </li>
          <li className=''>
            <Button
              textLabel='delete'
              act={() => deleteData(clientDeleteData)}
            />
          </li>
        </ul>
      </nav>

      <WPFooter />
    </div>
  )
}

export default App

// EOF
