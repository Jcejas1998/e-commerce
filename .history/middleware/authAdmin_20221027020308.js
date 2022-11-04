const Users = require('../models/useModel')

const authAdmin = async(res,req,next)=>{
    try {
        
    } catch (err) {
            return res.status(500).json({msg : err.message})
    }
}