'use strict'

const express = require('express')
const cathegory = require('./cathegory')
  
let api = express.Router()

api.use('/cathegory', cathegory)
  
  
module.exports = api
