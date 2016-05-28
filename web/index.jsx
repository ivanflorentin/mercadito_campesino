
import thunkMiddleware from 'redux-thunk'
// import createLogger from 'redux-logger'
import {combineReducers, createStore, applyMiddleware} from 'redux'

// import {createDevTools} from 'redux-devtools'

import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router, Route, browserHistory} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'

import {reducers} from './reducers'

import React from 'react'
// import style from './style'
import MainContainer from './components/main'

import {CathegoryEdit, CathegoryList} from './components/cathegories'
import {ClientEdit, ClientList} from './components/clients'
import {ProductList,
	ProductEdit} from './components/products'
import {ProducerList,
	ProducerEdit} from './components/producers'
import {DistributorList,
	DistributorEdit} from './components/distributors'
import {PurchaseOrderList,
	PurchaseOrderEdit} from './components/purchaseOrders'

// const loggerMiddleware = createLogger()

const reducer = combineReducers({
  app: reducers,
  routing: routerReducer
})

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware
    // lets us dispatch() functions
//    loggerMiddleware   // neat middleware that logs actions
  )
)

// console.log('state in main: ' , store.getState())
const history = syncHistoryWithStore(browserHistory, store)

/* eslint-disable no-mixed-spaces-and-tabs  */

const root =
  <Provider store={store} >
    <div>
      <Router history={history}>
	<Route path="/" component={MainContainer} >
	  <Route path='/cathegoryList' component={CathegoryList}/>
	  <Route path='/cathegoryEdit' component={CathegoryEdit}/>
	  <Route path='/clientEdit' component={ClientEdit}/>
	  <Route path='/clientList' component={ClientList}/>
	  <Route path='/ProductList' component={ProductList}/>
	  <Route path='/ProductEdit' component={ProductEdit}/>
	  <Route path='/ProducerList' component={ProducerList}/>
	  <Route path='/ProducerEdit' component={ProducerEdit}/>
	  <Route path='/DistributorList' component={DistributorList}/>
	  <Route path='/DistributorEdit' component={DistributorEdit}/>
	  <Route path='/purchaseOrderList' component={PurchaseOrderList}/>
	  <Route path='/purchaseOrderEdit' component={PurchaseOrderEdit}/>
	</Route>
      </Router>
    </div>
  </Provider>

/* eslint-enable no-mixed-spaces-and-tabs  */


/* eslint-disable no-console  */
const renderedTree = render(root, document.getElementById('app'))

import {Input, Button} from 'react-toolbox'

import TestUtils from 'react-addons-test-utils'
const labels = TestUtils.scryRenderedDOMComponentsWithTag(renderedTree, 'label')
console.log('labels', labels)

// --
const inputs = TestUtils.scryRenderedComponentsWithType(renderedTree, Input)
console.log('inputs', inputs)

// --
const botones = TestUtils.scryRenderedComponentsWithType(renderedTree, Button)
console.log('botones:', botones)

/* eslint-enable no-console  */
