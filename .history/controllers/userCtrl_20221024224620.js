const Users = require('../models/useModel')
const bcrypt = require('bcrypt')

const userCtrl={
    register: async (req,res)=>{
        try {
            const {name,email,password}=req.body;
            const user = await Users.findOne({email})
            if(user) return res.status(400).json({msg:'el email ya existe'})
            if(password.length<6)
            return res.status(400).json({msg:'contraseña muy corta'})

            //password encryption
            const passwordHash = await bcrypt.hash(password,10)
            const newUser = new Users({
                name,email,password: passwordHash
            })
            //save mongodb

            await newUser.save()
            // res.json({password, passwordHash})            
            // res.json({msg: 'registro completado'})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = userCtrl