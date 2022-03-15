const router  = require('express').Router()
const UserController = require('../controllers/UserControllers')
const ClientController = require('../controllers/ClientContollers')

router.post('/login', UserController.login)

router.post('/signup', UserController.register)

router.post('/registerClient', ClientController.registerClient)

router.get('/allClients', ClientController.allClients)

module.exports = router;