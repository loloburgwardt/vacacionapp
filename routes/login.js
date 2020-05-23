const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const crearSesionMiddleware = require('../middlewares/crearSesionMiddleware')
const crearUsuarioController = require('../controllers/crearUsuarioController')

router.post('/registrante',crearSesionMiddleware, loginController.login);
router.post('/autorizante',loginController.login)

router.get('/adminCrearUsuario', crearUsuarioController.index)
router.post('/adminCrearUsuario', crearUsuarioController.create)

module.exports = router;