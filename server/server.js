'use strict'

const path = require('path')
const express = require('express')
const webpack = require('webpack')
const config = require('../webpack.config')

const app = express()
const compiler = webpack(config)

const api = require('./controllers')
  
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
  
app.use(express.static('public'))
  
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }}
))
  
app.use('/api', api)
app.use(require('webpack-hot-middleware')(compiler))
  app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})
  
app.listen(9090, '0.0.0.0', (err) => {
  if (err) {
    console.log(err)
    return
  }  
    console.log('Listening at http://0.0.0.0:9090')
  })
  
