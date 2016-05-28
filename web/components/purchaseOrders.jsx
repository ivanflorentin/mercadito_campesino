
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Button, Table} from 'react-toolbox'
import {savePurchaseOrder, clearPurchaseOrder} from '../actions'

let PurchaseOrderList = (props, context) =>{
  const purchaseOrders = props.purchaseOrders
  const PurchaseOrderModel = {
    client: {type: String, title: 'Cliente'},
    date: {type: String, title: 'Fecha'},
    qty: {type: String, title: 'Cantidad'},
    total_ammount: {type: Number, title: 'Monto Total'}
  }
  return (
    <div>
      <h3>Pedidos de Compra
	<Button icon='add' floating accent mini
		onClick={()=>{context.router.push('/purchaseOrderEdit')}}/>
      </h3>
      <Table model={PurchaseOrderModel} source={purchaseOrders}/>
    </div>)
}

PurchaseOrderList.propTypes = {
  context: PropTypes.object,
  props: PropTypes.object,
  purchaseOrders: PropTypes.object
}

PurchaseOrderList.contextTypes = {
  router: PropTypes.object.isRequired
}

const purchaseOrderList_mapStateToProps = ({app}) => {
  return {purchaseOrders: app.purchaseOrders}
}

PurchaseOrderList = connect(purchaseOrderList_mapStateToProps)(PurchaseOrderList)


class PurchaseOrderEdit extends Component {
  constructor(props, context) {
    super(props)
    this.props = props
    this.context = context
    this.purchaseOrder = Object.assign({}, props.purchaseOrder)
    this.client = props.client
    this.products = props.products
    // console.log(this.products)
//    this.validate = this.validate.bind(this)
    this.render = this.render.bind(this)
    this.save = this.save.bind(this)
  }
/*
  validate(){
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

  save(){
    if (this.product.isValid){
      this.props.save(this.product)
    }
    this.props.clear()
    this.context.router.push('/productList')
  }
  */
  save() {}

  render() {
    let client
    if (this.client && this.client.name) {
      client = <div>Cliente: {this.client.name}, Telefono: {this.client.tel} </div>
    } else {
      client = <Button label='Elejir Cliente' raised primary
		onClick={()=>{this.context.router.push('/clientList')}}/>
    }
/* eslint-disable no-mixed-spaces-and-tabs */
    return (
      <div>
	<h3>Pedido de Compra</h3>
	<div>
	  {client}
	</div>
	<div>
	  <Button label='Guardar' raised primary onClick={this.save}/>
	</div>
      </div>
    )
/* eslint-enable  no-mixed-space-and-tabs */
  }
}


PurchaseOrderEdit.propTypes = {
  context: PropTypes.object,
  props: PropTypes.object,
  purchaseOrder: PropTypes.object,
  client: PropTypes.object,
  products: PropTypes.object
}

PurchaseOrderEdit.contextTypes = {
  router: PropTypes.object,
  props: PropTypes.object
}


const mapStateToProps = ({app}) =>{
  return {...app}
}

const mapDispatchToProps = (dispatch) =>{
  return {
    save: (purchaseOrder) => {
      return dispatch(savePurchaseOrder(purchaseOrder))
    },
    clear: () => {
      return dispatch(clearPurchaseOrder())
    }
  }
}


PurchaseOrderEdit = connect(mapStateToProps, mapDispatchToProps)(PurchaseOrderEdit)

export {PurchaseOrderList, PurchaseOrderEdit}

