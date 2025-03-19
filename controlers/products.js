let products = require('../model/products')

let allProducts= async(req,res)=>{
    let data = await products.find()
    res.send(data)
}
let singleProducts= async(req,res)=>{
    let id = req.params.id
let data = await products.find({id:(+id)})
     res.send(data)
}
let deleteProducts= async(req,res)=>{
    let id = req.params.id
let data = await products.deleteOne({id:(+id)})
     res.send(data)
}
let addProducts= async(req,res)=>{
    // res.send('hello')
    let body = req.body
    let data = await products.insertOne(body)
    res.send(data)

}
let updateProducts= async(req,res)=>{
    // res.send('hello')
    let body = req.body
    let id = req.params.id
    let data = await products.updateOne({ id: +id }, { $set: req.body });
    res.send(data)

}
module.exports={singleProducts,allProducts,addProducts,deleteProducts,updateProducts}