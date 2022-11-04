const router = require('express').Router()
const categoryCtrl = require('../controllers/categoryCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

router.route('/category')
    .get(categoryCtrl.getCategory)
    .post(auth,authAdmin,categoryCtrl.createCategory)


router.route('/category/:id')        

module.exports = router