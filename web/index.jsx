"use strict"

import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { combineReducers, createStore, applyMiddleware } from 'redux'

import { createDevTools } from 'redux-devtools'

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import {reducers} from './reducers'

import React, {Component} from 'react'
import style from './style'
import MainContainer from './components/main'

import CathegoryInput from './components/cathegories'
import {ClientEdit, ClientList} from './components/client'
import {ProductList, ProductEdit} from './components/products'


const loggerMiddleware = createLogger()

const reducer = combineReducers({
  app: reducers,
  routing: routerReducer
})
  
const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware // lets us dispatch() functions
//    loggerMiddleware   // neat middleware that logs actions 
  )
)

const history = syncHistoryWithStore(browserHistory, store)

//console.log(store.getState())
  
render(   
  <Provider store={store} >
    <div>
      <Router history={history}>
	<Route path="/" component={MainContainer} >
	  <Route path='/cathegoryInput' component={CathegoryInput}/>
	  <Route path='/clientEdit' component={ClientEdit}/>
	  <Route path='/clientList' component={ClientList}/>
	  <Route path='/ProductList' component={ProductList}/>
	  <Route path='/ProductEdit' component={ProductEdit}/>
	</Route>
      </Router>
    </div>
  </Provider>, document.getElementById('app')
)
  
