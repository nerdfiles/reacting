/**
 * @name App
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Store from './reducers'
import NovelComponent from './index'

const store = createStore(Store)

const App = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/">
        <IndexRoute component={NovelComponent} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('app'))

// EOF
