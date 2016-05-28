
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Button, Input, Table} from 'react-toolbox'

// import { isAlphanumeric, contains } from 'validator'
import {add_cathegory} from '../actions'


let CathegoryList = (props, context) =>{
  const cathegories = props.cathegories
  const CathegoryModel = {
    name: {type: String, title: 'Nombre'}
  }

  return (
    <div>
      <h3>Categorias de Productos
	<Button icon='add' floating accent mini
		onClick={()=>{context.router.push('/cathegoryEdit')}}/>
      </h3>
      <Table model={CathegoryModel} source={cathegories}/>
    </div>)
}

CathegoryList.propTypes = {
  context: PropTypes.object,
  props: PropTypes.object,
  cathegories: PropTypes.Array
}

CathegoryList.contextTypes = {
  router: PropTypes.object.isRequired
}

const cathegoryList_mapStateToProps = ({app}) => {
  return {cathegories: app.cathegories}
}

CathegoryList = connect(cathegoryList_mapStateToProps)(CathegoryList)


class CathegoryEdit extends Component {

  constructor(props, context) {
    super(props)
    this.cathegory = props.cathegory || {}
    this.change = this.change.bind(this)
    this.save = this.save.bind(this)
    this.keyPress = this.keyPress.bind(this)
    this.state = {}
    this.context = context
  }

  change(value) {
    this.cathegory.name = value
  }

  save() {
    this.props.save(this.cathegory)
    this.context.router.push('/cathegoryList')
  }

  keyPress(e) {
    if (e.which === 13 || e.keyCode === 13) {
      this.save()
    }
  }
/* eslint-disable no-mixed-spaces-and-tabs */
  render() {
    return (
      <div>
	<h3>Agregar Categoria</h3>
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
/* eslint-enable no-mixed-spaces-and-tabs */


CathegoryEdit.propTypes = {
  router: PropTypes.object,
  props: PropTypes.object,
  save: PropTypes.function,
  cathegory: PropTypes.object
}

CathegoryEdit.contextTypes = {
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

CathegoryEdit = connect(mapStateToProps, mapDispatchToProps)(CathegoryEdit)

export {CathegoryEdit, CathegoryList}

