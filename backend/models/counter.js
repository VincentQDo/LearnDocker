const mongoose = require('mongoose')
const Schema = mongoose.Schema

const counterSchema = new Schema({
  current_num: {
    type: String,
    required: true
  },
  insert_datetime: {
    type: Date,
    required: true
  }
})

const Counter = mongoose.model('CounterNum', counterSchema)

module.exports = Counter