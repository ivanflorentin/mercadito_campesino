'use strict'


import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux' 
import {Button, Input, Dropdown, Table} from 'react-toolbox'

import { isAlphanumeric, contains } from 'validator'

import {add_client} from '../actions'

let ClientList = (props, context) =>{
  const clients = props.clients
  const ClientModel = {
    name: {type: String, title: 'Nombres'},
    tel: {type: String, title: 'Telefono'},
    distributor_id: {type: String, title: 'Centro de Distribucion'}
  }

  return(<Table
	     model={ClientModel}
	     source={clients}
	 />
    
  )
}

ClientList.propTypes = {
  context: PropTypes.object,
  props: PropTypes.object,
}

const clientList_mapStateToProps = ({app}) => {
  return {clients: app.clients}
}

ClientList = connect(clientList_mapStateToProps)(ClientList)

class ClientEdit extends Component{
  constructor(props){
    super(props)
      
    this.distributors = pros.distributors
    this.state =  this.distributors[0]
    this.selectDistributor = this.selectDistributor.bind(this)
    this.render = this.render.bind(this)
  }
  selectDistributor (value){
    this.setState(Object.assign({}, ...this.state, {distributor: value} ))
  }
  render () {
    return (
      <div>
	<Input type='text' label='Nombres' name='name'/>
	<Input type='number' label='Telefono' name='tel'/>
	<Dropdown auto source={this.distributors}
		  value={this.state.distributor}
		  onChange={this.selectDistributor}
	/>
	<Button label='Guardar' raised primary />
      </div>
    )
  }

}

ClientEdit.propTypes = {
  router: PropTypes.object,
  props: PropTypes.object,
} 


const mapStateToProps = (state) =>{
  return {
    clients: state.app.clients 
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    save: (client) =>{dispatch(add_client(client))}
  }
}


ClientEdit = connect(mapStateToProps)(ClientEdit)

export {ClientEdit, ClientList}

