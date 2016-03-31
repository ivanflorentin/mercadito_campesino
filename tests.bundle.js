"use strict"

const context = require.context('./test', true, /.+\.spec\.js?$/)

console.log(context.keys())
context.keys().forEach(context)
module.exports = context
