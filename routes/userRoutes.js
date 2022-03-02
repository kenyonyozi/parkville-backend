const router  = require('express').Router()
const UserController = require('../controllers/UserControllers')

router.post('/login', UserController.login)

router.post('/signup', UserController.register)

module.exports = router;