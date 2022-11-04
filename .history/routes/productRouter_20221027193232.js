const router = require('express').Router()


router.route('/products')
    .get()
    .post()


router.route('/products/:id')
    .put()
    .delete()

module.exports= router