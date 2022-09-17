/**
 * @filepath ./src/interfaces/WPTable/index.js
 * @fileoverview trying out a possible web component for a table.
 * @name WPTable
 * @license wtfpl, version 2
 * @author aha <patagnome@protonmail.com>
 * @version 0.0.0-novel.0
 * @since 0.0.0-novel.0
 * @description a singular <ul class="wp-table"> implementation in
 * reactjs. because it's a list of actions.
 * @summary a `ul["wp-table"]`.
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
    <tr
      className='O-view--empty-table__default__'
    >
      <td className='m-view-empty-table__default__'>empty</td>
      <td
        className='m-view--icon-empty__default__'
        title='no data provided'
      >no data provided</td>
    </tr>
  )
}

/**
 * @name WPTable
 * @kind function
 * @param {} props
 */
const WPTable = (props) => {
  /**
   * @constant
   * @default
   */
  const DATA_TREE = props?.dataTree

  /**
   * @name Table
   * @kind function
   * @param {} props
   */
  const Table = (props) => {
    /**
     * @constant
     * @default
     */
    const DATA = props?.data

    return (
      <table
        ariaLevel='1'
        className='O-view--wp-table__default__'
      >
        <thead></thead>
        <tfoot></tfoot>
        <tbody>
          {
            DATA 
              ? DATA.map((ref, k) => {
                return (
                  <tr key={k}>
                    <td>{ref?.ID}</td>
                  </tr>
                )
              })
              : <EmptyTree />
          }
        </tbody>
        <caption></caption>
      </table>
    )
  }

  return (
    <>
      <Table
        data={DATA_TREE}
      />
    </>
  )
}

export default WPTable

// EOF
