'use strict'


import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux' 
import {Button, Input, Dropdown, Table} from 'react-toolbox'


let ProducerList = (props, context) =>{
  const producers = props.products
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
  }

  render () {
    return (
      <div>
	<Input type='text' label='Nombre' name='name'/>
	<Button label='Crear Productor' raised primary />
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
  return {
  }
}


ProducerEdit = connect(mapStateToProps)(ProducerEdit)

  
export {ProducerList, ProducerEdit}
