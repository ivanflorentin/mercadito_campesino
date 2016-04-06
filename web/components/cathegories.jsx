'use strict'


import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux' 
import Button from 'react-toolbox/lib/button'
import Input from 'react-toolbox/lib/input'
import { isAlphanumeric, contains } from 'validator'
import {create_cathegory}  from '../actions'

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

export default CathegoryInput

