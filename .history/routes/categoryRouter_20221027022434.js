const router = require('express').Router()
const categoryCtrl = require('../controllers/categoryCtrl')
const authAdmin = require('../middleware/authAdmin')

router.route('/category')
    .get(categoryCtrl.getCategory)
    .post(authAdmin,categoryCtrl.getCategory)


module.exports = router