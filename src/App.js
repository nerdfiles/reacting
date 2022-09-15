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
import { FC, useState } from 'react'
// import petri from 'petri-net'
import WPHeader from './interfaces/WPHeader'
import WPFooter from './interfaces/WPFooter'
import Button from './interface.parts/Button'
import services from './infrastructure/services'
import List from './interface.parts/List'
import WPLocation from './interfaces/WPLocation'
import WPWeather from './interfaces/WPWeather'
import link from './assets/interface-scripts/link'
import Link from './interface.parts/Link'

// var hash = new petri.Place('hash')
// var hash = new petri.Place('hash')
// var hash = new petri.Place('hash')
// var tHash = new petri.Transition('hash', [hash], [hash, hash])
// var net = new petri.Net(p1)

// net.ingest(10)

// t1.on('fire', async () => {
//  console.log('t1 fired')
// })

// _.times(5, () => {
//   console.log(net.describe())
//   console.log('----')
//   net.execute()
// })

/**
 * @name App
 * @function
 */
function App () {
  /**
   * @constant
   * @default
   */
  const [CLIENTGETDATA, CLIENTGETSETDATA] = useState([])

  /**
   * @constant
   * @default
   */
  const [
    CLIENTPOSTDATA,
    CLIENTPOSTSETDATA
  ] = useState({})

  /**
   * @constant
   * @default
   */
  const [
    CLIENTUPDATEDATA,
    CLIENTUPDATESETDATA
  ] = useState({})

  /**
   * @constant
   * @default
   */
  const [
    CLIENTDELETEDATA,
    CLIENTDELETESETDATA
  ] = useState('')

  const act = () => {
    services.getData(CLIENTGETSETDATA)
  }

  /**
   * @name Act
   * @constant
   * @default
   */
  const Act = (props) => {
    return (
      <Button
        textLabel='get'
        act={act}
      />
    )
  }

  return (
    <div
      itemScope
      itemType='https://schema.org/WebApplication'
      className='O-view--webapp__default__ bg'
      id='top'
    >
      <WPHeader />

      {/* @description preload test. */}

      {
        /*
      <Link
        init={link('kite', '.m-view--datalist__default__')}
        byClass='m-view--datalist__default__'
        href='https://reqres.in/api/users?page=2'
      />
        */
      }

      <WPLocation />

      <WPWeather />

      <main className='S-view--loci__default__'>
        <input
          id='datapoint-entry'
          name='datapoint-entry'
          onInput={(e) => CLIENTPOSTSETDATA(e.currentTarget.value)}
          className='m-view--datapoint-entry__default__'
        />
        <ul className='m-view--datalist__default__'>
          <List dataList={CLIENTGETDATA} />
        </ul>
      </main>

      <nav
        className='S-view--website-navigation__default__'
        itemScope
        itemType='https://schema.org/SiteNavigationElement'
      >
        <ul className='m-view--list__default__'>
          <li className='m-view--listing__default__'>
            <Act />
          </li>
          <li className='m-view--listing__default__'>
            <Button
              textLabel='create'
              act={() => services.postData(CLIENTPOSTDATA, CLIENTPOSTSETDATA)}
              onChange={() => services.updateData(CLIENTPOSTDATA, CLIENTUPDATESETDATA)}
            />
          </li>
          <li className='m-view--listing__default__'>
            <Button
              textLabel='update'
              act={() => services.updateData(CLIENTUPDATEDATA, CLIENTUPDATESETDATA)}
            />
          </li>
          <li className='m-view--listing__default__'>
            <Button
              textLabel='delete'
              act={() => services.deleteData(CLIENTDELETEDATA, CLIENTDELETESETDATA)}
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
