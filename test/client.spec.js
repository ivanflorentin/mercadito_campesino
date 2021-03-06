
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import ReactDOM from 'react-dom'
import chai from 'chai'

const expect = chai.expect

import { Input, Button } from 'react-toolbox'

import createHistory from 'history/lib/createMemoryHistory'
import { browserHistory, Router, Route, Link } from 'react-router'


import { Provider } from 'react-redux'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { reducers } from '../web/reducers'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const reducer = combineReducers({
  app: reducers,
  routing: routerReducer
})

const store = createStore(
  reducer
)
import {ClientEdit} from '../web/components/clients'
const history = syncHistoryWithStore(createHistory('/clientEdit'), store)

//TODO: make react-router warnings dissapear
//{createHistory('/clientEdit')}
const clientEditElem = (
  <Provider store={store} >
    <Router history={history} >
      <Route path="/clientEdit" component={ClientEdit} />
    </Router>
  </Provider>
)

let clientEdit


describe('With client Edit Interface ', () => {
  
  beforeEach( () => {
    clientEdit = TestUtils.renderIntoDocument(clientEditElem)
  })
  
  it('should render', () => {  
    expect(clientEdit).to.not.equal(undefined)
  })
  
  it('should have a name', ()=> {    
    const nameLabel = TestUtils.scryRenderedDOMComponentsWithTag(clientEdit, 'label')[0]
    expect(nameLabel).to.exist
  })
  it('should have a name input', ()=>{
    const nameInput = TestUtils.scryRenderedComponentsWithType(clientEdit, Input)[0]
    expect(nameInput.props.label).to.equal('Nombres')
  })
  it('should have a telephone input', ()=>{
    const nameInput = TestUtils.scryRenderedComponentsWithType(clientEdit, Input)[1]
    expect(nameInput.props.label).to.equal('Telefono')
  }) 
  it('should have a save button', ()=>{
    const saveButton = TestUtils.scryRenderedComponentsWithType(clientEdit, Button)[0]
    expect(saveButton.props.label).to.equal('Guardar')
  })

  it('should submit the login form', (done) => {
    
    const button = ReactDOM.findDOMNode(clientEdit, loginForm.refs.loginButton);
    //button should exist
    
    expect(button).to.exist;
    
    //fill input values
    let userName = ReactDOM.findDOMNode(loginForm, loginForm.refs.userName);
    
    let password = ReactDOM.findDOMNode(loginForm, loginForm.refs.password);
    
    userName.value = 'UserName';
    Simulate.change(userName);
    
    password.value = 'testpassword';
    Simulate.change(password);
    
    //submit
    Simulate.click(button);
    
    
    done();
  });
  
})


