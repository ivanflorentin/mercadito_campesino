
import 'react-redux-provide/lib/install'
import {render} from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'

import React, {Component, PropTypes} from 'react'
import {MainRoute, apps} from './MainApp'

import defaultProps from './defaultProps'
import provideRouter from 'provide-router'

defaultProps.providers.router = provideRouter(browserHistory)

const {MainContainer} = apps.MainApp.components

// /* //  CONSOLE

//console.log('\n------   MAIN:',
//	    '\ndefaultProps:', defaultProps,
//	    '\n-----------------------END MAIN\n'
//)

// */ // --------------



class ContainerApp extends Component {
  render() {
//    console.log('ContainerApp props', this.props)
//    console.log('ContainerApp apps', apps)
    for (let appName in apps) {
      const app = apps[appName]
      if (app.appDef) {
//	console.log('app', apps[appName].appDef)
	for (let component of apps[appName].appDef.components) {
//	  console.log('components', component)
	  const componentName = component.componentName
	  const appPath = `/${apps[appName].appDef.appRoute}/`
	  const editName = `${componentName}Edit`
	  const listName = `${componentName}List`
	  const displayName = `${componentName}Display`
	  const editPath = `${appPath}${componentName}/edit`
	  const listPath = `${appPath}${componentName}/list`
	  const displayPath = `${appPath}${componentName}/display`
	  const componentProperName = componentName[0].toUpperCase() + componentName.substring(1)
	  const setRoute = `setRoute${componentProperName}`
	  this.props[setRoute]({name: editName, path: editPath})
	  this.props[setRoute]({name: listName, path: listPath})
	  this.props[setRoute]({name: displayName, path: displayPath})
	}
      }
    }
    return <div>
      <Router>
	<Route path="/" component={MainContainer}>
      {MainRoute}
	  </Route>
      </Router>
    </div>
  }
}


// crear propTypes
// crear los path
// set routes

ContainerApp.propTypes = {}

for (let appName in apps) {
  const app = apps[appName]
  if (app.appDef) {
    console.log('app', apps[appName].appDef)
    const components = apps[appName].appDef.components
    for (let component of components) {
      console.log('CCCCCCCC', component)
      const componentName = component.componentName
      const componentProperName = componentName[0].toUpperCase() + componentName.substring(1)
      const setRoute = `setRoute${componentProperName}`
      ContainerApp.propTypes[setRoute] = PropTypes.func
    }
  }
}

const renderedTree = render(<ContainerApp {...defaultProps}/>, document.getElementById('app'))
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
