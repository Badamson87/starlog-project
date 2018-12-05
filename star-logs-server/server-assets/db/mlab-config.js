var mongoose = require('mongoose')
var connectionString = 'mongodb://starlog:starlog1@ds117250.mlab.com:17250/star-logs'
var connection = mongoose.connection


mongoose.connect(connectionString, { useMongoClient: true })

connection.on('error', err => {
  console.log('ERROR FROM DATABASE: ', err)
})


connection.once('open', () => {
  console.log('Connected to Database')
})