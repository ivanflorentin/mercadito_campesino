"use strict"

import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { combineReducers, createStore, applyMiddleware } from 'redux'

import { createDevTools } from 'redux-devtools'

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import * as reducers from './reducers'

import React, {Component} from 'react'

import style from './style'

import MainContainer from './components/main'

const loggerMiddleware = createLogger()

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware   // neat middleware that logs actions 
  )
)
  
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store} >
    <div>
      <Router history={history}>
	<Route path="/" component={MainContainer} >
	</Route>
      </Router>
    </div>
  </Provider>, document.getElementById('app')
)
  
