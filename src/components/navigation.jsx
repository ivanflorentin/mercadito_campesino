"use strict"

import React, {Component} from 'react'
import Navigation from 'react-toolbox/lib/navigation'

class MainNavigation extends Component{
  
  constructor(props, context) { 
    super(props, context)
    context.router
    this.handleClick = this.handleClick.bind(this)
    this.actions =  [
      { label: 'Alarm', raised: true, icon: 'access_alarm', onClick:this.handleClick },
      { label: 'Location', raised: true, accent: true, icon: 'room'}
    ]
  }
  
  handleClick (){
    const { router } = this.props.context
    router.push('/')
  }
  
  render () {
    return (
      <div>
	<Navigation type='horizontal' actions={this.actions} />
      </div>
    );
  }
}

MainNavigation.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default MainNavigation
