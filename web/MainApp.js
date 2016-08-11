import {Route} from 'react-router'
import React from 'react'

// import defaultProps from './defaultProps'
import apps from './Apps'

const MercaditoRoute = apps.MercaditoApp.routes

// console.log('RecRo', apps, ' ROTES  ', RecuperacionRoute, CounterRoute)

const MainRoute =
      <Route path='/'>
         {MercaditoRoute}
      </Route>

export {MainRoute, apps}
