const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
   name : {
      type : String,
      required : true
   },
   description : {
      type : String,
      required : true,
      default : `no description given`
   },
   price : {
      type : Number,
      required : true
   },
   stock : {
      type : Number,
      required : true,
      min : [1, `Niat jualan apa enggak sih?`]
   }
})

const Item = mongoose.model('Item', itemSchema)
module.exports = Item