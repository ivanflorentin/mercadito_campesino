'use strict'


import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux' 
import {Button, Input, Table}  from 'react-toolbox'

import { isAlphanumeric, contains } from 'validator'
import {add_cathegory}  from '../actions'



let CathegoryList = (props, context) =>{
  const cathegories = props.cathegories  
  const CathegoryModel = {
    name: {type: String, title:'Nombre'}
  }

  return(<Table
	     model={CathegoryModel}
	     source={cathegories}
	 />    
  )
}

CathegoryList.propTypes = {
  context: PropTypes.object,
  props: PropTypes.object,
}


const cathegoryList_mapStateToProps = ({app}) => {
  return {cathegories: app.cathegories}
}

CathegoryList = connect(cathegoryList_mapStateToProps)(CathegoryList)


class CathegoryInput extends Component{

  constructor (props, context) {
    super(props)
    this.cathegory = props.cathegory || {}
    this.change = this.change.bind(this)
    this.save = this.save.bind(this)
    this.keyPress = this.keyPress.bind(this)
    this.state = {}
    this.context = context    
  }
  
  change(value){
    this.cathegory.name = value
  }

  save(){
    this.props.save(this.cathegory)
    this.context.router.push('/cathegoryList')
    
  }
  
  keyPress(e){
    if (e.which == 13 || e.keyCode == 13){
      this.Save()
    }
  }
  
  render(){
    return (
      <div>
	<Input type='text' label='Categria'
	       name='cathegory'
	       floating={true}
	       error={this.state.error}
	       onChange={this.change}
	       onKeyPress={this.keyPress}/>
	<Button label='Guardar' raised primary onClick={this.save}/>
      </div>
    )
  }
}


CathegoryInput.propTypes = {
  router: PropTypes.object,
  props: PropTypes.object,
}

CathegoryInput.contextTypes = {
  router: React.PropTypes.object.isRequired
}
 
const mapStateToProps = (state) =>{
  return {
    cathegory: state.app.cathegory 
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    save: (cathegory) =>{dispatch(add_cathegory(cathegory))}
  }
}

CathegoryInput = connect(mapStateToProps, mapDispatchToProps)(CathegoryInput)

export {CathegoryInput, CathegoryList}

