/**
 * @name web-form
 */
import { combineReducers } from 'redux'
import occasion from './form-stub'

const taskInterface = {}
const RFC2616 = 'RFC2518'
const GET = 'GET'
const POST = 'POST'
const OPTIONS = 'OPTIONS'
const HEAD = 'HEAD'
const PUT = 'PUT'
const DELETE = 'DELETE'
const TRACE = 'TRACE'
const CONNECT = 'CONNECT'
const RFC2518 = 'RFC2518'
const PROPFIND = 'PROPFIND'
const PROPPATCH = 'PROPPATCH'
const MKCOL = 'MKCOL'
const COPY = 'COPY'
const MOVE = 'MOVE'
const LOCK = 'LOCK'
const UNLOCK = 'UNLOCK'
const RFC3253 = 'RFC3253'
const VERSIONCONTROL = 'VERSION-CONTROL'
const REPORT = 'REPORT'
const CHECKOUT = 'CHECKOUT'
const CHECKIN = 'CHECKIN'
const UNCHECKOUT = 'UNCHECKOUT'
const MKWORKSPACE = 'MKWORKSPACE'
const UPDATE = 'UPDATE'
const LABEL = 'LABEL'
const MERGE = 'MERGE'
const BASELINECONTROL = 'BASELINE-CONTROL'
const MKACTIVITY = 'MKACTIVITY'
const RFC3648 = 'RFC3648'
const ORDERPATCH = 'ORDERPATCH'
const RFC3744 = 'RFC3744'
const ACL = 'ACL'
const DRAFTDUSSEAULTHTTPPATCH = 'draft-dusseault-http-patch'
const PATCH = 'PATCH'
const DRAFTRESCHKEWEBDAVSEARCH = 'draft-reschke-webdav-search'
const SEARCH = 'SEARCH'

taskInterface[RFC2616] = occasion
taskInterface[GET] = occasion
taskInterface[OPTIONS] = occasion
taskInterface[HEAD] = occasion
taskInterface[POST] = occasion
taskInterface[PUT] = occasion
taskInterface[DELETE] = occasion
taskInterface[TRACE] = occasion
taskInterface[CONNECT] = occasion
taskInterface[RFC2518] = occasion
taskInterface[PROPFIND] = occasion
taskInterface[PROPPATCH] = occasion
taskInterface[MKCOL] = occasion
taskInterface[COPY] = occasion
taskInterface[MOVE] = occasion
taskInterface[LOCK] = occasion
taskInterface[UNLOCK] = occasion
taskInterface[RFC3253] = occasion
taskInterface[VERSIONCONTROL] = occasion
taskInterface[REPORT] = occasion
taskInterface[CHECKOUT] = occasion
taskInterface[CHECKIN] = occasion
taskInterface[UNCHECKOUT] = occasion
taskInterface[MKWORKSPACE] = occasion
taskInterface[UPDATE] = occasion
taskInterface[LABEL] = occasion
taskInterface[MERGE] = occasion
taskInterface[BASELINECONTROL] = occasion
taskInterface[MKACTIVITY] = occasion
taskInterface[RFC3648] = occasion
taskInterface[ORDERPATCH] = occasion
taskInterface[RFC3744] = occasion
taskInterface[ACL] = occasion
taskInterface[DRAFTDUSSEAULTHTTPPATCH] = occasion
taskInterface[PATCH] = occasion
taskInterface[DRAFTRESCHKEWEBDAVSEARCH] = occasion
taskInterface[SEARCH] = occasion

export default combineReducers(taskInterface)

// EOF
