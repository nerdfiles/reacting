/**
 * @filepath src/api/index.js
 * @description api method endpoints for /places
 * @see https://annevankesteren.nl/2007/10/http-methods
 */
import request from '../../infrastructure/api/request'

class PlaceApi {
  /**
   * OPTIONS.
   */
  OPTIONS () {
    return request('places', 'options')
  }

  /**
   * GET.
   */
  GET () {
    return request('places', 'get')
  }

  /**
   * HEAD.
   */
  HEAD () {
    return request('places', 'head')
  }

  /**
   * POST.
   */
  POST (payload) {
    return request('places', 'post', payload)
  }

  /**
   * PUT.
   */
  PUT (payload) {
    return request('places', 'put', payload)
  }

  /**
   * DELETE.
   */
  DELETE () {
    return request('places', 'delete')
  }

  /**
   * TRACE.
   */
  TRACE () {
    return request('places', 'trace')
  }

  /**
   * CONNECT.
   */
  CONNECT () {
    return request('places', 'connect')
  }

  /**
   * PROPFIND.
   *
   * @param {} payload
   */
  PROPFIND (payload) {
    return request('places', 'propfind', payload)
  }

  /**
   * PROPPATCH.
   *
   * @param {} payload
   */
  PROPPATCH (payload) {
    return request('places', 'proppatch', payload)
  }

  /**
   * MKCOL.
   */
  MKCOL () {
    return request('places', 'mkcol')
  }

  /**
   * COPY.
   *
   * @param {} payload
   */
  COPY (payload) {
    return request('places', 'copy', payload)
  }

  /**
   * MOVE.
   *
   * @param {} payload
   */
  MOVE (payload) {
    return request('places', 'move', payload)
  }

  /**
   * LOCK.
   */
  LOCK () {
    return request('places', 'lock')
  }

  /**
   * UNLOCK.
   */
  UNLOCK () {
    return request('places', 'unlock')
  }

  /**
   * VERSION_CONTROL.
   */
  VERSION_CONTROL () {
    return request('places', 'version_control')
  }

  /**
   * REPORT.
   */
  REPORT () {
    return request('places', 'report')
  }

  /**
   * CHECKOUT.
   */
  CHECKOUT () {
    return request('places', 'checkout')
  }

  /**
   * CHECKIN.
   */
  CHECKIN () {
    return request('places', 'checkin')
  }

  /**
   * UNCHECKOUT.
   */
  UNCHECKOUT () {
    return request('places', 'uncheckout')
  }

  /**
   * MKWORKSPACE.
   */
  MKWORKSPACE () {
    return request('places', 'mkworkspace')
  }

  /**
   * UPDATE.
   *
   * @param {} payload
   */
  UPDATE (payload) {
    return request('places', 'update', payload)
  }

  /**
   * LABEL.
   *
   * @param {} payload
   */
  LABEL (payload) {
    return request('places', 'label', payload)
  }

  /**
   * MERGE.
   *
   * @param {} payload
   */
  MERGE (payload) {
    return request('places', 'merge', payload)
  }

  /**
   * BASELINE_CONTROL.
   */
  BASELINE_CONTROL () {
    return request('places', 'baseline_control')
  }

  /**
   * MKACTIVITY.
   */
  MKACTIVITY () {
    return request('places', 'mkactivity')
  }

  /**
   * ORDERPATCH.
   */
  ORDERPATCH (payload) {
    return request('places', 'orderpatch', payload)
  }

  /**
   * ACL.
   */
  ACL () {
    return request('places', 'acl')
  }

  /**
   * PATCH.
   */
  PATCH () {
    return request('places', 'patch')
  }

  /**
   * SEARCH.
   */
  SEARCH (payload) {
    return request('places', 'search', payload)
  }

  /**
   * QUERY.
   */
  QUERY () {
    return request('places', 'query')
  }
}

export default PlaceApi

// EOF
