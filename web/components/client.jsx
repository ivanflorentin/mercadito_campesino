'use strict'


import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux' 
import {Button, Input, Dropdown, Table} from 'react-toolbox'

import { isAlphanumeric, contains } from 'validator'

import {add_client} from '../actions'

let ClientList = (props, context) =>{
  console.log('clientlist', props)
  const clients = props.clients
  const ClientModel = {
    name: {type: String, title: 'Nombres'},
    tel: {type: String, title: 'Telefono'},
    distributor: {type: String, title: 'Centro de Distribucion'}
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
  console.log('in map', app)
  let clients = []  
  if (app.clients){  
    clients = app.clients.map((client, index)=>{
      client.distributor = app.distributors[client.distributor_index].name
      console.log('Cliente ===>', client)
      return client
    })
  }
  return {clients: clients}
}

ClientList = connect(clientList_mapStateToProps)(ClientList)



  
class ClientEdit extends Component{
  constructor(props, context){

    super(props)
    this.props = props
    console.log('constructor', props)
    if (props.distributors && props.distributors.length > 0){
      this.distributors = props.distributors.map((dist, index)=>{
	console.log('dist', dist, index)
	return {value: index, label: dist.name }
      })
    }
    if (props.client){
      this.state = props.client
      
      // fix this!
    }else{
      this.state = {}
    }
//    console.log('distributors',this.distributors, 'state', this.state)

    this.selectDistributor = this.selectDistributor.bind(this)
    this.render = this.render.bind(this)
    this.save = this.save.bind(this)
    this.nameChange = this.nameChange.bind(this) 
    this.telChange = this.telChange.bind(this)
    this.context = context
    
  }
  
  save(){
    let client = this.state
    if (this.state.distributor_index){
      console.log('index:',distributor_index,
		  '\nthis.distributors', this.distributors,
		  ' this.props.distributors', this.props.distributors)
    }
    this.props.save(client)
    this.context.router.push('/clientList')  
  }
  
  nameChange(e) { this.state.name = e}
  telChange(e) { this.state.tel = e}

  
  selectDistributor (value){
    this.setState(Object.assign({}, ...this.state, {distributor_index: value}))
  }

  
  render () {
    let dropdown
    console.log('render', this)
    let dist 
    if (this.state.distributor && this.state.distributor_index )
      dist = this.state.distributor_index
    if (this.distributors){
      dropdown = <div>Distribuidor: <Dropdown auto source={this.distributors}
		  value={dist}
		  onChange={this.selectDistributor}/> </div>
    }
    return (
      <div>
	<Input type='text' label='Nombres' name='name' onChange={this.nameChange}/>
	<Input type='number' label='Telefono' name='tel'onChange={this.telChange}/>
	{dropdown}
	<Button label='Guardar' raised primary onClick={this.save}/>
      </div>
    )
  }

}

ClientEdit.propTypes = {
  router: PropTypes.object,
  props: PropTypes.object,
} 

ClientEdit.contextTypes = {
  router: PropTypes.object,
} 

const mapStateToProps = (state) =>{
  return {
    clients: state.app.clients,
    distributors: state.app.distributors,
    client: state.app.client
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    save: (client) => {dispatch(add_client(client))}
  }
}


ClientEdit = connect(mapStateToProps, mapDispatchToProps)(ClientEdit)

export {ClientEdit, ClientList}

