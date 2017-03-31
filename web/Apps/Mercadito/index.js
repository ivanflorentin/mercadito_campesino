import React from 'react'
import provideModel from 'provideModel'
import provideUI from 'provideUI'
import model from './model'
import {Route} from 'react-router'

const providers = model.models.map((model) => (provideModel(model)))
const ui = provideUI(model)

export default {providers, ...ui}
