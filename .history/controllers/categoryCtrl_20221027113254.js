const Category = require('../models/categoryModel')

const categoryCtrl = {
    getCategory: async(req,res)=>{
        try {
            const categories = await Category.find()
            res.json(categories)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createCategory: async(req,res)=>{
        try {
            //if user have role = 1 --> admin
            //only admin can create,delete and update
            const {name} = req.body
            res.json('check admin success')
        } catch (err) {
            return res.status(500).json({msg: err.message})
            
        }
    }
}


module.exports = categoryCtrl