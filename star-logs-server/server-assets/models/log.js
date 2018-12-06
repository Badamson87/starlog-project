let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let schemaName = 'Log'


let schema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  author: { type: ObjectId, ref: 'User' },
  ship: { type: ObjectId, ref: 'Ship' },
  starDate: { type: Number, default: Date.now(), required: true }
})

module.exports = mongoose.model(schemaName, schema)