

import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Button, Input, Table} from 'react-toolbox'

import {add_producer} from '../actions'

let ProducerList = (props, context) =>{
  const producers = props.producers
  const ProducerModel = {
    name: {type: String, title: 'Nombre'}
  }

  return (
    <div>
      <h3>Productores
      	<Button icon='add' floating accent mini
		onClick={()=>{context.router.push('/producerEdit')}}/>
      </h3>
      <Table model={ProducerModel} source={producers}/>
    </div>
  )
}

ProducerList.propTypes = {
  producers: PropTypes.Array
}

ProducerList.contextTypes= {
  router: PropTypes.object.isRequired
}

const producerList_mapStateToProps = ({app}) => {
  return {producers: app.producers}
}


ProducerList = connect(producerList_mapStateToProps)(ProducerList)


class ProducerEdit extends Component {

  constructor(props, context) {
    super(props)
    this.producer = props.producer || {}
    this.save = this.save.bind(this)
    this.keyPress = this.keyPress.bind(this)
    this.change = this.change.bind(this)
    this.context = context
  }

  save() {
    this.props.save(this.producer)
    this.context.router.push('/producerList')
  }

  change(e) {
    this.producer.name = e
  }

  keyPress(e) {
    if (e.which === 13 || e.keyCode === 13) {
      this.save()
    }
  }

  render() {
    return (
      <div>
	<h3> Agregar Productor</h3>
	<Input type='text' label='Nombre'
	       name='name'
	       onKeyPress={this.keyPress}
	       onChange={this.change}
	/>
	<Button label='Guardar' raised primary onClick={this.save}/>
      </div>
    )
  }
}

ProducerEdit.propTypes = {
  producer: PropTypes.object,
  save: PropTypes.function
}

ProducerEdit.contextTypes = {
  router: PropTypes.object.isRequired
}
const mapStateToProps = (state) =>{
  return {state}
}

const mapDispatchToProps = (dispatch) =>{
  return {save: (producer) =>{
    dispatch(add_producer(producer))
  }
  }
}


ProducerEdit = connect(mapStateToProps, mapDispatchToProps)(ProducerEdit)

export {ProducerList, ProducerEdit}
