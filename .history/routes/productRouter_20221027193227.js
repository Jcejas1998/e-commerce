const router = require('express').Router()


router.route('/products')
    .get()
    .post()


router.router('/products/:id')
    .put()
    .delete()

module.exports= router