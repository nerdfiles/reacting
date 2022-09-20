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
import services from './infrastructure/services'
import WPHeader from './interfaces/WPHeader'
import WPFooter from './interfaces/WPFooter'
import WPLocation from './interfaces/WPLocation'
import WPWeather from './interfaces/WPWeather'
import Button from './interface.parts/Button'
import List from './interface.parts/List'
import Link from './interface.parts/Link'
import link from './assets/interface-scripts/link'

// const one = new petri.Place('hash1')
// const two = new petri.Place('hash2')
// const three = new petri.Place('hash3')
// const tHash = new petri.Transition('hash4', [one], [two, three])
// const net = new petri.Net(p1)

// net.ingest(10)

// tHash.on('fire', async () => {
//  console.log('t1 fired')
// })

// _.times(5, () => {
//   console.log(net.describe())
//   console.log('----')
//   net.execute()
// })

class Concept {
  constructor (a) {
    return (b) => {
      return [
        ...a,
        ...b
      ]
    }
  }
}

const concept = new Concept(['1'])
const brick = concept(['2'])
console.log(brick)

/**
 * @name App
 * @function
 */
function App () {
  /**
   * @constant
   * @default
   */
  const [
    CLIENTGETDATA,
    CLIENTGETSETDATA
  ] = useState([])

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
        act={act}
        textLabel='get'
      />
    )
  }

  return (
    <div
      className='O-view--webapp__default__ bg'
      id='top'
      itemScope
      itemType='https://schema.org/WebApplication'
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
          className='m-view--datapoint-entry__default__'
          id='datapoint-entry'
          name='datapoint-entry'
          onInput={(e) => CLIENTPOSTSETDATA(e.currentTarget.value)}
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
              act={() => services.postData(CLIENTPOSTDATA, CLIENTPOSTSETDATA)}
              onChange={() => services.updateData(CLIENTPOSTDATA, CLIENTUPDATESETDATA)}
              textLabel='create'
            />
          </li>
          <li className='m-view--listing__default__'>
            <Button
              act={() => services.updateData(CLIENTUPDATEDATA, CLIENTUPDATESETDATA)}
              textLabel='update'
            />
          </li>
          <li className='m-view--listing__default__'>
            <Button
              act={() => services.deleteData(CLIENTDELETEDATA, CLIENTDELETESETDATA)}
              textLabel='delete'
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
