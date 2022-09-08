/**
 * @filepath src/api/index.js
 * @description
 * api method endpoints for /users
 * @see https://annevankesteren.nl/2007/10/http-methods
 */
import request from './request'

class Api {
  /**
   * OPTIONS.
   */
  OPTIONS () {
    return request('options')
  }

  /**
   * GET.
   */
  GET () {
    return request('get')
  }

  /**
   * HEAD.
   */
  HEAD () {
    return request('head')
  }

  /**
   * POST.
   */
  POST (payload) {
    return request('post', payload)
  }

  /**
   * PUT.
   */
  PUT (payload) {
    return request('put', payload)
  }

  /**
   * DELETE.
   */
  DELETE () {
    return request('delete')
  }

  /**
   * TRACE.
   */
  TRACE () {
    return request('trace')
  }

  /**
   * CONNECT.
   */
  CONNECT () {
    return request('connect')
  }

  /**
   * PROPFIND.
   *
   * @param {} payload
   */
  PROPFIND (payload) {
    return request('propfind', payload)
  }

  /**
   * PROPPATCH.
   *
   * @param {} payload
   */
  PROPPATCH (payload) {
    return request('proppatch', payload)
  }

  /**
   * MKCOL.
   */
  MKCOL () {
    return request('mkcol')
  }

  /**
   * COPY.
   *
   * @param {} payload
   */
  COPY (payload) {
    return request('copy', payload)
  }

  /**
   * MOVE.
   *
   * @param {} payload
   */
  MOVE (payload) {
    return request('move', payload)
  }

  /**
   * LOCK.
   */
  LOCK () {
    return request('lock')
  }

  /**
   * UNLOCK.
   */
  UNLOCK () {
    return request('unlock')
  }

  /**
   * VERSION_CONTROL.
   */
  VERSION_CONTROL () {
    return request('version_control')
  }

  /**
   * REPORT.
   */
  REPORT () {
    return request('report')
  }

  /**
   * CHECKOUT.
   */
  CHECKOUT () {
    return request('checkout')
  }

  /**
   * CHECKIN.
   */
  CHECKIN () {
    return request('checkin')
  }

  /**
   * UNCHECKOUT.
   */
  UNCHECKOUT () {
    return request('uncheckout')
  }

  /**
   * MKWORKSPACE.
   */
  MKWORKSPACE () {
    return request('mkworkspace')
  }

  /**
   * UPDATE.
   *
   * @param {} payload
   */
  UPDATE (payload) {
    return request('update', payload)
  }

  /**
   * LABEL.
   *
   * @param {} payload
   */
  LABEL (payload) {
    return request('label', payload)
  }

  /**
   * MERGE.
   *
   * @param {} payload
   */
  MERGE (payload) {
    return request('merge', payload)
  }

  /**
   * BASELINE_CONTROL.
   */
  BASELINE_CONTROL () {
    return request('baseline_control')
  }

  /**
   * MKACTIVITY.
   */
  MKACTIVITY () {
    return request('mkactivity')
  }

  /**
   * ORDERPATCH.
   */
  ORDERPATCH (payload) {
    return request('orderpatch', payload)
  }

  /**
   * ACL.
   */
  ACL () {
    return request('acl')
  }

  /**
   * PATCH.
   */
  PATCH () {
    return request('patch')
  }

  /**
   * SEARCH.
   */
  SEARCH (payload) {
    return request('search', payload)
  }

  /**
   * QUERY.
   */
  QUERY () {
    return request('query')
  }
}

export default Api
