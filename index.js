let express = require('express')
let router = require('./routes/products')
let cors =require('cors')
let app = express()
app.use(express.json())
app.use(cors())
app.use('/products',router)

// app.use(express.urlencoded({extended:false}))
app.listen(2323,()=>{
    console.log('server is running')
})