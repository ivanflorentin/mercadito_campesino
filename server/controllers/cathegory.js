'use strict'

const  express = require('express')
const db = require('../models')

let cathegory = express.Router()

const Cathegory = db.cathegory

cathegory.get('/', (req, res) =>{
  db.cathegory.findAll().then((result)=>{
    res.json(result.dataValues)
  })   
})

cathegory.post('/', (req, res) =>{
  console.log('create', req.body)
  const cat = Cathegory.build(req.body)
  cat.save().then(resp =>{
    res.json(resp.dataValues)
    console.log('db response:',resp.dataValues)
  }).catch(e =>{
    console.log(e)
    res.status(500).json({success: false, error: e})
  })

})
  
module.exports = cathegory
