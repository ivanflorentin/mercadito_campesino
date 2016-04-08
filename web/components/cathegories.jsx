'use strict'


import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux' 
import {Button, Input, Table}  from 'react-toolbox'

import { isAlphanumeric, contains } from 'validator'
import {create_cathegory}  from '../actions'



let CathegoryList = (props, context) =>{
  console.log('cathegories', props)
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

  constructor (props) {
    super(props)
    this.catChange = this.catChange.bind(this)
    this.catSave = this.catSave.bind(this)
    this.keyPress = this.keyPress.bind(this)
    this.cathegory = ''
    this.state = {}
  }
  
  catChange(e){
    this.cathegory = e
  }

  catSave(){
    this.props.save({name:this.cathegory})
  }
  
  keyPress(e){
    if (e.which == 13 || e.keyCode == 13){
      this.catSave()
    }
  }
  
  render(){
    return (
      <div>
	<Input type='text' label='Categria'
	       name='cathegory'
	       floating={true}
	       error={this.state.error}
	       onChange={this.catChange}
	       onKeyPress={this.keyPress}
	/>
	<Button label='Crear' raised primary onClick={this.catSave}/>
      </div>
    )
  }
}


CathegoryInput.propTypes = {
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
    save: (cat) =>{dispatch(create_cathegory(cat))}
  }
}

CathegoryInput = connect(mapStateToProps, mapDispatchToProps)(CathegoryInput)

export {CathegoryInput, CathegoryList}

