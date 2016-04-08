'use strict'

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux' 
import {Button, Input, Table} from 'react-toolbox'


let DistributorList = (props, context) =>{
  const distributors = props.distributors
  const DistributorModel = {
    name: {type: String, title:'Nombre'}
  }

  return(<Table
	     model={DistributorModel}
	     source={distributors}
	 />
    
  )
}

DistributorList.propTypes = {
  context: PropTypes.object,
  props: PropTypes.object,
}


const distributorList_mapStateToProps = ({app}) => {
  return {distributors: app.distributors}
}

DistributorList = connect(distributorList_mapStateToProps)(DistributorList)



class DistributorEdit extends Component{
  constructor(props){
    super(props)
  }

  render () {
    return (
      <div>
	<Input type='text' label='Nombre' name='name'/>
	<Button label='Crear Distribuidor' raised primary />
      </div>
    )
  }

}

DistributorEdit.propTypes = {
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


DistributorEdit = connect(mapStateToProps)(DistributorEdit)

  
export {DistributorList, DistributorEdit}
