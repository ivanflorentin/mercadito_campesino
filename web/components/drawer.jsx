"use strict"

import React, {Component} from 'react'
import Drawer from 'react-toolbox/lib/drawer'
import Button from 'react-toolbox/lib/button'
import Avatar from 'react-toolbox/lib/avatar'
import Navigation from 'react-toolbox/lib/navigation'

class MainDrawer extends Component {

  constructor(props, context) {
    super(props, context)
    context.router
    this.handleRoute = this.handleRoute.bind(this)
    this.actions =  [
      { name: 'home', label: 'Inicio', raised: false, accent: false, icon: 'home',
	onClick:this.handleRoute},
      { name: 'cathegoryInput', label: 'Crear Categoria', raised: false, accent: false, icon: 'playlist_add',
	onClick:this.handleRoute}
    ];
    this.state = {active: false}
    this.handleToggle = this.handleToggle.bind(this)
  }
  
  handleToggle() {
    this.setState({active: !this.state.active})
  }
  
  handleRoute(options, callback) {
    this.handleToggle()
      switch(options.target.name){
	case 'home': {
	  this.context.router.push('/')
	  break	    
	}
	case 'cathegoryInput': {
	  this.context.router.push('cathegoryInput')
	  break
	}
      }
  }  

  render () {
    return (
      <div>
	<Button icon='menu' raised accent onClick={this.handleToggle} />
	<Drawer active={this.state.active} onOverlayClick={this.handleToggle}>
	  <Navigation type='horizontal' actions={this.actions} />
	</Drawer>
      </div>
    );
  }
}

MainDrawer.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default MainDrawer
