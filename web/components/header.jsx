"use strict"

import React, {Component}  from 'react'
import AppBar from 'react-toolbox/lib/app_bar'
import Button from 'react-toolbox/lib/button'
import {IconMenu, MenuItem, MenuDivider} from 'react-toolbox'
import style from './style'


const MainMenu = (props, context) => (
  <IconMenu icon='apps' position='top-right' menuRipple>
    <MenuItem value='cathegory' icon='add_box' caption='Categoria'
	      onClick={()=> context.router.push('/cathegoryInput')}
    />
    <MenuItem value='client' icon='face' caption='Clientes' />
    <MenuItem value='settings' icon='open_in_browser' caption='Open in app' />
    <MenuDivider />
    <MenuItem value='signout' icon='delete' caption='Delete' disabled />
  </IconMenu>
)

  
MainMenu.contextTypes = {
    router: React.PropTypes.object.isRequired,
}
const MainAppBar =(props, context)=> {

  return (
    <AppBar className={style.appbar} flat>
    <h1 className={style.title}
    onClick={()=>{context.router.push('/')}}>
    Mercadito Campesino</h1>
      <MainMenu props={props} context={context}/>
    </AppBar>)
} 

  
MainAppBar.contextTypes = {
    router: React.PropTypes.object.isRequired,
}
export default MainAppBar


