const jwt = require('jsonwebtoken')

const auth = (req,res,next)=>{
    try {
        const token = req.header('authorization')
        if(!token) res.status(400).json({msg: "invalid authentication"})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}