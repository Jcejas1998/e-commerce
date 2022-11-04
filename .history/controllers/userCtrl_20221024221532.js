const Users = require('../models/useModel')

const userCtrl={
    register: async (req,res)=>{
        try {
            const {name,email,password}=req.body
        } catch (error) {
            return res.status(500).js({msg : err.message})
        }
    }
}

module.exports = userCtrl