const express = require('express');
const router = express.Router();
const registrarController = require('../controllers/registrarController');
const authLoginMiddleware = require('../middlewares/authLoginMiddleware')

router.get('/', authLoginMiddleware,registrarController.index);
router.post('/', authLoginMiddleware, registrarController.registrar);

module.exports = router;