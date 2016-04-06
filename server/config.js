'use strict'
module.exports = {
  username: 'mercadito',
  password: 'secret',
  database: 'mercadito',
  options: {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  }
}


