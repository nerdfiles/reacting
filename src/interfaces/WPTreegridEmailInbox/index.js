/**
 * @filepath ./src/interfaces/WPTreegridEmailInbox/index.js
 * @fileoverview trying out a possible web component for a tree-grid-email-inbox.
 * @name WPTreegridEmailInbox
 * @license wtfpl, version 2
 * @author aha <patagnome@protonmail.com>
 * @version 0.0.0-novel.0
 * @since 0.0.0-novel.0
 * @description a singular <ul class="treegrid-email-inbox"> implementation in
 * reactjs.
 * @summary a `ul["treegrid-email-inbox"]`.
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
    <li
      className='O-view--empty-tree__default__'
    >

      <ul className='m-view-empty-tree-list__default__'>
        <span
          className='m-view--icon-empty__default__'
          title='no data provided'
        ></span>
      </ul>
    </li>
  )
}

/**
 * @name WPTreegridEmailInbox
 * @kind function
 * @param {} props
 */
const WPTreegridEmailInbox = (props) => {
  /**
   * @constant
   * @default
   */
  const DATA_TREE = props?.dataTree

  /**
   * @name DataTreeElement
   * @kind function
   * @param {} props
   */
  const DataTreeElement = (props) => {
    /**
     * @constant
     * @default
     */
    const DATA = props?.data

    return (
      <ul
        ariaLevel='1'
        className='treegrid-email-inbox'
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
      <DataTreeElement
        data={DATA_TREE}
      />
    </>
  )
}

export default WPTreegridEmailInbox

// EOF
