const Category = require('../controllers/categoryCtrl')

const categoryCtrl = {
    getCategory: async(req,res)=>{
        try {
            const categories = await 
        } catch (err) {
            return res.status(400).json({msg: err.meassage})
        }
    }
}


module.exports = categoryCtrl