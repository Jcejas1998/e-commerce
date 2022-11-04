const Users = require('../models/useModel')

const userCtrl={
    register: async (req,res)=>{
        try {
            const {name,email,password}=req.body;
            const user = await Users.findOne({email})
            if(user) return res.status(400).json({msg:'el email ya existe'})
            if(password.length<6)
            return res.status(400).json({msg:'contraseña muy corta'})
        } catch (error) {
            return res.status(500).js({msg : err.message})
        }
    }
}

module.exports = userCtrl