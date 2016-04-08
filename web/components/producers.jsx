'use strict'


import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux' 
import {Button, Input, Table} from 'react-toolbox'

import {add_producer} from '../actions'

let ProducerList = (props, context) =>{
  const producers = props.producers
  const ProducerModel = {
    name: {type: String, title:'Nombre'}
  }

  return(<Table
	     model={ProducerModel}
	     source={producers}
	 />  
  )
}

ProducerList.propTypes = {
  context: PropTypes.object,
  props: PropTypes.object,
}


const producerList_mapStateToProps = ({app}) => {
  return {producers: app.producers}
}


ProducerList = connect(producerList_mapStateToProps)(ProducerList)



class ProducerEdit extends Component{
  constructor(props){
    super(props)
    this.producer = props.producer || {}
    this.save = this.save.bind(this)
    this.keyPress = this.keyPress.bind(this)
    this.change = this.change.bind(this)  
  }
  
  save(){
    this.props.save(this.producer)
  }
  
  change(e){
    this.producer.name = e
  }
  
  keyPress(e){
    if (e.which == 13 || e.keyCode == 13){
      this.save()
    }
  }

  render () {
    return (
      <div>
	<Input type='text' label='Nombre'
	       name='name'
	       onKeyPress={this.keyPress}
	       onChange={this.change}
	/>
	<Button label='Crear Productor' raised primary onClick={this.save}/>
      </div>
    )
  }
}

ProducerEdit.propTypes = {
  router: PropTypes.object,
  props: PropTypes.object,
} 


const mapStateToProps = (state) =>{
  return {
    state: state 
  }
}

const mapDispatchToProps = (dispatch) =>{
  return { save: (producer) =>{
    dispatch(add_producer(producer))
  }
  }
}


ProducerEdit = connect(mapStateToProps, mapDispatchToProps)(ProducerEdit)

  
export {ProducerList, ProducerEdit}
