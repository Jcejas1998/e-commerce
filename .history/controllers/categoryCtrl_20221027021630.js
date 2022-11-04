const categoryCtrl = {
    getCategory: async(req,res)=>{
        try {
            res.json("category test control ")
        } catch (err) {
            return res.status(400).json({msg: err.meassage})
        }
    }
}


module.exports = categoryCtrl