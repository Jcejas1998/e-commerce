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
    images:{
        type:Object,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    checked:{
        type:String,
        default:false
    },
    sold:{
        type:Number,
        default:0
    },{
        timestamps: true
    }
})


module.exports = moongose.model('Products',productSchema)