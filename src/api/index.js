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

  TRACE () {
    return request('trace')

  }
  CONNECT () {
    return request('connect')
  }

  PROPFIND (payload) {
    return request('propfind', payload)
  }

  PROPPATCH (payload) {
    return request('proppatch', payload)
  }

  MKCOL () {
    return request('mkcol')
  }

  COPY (payload) {
    return request('copy', payload)
  }

  MOVE (payload) {
    return request('move', payload)
  }

  LOCK () {
    return request('lock')

  }

  UNLOCK () {
    return request('unlock')
  }

  VERSION_CONTROL () {
    return request('version_control')
  }

  REPORT () {
    return request('report')
  }

  CHECKOUT () {
    return request('checkout')
  }

  CHECKIN () {
    return request('checkin')
  }

  UNCHECKOUT () {
    return request('uncheckout')
  }

  MKWORKSPACE () {
    return request('mkworkspace')
  }

  UPDATE (payload) {
    return request('update', payload)
  }

  LABEL (payload) {
    return request('label', payload)
  }

  MERGE (payload) {
    return request('merge', payload)
  }

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
