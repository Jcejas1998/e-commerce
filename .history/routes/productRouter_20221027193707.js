const router = require('express').Router()
const productCtrl = require('../controllers/productCtrl')

router.route('/products')
    .get(productCtrl.getProducts)
    .post()


router.route('/products/:id')
    .put()
    .delete()

module.exports= router