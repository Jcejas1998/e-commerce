const moongose = require('mongoose')


const productSchema= new moongose.Schema({
    product_id:{
        type:String,
        unique:true,
        trim:true,
        required:true
    }
})


module.exports = moongose.model('Products',productSchema)