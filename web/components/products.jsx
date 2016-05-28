
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Button, Input, Table} from 'react-toolbox'

// import { isAlphanumeric, contains } from 'validator'

import {validateProduct,
	saveProduct, clearProduct} from '../actions'


let ProductList = (props, context) =>{
  const products = props.products
  const ProductModel = {
    cathegory_id: {type: Number, title: 'Categoria'},
    name: {type: String, title: 'Nombre'},
    unit: {type: String, title: 'Presentacion'},
    buy_price: {type: Number, title: 'Precio de Compra'},
    sell_price: {type: Number, title: 'Precio de Venta'}
  }

  return (
  <div>
    <h3>Productos
      <Button icon='add' floating accent mini
	      onClick={()=>{context.router.push('/productEdit')}}/>
    </h3>
    <Table model={ProductModel} source={products}/>
  </div>
  )
}

ProductList.propTypes = {
  products: PropTypes.Array
}

ProductList.contextTypes = {
  router: PropTypes.object.isRequired
}

const productList_mapStateToProps = ({app}) => {
  return {products: app.products}
}

ProductList = connect(productList_mapStateToProps)(ProductList)


class ProductEdit extends Component {
  constructor(props, context) {
    super(props)
    this.props = props
    this.context = context
    this.product = Object.assign({}, props.product)
    this.validate = this.validate.bind(this)
    this.render = this.render.bind(this)
    this.save = this.save.bind(this)
  }

  validate() {
    const refs = this.refs
    this.product = {
      ...this.props.product,
      name: refs.name.refs.input.value,
      unit: refs.unit.refs.input.value,
      buy_price: refs.buy_price.refs.input.value,
      sell_price: refs.sell_price.refs.input.value
    }
    this.props.validator(this.product)
  }

  save() {
    if (this.product.isValid) {
      this.props.save(this.product)
    }
    this.props.clear()
    this.context.router.push('/productList')
  }

  render() {
    return (
      <div onChange={this.validate}>
	<h3>Producto</h3>
	<Input type='text' label='Nombre' name='name'
	       ref='name'
	       value={this.product.name}
	       error={this.product.name_error}/>
	<Input type='text'
	       label='Presentacion'
	       name='unit'
	       ref='unit'
	       value={this.product.unit}
	       error={this.product.unit_error}/>
      <Input type='number' label='Precio de Compra'
	     name='buy_price'
	     ref='buy_price'
	     value={this.product.buy_price}
	     error={this.product.buy_price_error}/>
      <Input type='number' label='Precio de Venta'
	     name='sell_price'
	     ref='sell_price'
	     value={this.product.sell_price}
	     error={this.product.sell_price_error}/>
      <Button label='Guardar' raised primary onClick={this.save}/>
      </div>
    )
  }
}


ProductEdit.propTypes = {
  product: PropTypes.object,
  validator: PropTypes.functiion,
  save: PropTypes.function,
  clear: PropTypes.function
}

ProductEdit.contextTypes = {
  router: PropTypes.object
}


const mapStateToProps = ({app}) =>{
  return app
}

const mapDispatchToProps = (dispatch) =>{
  return {
    validator: (product)=>{
      return dispatch(validateProduct(product))
    },
    save: (product) => {
      return dispatch(saveProduct(product))
    },
    clear: () => {
      return dispatch(clearProduct())
    }
  }
}


ProductEdit = connect(mapStateToProps, mapDispatchToProps)(ProductEdit)

export {ProductList, ProductEdit}
