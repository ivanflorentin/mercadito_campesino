"use strict"

import React, {Component}  from 'react'
import AppBar from 'react-toolbox/lib/app_bar'
import Button from 'react-toolbox/lib/button'
import {IconMenu, MenuItem, MenuDivider} from 'react-toolbox'
import style from './style'


const MainMenu = (props, context) => (
  <IconMenu icon='apps' position='top-right' menuRipple>
    <MenuItem value='pedidos' icon='shopping_cart' caption='Pedidos' />
    <MenuItem value='cathegory' icon='add_box' caption='Categoria'
	      onClick={()=> context.router.push('/cathegoryInput')}/>
    <MenuItem value='client_edit' icon='person_add' caption='Agregar Cliente'
	      onClick={()=> context.router.push('/clientEdit')}/>
    <MenuItem value='clients' icon='people' caption='Clientes'
	      onClick={()=> context.router.push('/clientList')}/>
    <MenuItem value='producers' icon='people_outline' caption='Productores' />
    <MenuItem value='products' icon='shopping_basket' caption='Productos'
	      onClick={()=> context.router.push('/productList')}/>
    <MenuItem value='products' icon='shopping_basket' caption='Agregar Producto'
	      onClick={()=> context.router.push('/productEdit')}/>
    <MenuItem value='distributors' icon='store' caption='Distribuidores' />
    <MenuDivider />
    <MenuItem value='home' icon='home' caption='Inicio' onClick={()=>{context.router.push('/')}}/>
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


