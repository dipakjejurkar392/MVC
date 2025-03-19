let mongoose =require('mongoose')
const { title } = require('process')
let conn = mongoose.connect("mongodb://127.0.0.1:27017/mvc")
let productsSchema= new mongoose.Schema({
title:String,
description:String,
category:String,
price:String
})
let products = new mongoose.model('products',productsSchema)
module.exports=products