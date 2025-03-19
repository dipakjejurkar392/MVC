let express =require('express')
let controlProducts = require('../controlers/products')
let router=express.Router()
router.get('/',controlProducts.allProducts)

.post('/add',controlProducts.addProducts)

.get('/:id',controlProducts.singleProducts)

.delete('/delete/:id',controlProducts.deleteProducts)

.patch('/update/:id',controlProducts.updateProducts)

module.exports=router