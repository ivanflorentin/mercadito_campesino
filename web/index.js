
import 'react-redux-provide/lib/install'
import {render} from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'

import React, {Component} from 'react'
import {MainRoute, apps} from './MainApp'

import defaultProps from './defaultProps'
import provideRouter from 'provide-router'
defaultProps.providers.router = provideRouter(browserHistory)
const {MainContainer} = apps.MainApp.components

// /* //  CONSOLE

console.log('\n------   MAIN:',
	    '\ndefaultProps:', defaultProps,
	    '\n-----------------------END MAIN\n'
)

// */ // --------------
class  MainApp extends Component {
  render() {
    return <div>
      <Router>
	<Route path="/" component={MainContainer}>
	  {MainRoute}
	  </Route>
      </Router>
    </div>
  }
}

const renderedTree = render(<MainApp {...defaultProps}/>, document.getElementById('app'))
/* eslint-disable no-console */

// para tests
//import {Input, Button} from 'react-toolbox'
//
//import TestUtils from 'react-addons-test-utils'
//const labels = TestUtils.scryRenderedDOMComponentsWithTag(renderedTree, 'label')
//
//// console.log('labels', labels)
//
//// --
//const inputs = TestUtils.scryRenderedComponentsWithType(renderedTree, Input)
//// console.log('inputs', inputs)
//
//// --
//const botones = TestUtils.scryRenderedComponentsWithType(renderedTree, Button)
//// console.log('botones:', botones)
