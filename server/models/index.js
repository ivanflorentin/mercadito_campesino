'use strict'

const Sequelize = require('sequelize')
const config = require('../config')

const sequelize = new Sequelize(config.database,
				config.username,
				config.password,
				config.options )
const cathegory = require('./cathegory')
const Cathegory = cathegory(sequelize, Sequelize)

module.exports = {
  sequelize,
  Sequelize,
  Cathegory
}
