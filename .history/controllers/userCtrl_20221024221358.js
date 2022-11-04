const Users = require('../models/useModel')

const userCtrl={
    register:(req,res)=>{
        res.json({msg: 'Test conection'})
    }
}

module.exports = userCtrl