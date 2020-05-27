const express = require('express');
const router = express.Router();
const autorizarController = require('../controllers/autorizarController');
const authLoginMiddleware = require('../middlewares/authLoginMiddleware')

router.get('/', autorizarController.index);
// router.post('/', registrarController.registrar);

module.exports = router;