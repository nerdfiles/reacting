/**
 * @filepath ./src/interfaces/WPTabs/index.js
 * @fileoverview trying out a possible web component for a tabs.
 * @name WPTabs
 * @license wtfpl, version 2
 * @author aha <patagnome@protonmail.com>
 * @version 0.0.0-novel.0
 * @since 0.0.0-novel.0
 * @description a singular <ul class="wp-tabs"> implementation in
 * reactjs. because it's a list of actions.
 * @summary a `ul["wp-tabs"]`.
 */
// import { random } from 'random-js'
// import logger from '../infrastructure/utils/logger'

/**
 * @constant
 * @default
 */
// const mt19937 = require('mt19937')

/**
 * @constant
 * @default
 */
// const randmax = new random(mt19937.seed())

/**
 * @constant
 * @default
 */
const EmptyTree = () => {
  return (
    <dl
      className='O-view--empty-tabs__default__'
    >
      <dt className='m-view-empty-tabs__default__'>empty</dt>
      <dd
        className='m-view--icon-empty__default__'
        title='no data provided'
      >no data provided</dd>
    </dl>
  )
}

/**
 * @name WPTabs
 * @kind function
 * @param {} props
 */
const WPTabs = (props) => {
  /**
   * @constant
   * @default
   */
  const DATA_TREE = props?.dataTree

  /**
   * @name Tabs
   * @kind function
   * @param {} props
   */
  const Tabs = (props) => {
    /**
     * @constant
     * @default
     */
    const DATA = props?.data

    return (
      <ul
        ariaLevel='1'
        className='O-view--wp-tabs__default__'
      >
        {
          DATA 
          ? DATA.map((ref, k) => {
              return (
                <li key={k}>
                  {ref?.ID}
                </li>
              )
            })
          : <EmptyTree />
        }
      </ul>
    )
  }

  return (
    <>
      <Tabs
        data={DATA_TREE}
      />
    </>
  )
}

export default WPTabs

// EOF
