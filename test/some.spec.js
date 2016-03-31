"use strict"

import React from 'react'
import TestUtils from 'react-addons-test-utils'
import ReactDOM from 'react-dom'
import chai from 'chai'
const expect = chai.expect

import ProductEdit from '../src/components/product'

describe('Given an instance of a Component', () => {
  it('renders without problems', () => {
    var app = TestUtils.renderIntoDocument(<ProductEdit />)
  })
})
