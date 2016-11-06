import 'react-redux-provide/lib/install'
import {render} from 'react-dom'
import {browserHistory} from 'react-router'

import React from 'react'
import {MainRoute, apps} from './MainApp'

import defaultProps from './defaultProps'
import provideRouter from 'provide-router'

import {createMainContainer} from 'provideUI'

defaultProps.providers.router = provideRouter(browserHistory)

const {MainContainer} = apps.MainApp.components

// /* //  CONSOLE

//console.log('\n------   MAIN:',
//	    '\ndefaultProps:', defaultProps,
//	    '\n-----------------------END MAIN\n'
//)

// */ // --------------


const Container = createMainContainer(MainRoute, apps, MainContainer)

const renderedTree = render(<Container {...defaultProps}/>, document.getElementById('app'))
/* eslint-disable no-console */

// para tests
//import {Input, Button} from 'react-toolbox'
//
//import TestUtils from 'react-addons-test-utils'
//const labels = TestUtils.scryRenderedDOMModelsWithTag(renderedTree, 'label')
//
//// console.log('labels', labels)
//
//// --
//const inputs = TestUtils.scryRenderedModelsWithType(renderedTree, Input)
//// console.log('inputs', inputs)
//
//// --
//const botones = TestUtils.scryRenderedModelsWithType(renderedTree, Button)
//// console.log('botones:', botones)
