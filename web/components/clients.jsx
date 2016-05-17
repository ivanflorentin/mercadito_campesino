'use strict'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux' 
import {Button, Input, Dropdown, Table,
	List, ListSubHeader, ListItem} from 'react-toolbox'

import { isAlphanumeric, contains } from 'validator'

import {saveClient, selectClient} from '../actions'

let ClientList = (props, context) =>{
  const clients = props.clients
  //console.log('clientList clients', clients)
  return(
    <div>
      <List selectable ripple>
	<ListSubHeader caption='Clientes'/>
	<Button icon='add' floating accent mini
		onClick={()=>{
		    //props.deselectClient()
		    context.router.push('/clientEdit')}}/>
	
	{clients.map((client, index)=>{   
	   return (<ListItem
		       key={index}
		       caption={client.name}
		       legend={client.phone}
		       onClick={()=>{
			   props.select(clients[index])
			   //console.log('selected')
			   context.router.push('/clientEdit')  
			 }}/>
	   )})}
      </List>  
    </div>)
}

ClientList.propTypes = {
  context: PropTypes.object,
  props: PropTypes.object,
}

ClientList.contextTypes = {
  router: PropTypes.object.isRequired,
  props: PropTypes.object,
}

const clientList_mapStateToProps = ({app}) => {
  let clients = []  
  if (app.clients){  
    clients = app.clients.map((client, index)=>{
      if (app.distributors.legth >client.distributor_index){
	client.distributor = app.distributors[client.distributor_index].name
      }
      return client
    })
  }
  return {clients: clients}
}

const clientList_mapDispatchToProps = (dispatch)=>{
  return ({
    select: (client) =>{return dispatch(selectClient(client))}
  })
}

ClientList = connect(clientList_mapStateToProps,
		     clientList_mapDispatchToProps)(ClientList)



  
class ClientEdit extends Component{

  constructor(props, context){
    super(props)
      //console.log('edit', props.abogado)
    this.state = props.client
    this.save = this.save.bind(this)
    this.formChange = this.formChange.bind(this)
    this.keyPress = this.keyPress.bind(this)
  }


  save(){
    this.props.save(this.state)
    this.context.router.push('/clientList')
  }
  
  formChange(e){
    let client = {}
    client.name = this.refs.name.refs.input.value
    client.phone = this.refs.phone.refs.input.value
    client.email = this.refs.email.refs.input.value
    client.address = this.refs.address.refs.input.value
    this.setState(client)
  }

  keyPress(e){
    if (e.which == 13 || e.keyCode == 13){
      this.save()
    }
  }
  
  render () {
/*
  
selectDistributor (value){
    this.setState(Object.assign({}, ...this.state, {distributor_index: value}))
  }

    let dropdown
    let dist 
    if (this.state.distributor && this.state.distributor_index )
      dist = this.state.distributor_index
    if (this.distributors){
      dropdown = <div>Distribuidor: <Dropdown auto source={this.distributors}
		  value={dist}
		  onChange={this.selectDistributor}/> </div>
    }
    */
    return (
      <div onChange={(e)=>{this.formChange(e)}}>
	<h3>Editar Cliente</h3>
	<Input type='text' ref='name' label='Nombres'
	       name='name' value={this.state.name || ''}/>
	<Input type='number' ref='phone' label='Telefono'
	       name='tel' value={this.state.phone || ''}/>
	<Input type='string' ref='email' label='Email'
	       name='email' value={this.state.email || ''}/>
	<Input type='string' ref='address' label='Direccion'
	       name='address' value={this.state.address || ''}/>
	{/*dropdown*/}
	<Button label='Guardar' ref='save' raised primary onClick={this.save}/>
      </div>
    )
  }

}

ClientEdit.propTypes = {
  client: PropTypes.object,
} 

ClientEdit.contextTypes = {
  router: PropTypes.object
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
    save: (client) => {dispatch(saveClient(client))}
  }
}


ClientEdit = connect(mapStateToProps, mapDispatchToProps)(ClientEdit)

export {ClientEdit, ClientList}



/*
  constructor(props, context){
    super(props)
    this.props = props
    //console.log('constructor', props)
    if (props.distributors && props.distributors.length > 0){
      this.distributors = props.distributors.map((dist, index)=>{
	//console.log('dist', dist, index)
	return {value: index, label: dist.name }
      })
    }
    if (props.client){
      this.state = props.client
      
      // fix this!
    }else{
      this.state = {}
    }

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
*/
