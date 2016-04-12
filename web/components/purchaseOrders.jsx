'use strict'


import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux' 
import {Button, Input, Dropdown, Table} from 'react-toolbox'


let PurchaseOrderList = (props, context) =>{
  const purchaseOrders = props.purchasOrders
  const PurchaseOrderModel = {
    client: {type: String, title: 'Cliente'},
    date: {type: String, title:'Fecha'},
    qty: {type: String, title: 'Cantidad'},
    total_ammount: {type: Number, title:'Monto Total'},
  }
  
  return(
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
}

PurchaseOrderList.contextTypes = {
  router: PropTypes.object.isRequired
}

const purchaseOrderList_mapStateToProps = ({app}) => {
  return {purchaseOrders: app.purchaseOrders}
}

PurchaseOrderList = connect(purchaseOrderList_mapStateToProps)(PurchaseOrderList)

  
class  PurchaseOrderEdit extends Component {
  constructor(props, context){
    super(props)
    this.props = props
    this.context = context
    this.purchaseOrder = Object.assign({}, props.purchaseOrder)
    this.client = props.client  
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
  save(){}
  
  render() {
    return (
      <div>
	<h3>Pedido de Compra</h3>
      
	<Button label='Guardar' raised primary onClick={this.save}/>
      </div>
    )
  }
}


PurchaseOrderEdit.propTypes = {
  router: PropTypes.object,
  props: PropTypes.object,
}

PurchaseOrderEdit.contextTypes = {
  router: PropTypes.object,
  props: PropTypes.object,
} 


const mapStateToProps = ({app}) =>{
  return app
}

const mapDispatchToProps = (dispatch) =>{
  return {
    save: (purchaseOrder) => {
      return (dispatch(savePurchaseOrder(purchaseOrder)))
    },
    clear: () => {
      return dispatch(clearPurchaseOrder())
    }
  }
}


PurchaseOrderEdit = connect(mapStateToProps, mapDispatchToProps)(PurchaseOrderEdit)

  
  export {PurchaseOrderList, PurchaseOrderEdit}

