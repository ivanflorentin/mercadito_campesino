"use strict"

import React, {Component}  from 'react'
import AppBar from 'react-toolbox/lib/app_bar'
import Button from 'react-toolbox/lib/button'
import {IconMenu, MenuItem, MenuDivider} from 'react-toolbox'
import style from './style'


const MainMenu = (props, context) => (
  <IconMenu icon='apps' position='top-right' menuRipple>
    <MenuItem value='pedidos' icon='shopping_cart' caption='Pedidos' 
	      onClick={()=> context.router.push('/purchaseOrderList')}/>

    <MenuItem value='cathegories' icon='list' caption='Categorias'
	      onClick={()=> context.router.push('/cathegoryList')}/>
    
    <MenuItem value='clients' icon='people' caption='Clientes'
	      onClick={()=> context.router.push('/clientList')}/>

    <MenuItem value='producers' icon='people_outline' caption='Productores'
	      onClick={()=> context.router.push('/producerList')}/>


    <MenuItem value='products' icon='shopping_basket' caption='Productos'
	      onClick={()=> context.router.push('/productList')}/>


    <MenuItem value='distributors' icon='store' caption='Distribuidores'
	      onClick={()=> context.router.push('/distributorList')}/>

    <MenuDivider />
    <MenuItem value='home' icon='home' caption='Inicio' onClick={()=>{context.router.push('/')}}/>
  </IconMenu>
)

  
MainMenu.contextTypes = {
    router: React.PropTypes.object.isRequired
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
export {MainAppBar, MainMenu}


