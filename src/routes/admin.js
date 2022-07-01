const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');
const adminAuth = require('../middlewares/adminAuth');

router.get('/', adminAuth, adminController.access)

module.exports = router;