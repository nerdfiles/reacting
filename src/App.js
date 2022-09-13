/**
 * @filepath ./src/App.js
 * @fileoverview app file.
 * @author aha <patagnome@protonmail.com>
 * @license wtfpl, version 2
 * @since 0.0.0-novel.0
 * @version 0.0.0-novel.0
 * @kind function
 * @todo none
 * @name App
 * @function
 * @see web.dev/apply-instant-loading-with-prpl/
 * @see web.dev/rail/
 * @description an ensemble of hypermediated components passing relations and
 * submitting forms according to relating relations (e.g., spogs, jetson?).
 * @todo browse https://www.npmjs.com/package/require-css
 * @returns {HTMLDivElement} markup.
 */
import './App.scss'
import { useState } from 'react'
import WPHeader from './interfaces/WPHeader'
import WPFooter from './interfaces/WPFooter'
import Button from './interface.parts/Button'
import services from './infrastructure/services'
import List from './interface.parts/List'

/**
 * @name App
 * @function
 */
function App () {
  const [clientGetData, clientGetSetData] = useState([])
  const [clientPostData, clientPostSetData] = useState({})
  const [clientUpdateData, clientUpdateSetData] = useState({})
  const [clientDeleteData, clientDeleteSetData] = useState('')

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
          <List dataList={clientGetData} />
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
              textLabel='create'
              act={() => services.postData(clientPostData, clientPostSetData)}
              onChange={() => services.updateData(clientPostData, clientUpdateSetData)}
            />
          </li>
          <li className='m-view--listing__default__'>
            <Button
              textLabel='update'
              act={() => services.updateData(clientUpdateData, clientUpdateSetData)}
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
