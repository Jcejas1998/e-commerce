const Users = require('../models/useModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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
            
            //then create jsonwebtoken to authentication      
            const accestoken = createAcessToken({id: newUser._id})
            const refreshtoken = createRefreshToken({id: newUser._id})


            res.cookies('resfreshtoken', refreshtoken,{
                httpOnly: true,
                path: '/user/refresh_token'
            })


           res.json({accestoken})


        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    refreshToken: (req,res)=>{
        const rf_token = req.cookies.refreshtoken;

        res.json({rf_token})
    }
}

const createAcessToken = (user)=>{
     return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1d'})
}
const createRefreshToken = (user)=>{
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
}

module.exports = userCtrl