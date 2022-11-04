const router = require('express').Router()
const cloudinary = require('cloudinary')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')
const fs = require('fs')

//we will upload image on cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})
//upload image
router.post('/upload',(req,res)=>{
    try {
        console.log(req.files);
        if(!req.files || Object.keys(req.files).length===0)
            return res.status(400).send({msg: 'no files were upload'})

        const file = req.files.file;
        if(file.size > 1024*1024){
            removeTmp(file.tempFilePath)
            return res.status(400).json({msg: "size too large"})    

        }

        if(file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png'){
            removeTmp(file.tempFilePath)

            return res.status(400).json({msg: "file format is incorrect"})  
        }

        cloudinary.v2.uploader.upload(file.tempFilePath, {folder: "test"}, async(err, result)=>{
            if(err) throw err;

            removeTmp(file.tempFilePath)

            res.json({public_id: result.public_id, url: result.secure_url})
        })


    } catch (err) {
        res.status(500).json({msg: err.message})
    }
})

//delete image
router.post('/destroy',(req,res)=>{

})



const removeTmp = (path)=>{
    fs.unlink(path, err=>{
        if(err) throw err;
    })
}

module.exports = router