const router = require('express').Router()
const categoryCtrl = require('../controllers/categoryCtrl')


router.route('/category')
    .get(categoryCtrl.getCategory)



module.exports = router