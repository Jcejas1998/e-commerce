const Products = require('../models/productModel')

//filter,sort and paginating


class APIfeatures{
    constructor(query, queryString){
        this.query=query;
        this.queryString=queryString;
    }
    filtering(){
        const queryObj ={...this.queryString} //queryString=req.query

        const excludeFields = ['page','sort','limit']
        excludeFields.forEach(el=>delete(queryObj[el]))


        let queryStr = JSON.stringify(queryObj)
        queryStr=queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match=> '$' + match)



        // gte = grater than or equals
        // lte = lesser than or equals
        // lt = lesser than
        // gt = grater than 

        this.query.find(JSON.parse(queryStr))


        return this
    }

    sorting(){
        if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join(' ')
            console.log(sortBy);
            this.query = this.query.sort(sortBy)
        }else{
            this.query = this.query.sort('-createdAt')

        }

        return this
    }

    paginating(){
        const page=this.queryString.page *1||1
        const limit=this.queryString.limit *1||3
        return this;
    }
}

const productCtrl ={
    getProducts: async(req,res)=>{
        try {
            const features = new APIfeatures(Products.find(),req.query)
            .filtering().sorting()
            const products = await features.query

            res.json(products)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createProduct: async(req,res)=>{
        try {
            const {product_id,title ,price ,description, content, images, category}= req.body;
            if(!images) return res.status(400).json({msg: "no images upload"})

            const product = await Products.findOne({product_id})
            if(product)
            return res.status(400).json({msg: "this product already exists."})

            const newProduct = new Products({
                product_id,title: title.toLowerCase(),price ,description, content, images, category
            })

            
            await newProduct.save()
            res.json({msg:"created a product"})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteProduct:async(req,res)=>{
        try {
            await Products.findByIdAndDelete(req.params.id)
            res.json({msg:'deleted a product'})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateProduct:async(req,res)=>{
        try {
            const {title ,price ,description, content, images, category}= req.body;
            if(!images) return res.status(400).json({msg: "no images upload"})


            await Products.findByIdAndUpdate({_id:req.params.id},{
                title:title.toLowerCase() ,price ,description, content, images, category
            })

            res.json({msg:"Updated a product"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
}



module.exports = productCtrl