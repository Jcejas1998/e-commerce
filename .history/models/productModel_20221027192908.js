const moongose = require('mongoose')


const productSchema= new moongose.Schema({
    product_id:{
        type:String,
        unique:true,
        trim:true,
        required:true
    },
    title:{
        type:String,
        trim:true,
        required:true
    },
    price:{
        type:Number,
        trim:true,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    image:{
        type:Object,
        required:true
    },
})


module.exports = moongose.model('Products',productSchema)