const Users = require('../models/useModel')

const authAdmin = async(res,req,next)=>{
    try {
        //get user by id
        const user = await Users.findOne({
            _id: req.user.id
        })
        if(user.role === 0)
            return res.status(400).json({msg: "admin resources access denied"})

            next()

    } catch (err) {
            return res.status(500).json({msg : err.message})
    }
}

module.exports = authAdmin