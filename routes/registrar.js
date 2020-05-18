const express = require('express');
const router = express.Router();
const registrarController = require('../controllers/registrarController');

router.get('/', registrarController.index);

module.exports = router;