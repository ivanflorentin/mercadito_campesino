"use strict"

import React, {Component}  from 'react'
import AppBar from 'react-toolbox/lib/app_bar'
import Button from 'react-toolbox/lib/button'

import style from './style'

class MainAppBar extends Component {

  constructor(props, context) {
    super(props)
    this.props = props
    this.context = context
    console.log('context', context)
  }


  render (){
    return (
      <AppBar className={style.appbar} flat>
      <h1 className={style.title} onClick={()=>{
	this.context.router.push('/')
      }}>Mercadito Campesino</h1>
      </AppBar>)
  }
}

MainAppBar.contextTypes = {
    router: React.PropTypes.object.isRequired,
}
export default MainAppBar


