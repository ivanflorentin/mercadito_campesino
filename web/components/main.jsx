
import React, {Component, PropTypes} from 'react'
import ToolboxApp from 'react-toolbox/lib/app'
// import Button from 'react-toolbox/lib/button'
// import Navigation from 'react-toolbox/lib/navigation'

// import {hashHistory, Router, Route, Link} from 'react-router'

import {MainAppBar} from './header'
// import MainDrawer from './drawer'
// import MainNavigation from './navigation'

import style from './style'

/*
class DashBoard extends Component {
  render() {
    return(
      <div> <h3> Add Component here</h3></div>
    )
  }
}
*/

class MainContainer extends Component {

  constructor(props, context) {
    super(props, context)
    // context.router
  }

  render() {
    return (
	    <ToolboxApp>
	      <MainAppBar props={this.props} context={this.context}/>
	      <section className={style.content}>
		{this.props.children}
	      </section>
	    </ToolboxApp>
    )
  }
}

MainContainer.propTypes = {
  children: PropTypes.Array
}

MainContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default MainContainer
