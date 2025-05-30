const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const { evaluateAnswer } = require('../controllers/evaluateController');
const authMiddleware = require('../middleware/auth');

router.post('/', authMiddleware, upload.single('audio'), evaluateAnswer);

module.exports = router;