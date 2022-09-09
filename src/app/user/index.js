/**
 * @filepath src/api/index.js
 * @description
 * api method endpoints for /users
 * @see https://annevankesteren.nl/2007/10/http-methods
 */
import request from '../../api/request'

class UserApi {
  /**
   * OPTIONS.
   */
  OPTIONS () {
    return request('users', 'options')
  }

  /**
   * GET.
   */
  GET () {
    return request('users', 'get')
  }

  /**
   * HEAD.
   */
  HEAD () {
    return request('users', 'head')
  }

  /**
   * POST.
   */
  POST (payload) {
    return request('users', 'post', payload)
  }

  /**
   * PUT.
   */
  PUT (payload) {
    return request('users', 'put', payload)
  }

  /**
   * DELETE.
   */
  DELETE () {
    return request('users', 'delete')
  }

  /**
   * TRACE.
   */
  TRACE () {
    return request('users', 'trace')
  }

  /**
   * CONNECT.
   */
  CONNECT () {
    return request('users', 'connect')
  }

  /**
   * PROPFIND.
   *
   * @param {} payload
   */
  PROPFIND (payload) {
    return request('users', 'propfind', payload)
  }

  /**
   * PROPPATCH.
   *
   * @param {} payload
   */
  PROPPATCH (payload) {
    return request('users', 'proppatch', payload)
  }

  /**
   * MKCOL.
   */
  MKCOL () {
    return request('users', 'mkcol')
  }

  /**
   * COPY.
   *
   * @param {} payload
   */
  COPY (payload) {
    return request('users', 'copy', payload)
  }

  /**
   * MOVE.
   *
   * @param {} payload
   */
  MOVE (payload) {
    return request('users', 'move', payload)
  }

  /**
   * LOCK.
   */
  LOCK () {
    return request('users', 'lock')
  }

  /**
   * UNLOCK.
   */
  UNLOCK () {
    return request('users', 'unlock')
  }

  /**
   * VERSION_CONTROL.
   */
  VERSION_CONTROL () {
    return request('users', 'version_control')
  }

  /**
   * REPORT.
   */
  REPORT () {
    return request('users', 'report')
  }

  /**
   * CHECKOUT.
   */
  CHECKOUT () {
    return request('users', 'checkout')
  }

  /**
   * CHECKIN.
   */
  CHECKIN () {
    return request('users', 'checkin')
  }

  /**
   * UNCHECKOUT.
   */
  UNCHECKOUT () {
    return request('users', 'uncheckout')
  }

  /**
   * MKWORKSPACE.
   */
  MKWORKSPACE () {
    return request('users', 'mkworkspace')
  }

  /**
   * UPDATE.
   *
   * @param {} payload
   */
  UPDATE (payload) {
    return request('users', 'update', payload)
  }

  /**
   * LABEL.
   *
   * @param {} payload
   */
  LABEL (payload) {
    return request('users', 'label', payload)
  }

  /**
   * MERGE.
   *
   * @param {} payload
   */
  MERGE (payload) {
    return request('users', 'merge', payload)
  }

  /**
   * BASELINE_CONTROL.
   */
  BASELINE_CONTROL () {
    return request('users', 'baseline_control')
  }

  /**
   * MKACTIVITY.
   */
  MKACTIVITY () {
    return request('users', 'mkactivity')
  }

  /**
   * ORDERPATCH.
   */
  ORDERPATCH (payload) {
    return request('users', 'orderpatch', payload)
  }

  /**
   * ACL.
   */
  ACL () {
    return request('users', 'acl')
  }

  /**
   * PATCH.
   */
  PATCH () {
    return request('users', 'patch')
  }

  /**
   * SEARCH.
   */
  SEARCH (payload) {
    return request('users', 'search', payload)
  }

  /**
   * QUERY.
   */
  QUERY () {
    return request('users', 'query')
  }
}

export default UserApi

// EOF
