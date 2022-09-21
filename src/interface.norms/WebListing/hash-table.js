/**
 * @filepath ./src/interface.norms/WebListing/hash-table.js
 * @fileoverview
 * @name prefix-hashed petri tables.
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
  // logic alphabet syntax can organize non-metacomputational reality in the 
  // syntax of the real
  const t = new p.Transition('ppppppppyyyyttttzztzd', [ta], table)
  /**
   * infocule-pattern.yuml
   *
   * \hddd\hddd\hddd\hddd
   * \hddd\hddd\hddd\hddd
   * \hddd\hddd\hddd\hddd
   * \hddd\hddd\hddd\hddd
   *
   * infocule-cluster.yuml
   *
   * q(#|).($).aRb#({|0}).(#|).({|0}|{|#}).($).p{?people,sign,view,label()}
   * q(#|).($)./?(#({|0})).(#|).({|0}|{|#}).($).p{?people,sign,veiw,label()}
   * q(#|).($).(#({|0})).(#|).({|0}|{|#}).($).p{?people,sign,view,label()}
   * q(#|).($).({|0}).(#|).({Q-P=Q-Q}|{|#}).($).p{?people,sign,view,label()}
   * q[rel="#|"].[rel="$"].[rel="#|"]....q{?people,sign,view,label()}
   * q[rel="next"].[rel="next"].[rel="next"].(turn some app to the next state)...p.(some more logic alphabet and alephbet)
   * q[rel="aRb"].[rel="aRc"].[rel].[rel].[rev].p{?people,sign,view,label()}
   * q[rel="preload"].q[rel="preload"].q[rel="preconnect"].[rel].p{?people,sign,view,label()}
   *
   * # notes on infocule (subjects of unicularity)
   *
   * URLs (uniform resource locators) look so:
   *
   *   ://example.app/?#$;&;&;&;&;;;;;;;;;whateverness
   *
   *  who cares? in this game, i'm transversally composing interprocess 
   *  communication between .apps. i don't know what they do. `(#|)` could
   *  be any sort of game. `($)` might be another game. the point of view
   *  here is from a URL system of equi- and epi-nuclearity. i'm sure timbl
   *  and others have written some lovely javascript to jot out their ideas
   *  for what web should be. 
   *
   *  q......p
   *
   *  that's a funny one.
   *
   *  b......q
   *
   *  that one too. 
   *
   *  q......q
   *
   *  obviously these would correspond to "apps":
   *
   *  q.app......q.app
   *
   *  or:
   *
   *  q.app......q.app{?Y,M,X,B}
   *
   *  what works is anybody's guess. what we can echo through the `id` 
   *  attribute would be hardly a limitation to an unparser (or [hammer]).
   *
   *  [hammer]: https://github.com/UpstandingHackers/hammer/wiki/User-guide
   */

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

const o = 0 | rand()
log(o)

// EOF
