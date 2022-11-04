const Products = require('../models/productModel')

const productCtrl ={
    getProducts: async(req,res)=>{
        try {
            const products = await Products.find()

            res.json(products)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createProduct: async(req,res)=>{
        try {
            const {product_id,title ,price ,description, content, images, category}= req.body;
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteProduct:async(req,res)=>{
        try {
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateProduct:async(req,res)=>{
        try {
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
}



module.exports = productCtrl