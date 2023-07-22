const mongoose = require('mongoose')
const Schema = mongoose.Schema

var Product = new Schema({
    productName: String,
    infor: String,
    quantity: String,
    price:String,
    date: String,
    productImages: String,
})

module.exports = mongoose.model('Product', Product)