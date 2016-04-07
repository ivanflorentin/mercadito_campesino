'use strict'


import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux' 
import {Button, Input, Dropdown, Table} from 'react-toolbox'

import { isAlphanumeric, contains } from 'validator'



let ProductList = (props, context) =>{
  const products = props.products
  const ProductModel = {
    cathegory_id: {type: Number, title: 'Categoria'},
    name: {type: String, title:'Nombre'},
    unit: {type: String, title: 'Presentacion'},
    buy_price: {type: Number, title:'Precio de Compra'},
    sell_price: {type: Number, title: 'Precio de Venta'}
  }

  return(<Table
	     model={ProductModel}
	     source={products}
	 />
    
  )
}

ProductList.propTypes = {
  context: PropTypes.object,
  props: PropTypes.object,
}


const productList_mapStateToProps = ({app}) => {
  return {products: app.products}
}

ProductList = connect(productList_mapStateToProps)(ProductList)



class ProductEdit extends Component{
  constructor(props){
    super(props)
  }

  render () {
    return (
      <div>
	<Input type='text' label='Nombre' name='name'/>
	<Input type='text' label='Presentacion' name='unit'/>
	<Input type='number' label='Precio de Compra' name='buy_price'/>
	<Input type='number' label='Precio de Venta' name='sell_price'/>
	<Button label='Crear Producto' raised primary />
      </div>
    )
  }

}

ProductEdit.propTypes = {
  router: PropTypes.object,
  props: PropTypes.object,
} 


const mapStateToProps = (state) =>{
  return {
    state: state 
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
  }
}


ProductEdit = connect(mapStateToProps)(ProductEdit)

  
export {ProductList, ProductEdit}
