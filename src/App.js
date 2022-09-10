import './App.scss'
import { useState } from 'react'
import WPHeader from './interfaces/WPHeader'
import WPFooter from './interfaces/WPFooter'
import Button from './interface.parts/Button'
import Person from './domain/person'
import services from './infrastructure/services'
import Listing from './interface.parts/Listing'

/**
 * @name App
 * @description
 */
function App () {
  const [clientGetData, clientGetSetData] = useState([])
  const [clientPostData, clientPostSetData] = useState({})
  const [clientDeleteData, clientDeleteSetData] = useState('')
  const EMPTY_LIST = (
    <p>empty</p>
  )
  const DATA_LIST = clientGetData && clientGetData.length
  const List = () => {
    return (
      DATA_LIST
        ? clientGetData.map((dataRef, keyRef) => {
          const NAME = dataRef.first_name || dataRef.name
          const person = new Person({
            name: NAME,
            age: 0,
            tags: ['human']
          })

          return (
            <Listing
              key={keyRef}
              concept={person}
            />
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
          id='datapoint-entry'
          name='datapoint-entry'
          onInput={(e) => clientPostSetData(e.currentTarget.value)}
          className='m-view--datapoint-entry__default__'
        />
        <ul className='m-view--datalist__default__'>
          <List />
        </ul>
      </main>

      <nav
        className='S-view--website-navigation__default__'
        itemScope
        itemType='https://schema.org/SiteNavigationElement'
      >
        <ul className='m-view--list__default__'>
          <li className='m-view--listing__default__'>
            <Button
              textLabel='get'
              act={() => services.getData(clientGetSetData)}
            />
          </li>
          <li className='m-view--listing__default__'>
            <Button
              textLabel='post'
              act={() => services.postData(clientPostData, clientPostSetData)}
            />
          </li>
          <li className='m-view--listing__default__'>
            <Button
              textLabel='delete'
              act={() => services.deleteData(clientDeleteData, clientDeleteSetData)}
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
