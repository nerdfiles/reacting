/**
 * @filepath ./src/interface.norms/WebListing/hash-table.js
 * @fileoverview
 * @name hash
 * @description .
 * @param {} key .
 * @returns {T} .
 */
const log = console.log
const p = require('petri-net')
const _ = require('lodash')

const rand = () => Math.ceil(Math.random() * 1000000000)
const label = () => {
  const glue = ''
  const m = [
    rand(),
    rand(),
    rand(),
    rand()
  ].join(glue)
  log(m)
  return m
}
const hash = (key) => {
  const ta = new p.Place(label())
  const tb = new p.Place(label())
  const tc = new p.Place(label())
  const table = [tb, tc]
  const t = new p.Transition('ppppppppyyyyttttzztzd', [ta], table)

  const net = new p.Net(ta)

  net.ingest(10)

  t.on('fire', () => {
    log('t fired')
  })

  _.times(5, () => {
    log(net.describe())
    log('----')
    net.execute()
  })

  return t
}

const hashTable = {}

hash()

//hashTable.hash = hash

// EOF
