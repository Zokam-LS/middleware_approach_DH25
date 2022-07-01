const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');
const adminAuth = require('../middlewares/adminAuth');

router.get('/:id', adminAuth, adminController.access)

module.exports = router;