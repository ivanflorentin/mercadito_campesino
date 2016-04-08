'use strict'

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux' 
import {Button, Input, Table} from 'react-toolbox'
import {add_distributor} from '../actions'

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
    this.distributor = props.distributor || {}
    this.save = this.save.bind(this)
    this.keyPress = this.keyPress.bind(this)
    this.change = this.change.bind(this)  
  }
  
  save(){
    this.props.save(this.distributor)
  }
  
  change(e){
    this.distributor.name = e
  }
  
  keyPress(e){
    if (e.which == 13 || e.keyCode == 13){
      this.save()
    }
  }


  render () {
    return (
      <div>
	<Input type='text' label='Nombre' name='name'
	       onKeyPress={this.keyPress}
	       onChange={this.change}
	/>
	<Button label='Crear Distribuidor' raised primary onClick={this.save}/>
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
  return {save: (distributor) =>{
    dispatch(add_distributor(distributor))
  }
  }
}


DistributorEdit = connect(mapStateToProps, mapDispatchToProps)(DistributorEdit)

  
export {DistributorList, DistributorEdit}
