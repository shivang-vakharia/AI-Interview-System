const express = require('express');
const router = express.Router();
const { evaluateAnswer } = require('../controllers/evaluateController');
const authMiddleware = require('../middleware/auth');

router.post('/', authMiddleware, evaluateAnswer);

module.exports = router;