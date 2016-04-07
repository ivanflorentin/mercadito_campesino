"use strict"

import React, {Component} from 'react'
import ToolboxApp from 'react-toolbox/lib/app'
import Button from 'react-toolbox/lib/button'
import Navigation from 'react-toolbox/lib/navigation'

import { hashHistory, Router, Route, Link } from 'react-router'

import Header from './header'
import MainDrawer from './drawer'
import MainNavigation from './navigation'

import style from './style'

class DashBoard extends Component {
  render() {
    return(
      <div> <h3> Add Component here</h3></div>
    )
  }
}

class MainContainer extends Component {
  
  constructor(props, context) { 
    super(props, context)
    context.router
  }
  
  render(){	
    return (		
	    <ToolboxApp>
	      <Header props={this.props} context={this.context}>
		<div> Add Content Here</div>
	      </Header>
	      <section className={style.content}>
		{this.props.children}
	      </section>
	    </ToolboxApp>
    )
  }
}


MainContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default MainContainer
