const jwt = require('jsonwebtoken')

const auth = (req,res,next)=>{
    try {
        const token = req.header('authorization')
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}