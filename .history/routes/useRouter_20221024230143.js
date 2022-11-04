const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')


router.post('/register', userCtrl.register)
router.get('/register', userCtrl.refreshToken)













module.exports = router