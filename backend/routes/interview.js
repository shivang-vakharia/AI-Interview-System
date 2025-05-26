const express = require('express');
const router = express.Router();
const { startInterview, getResults } = require('../controllers/interviewController');
const authMiddleware = require('../middleware/auth');

router.post('/start', authMiddleware, startInterview);
router.get('/:sessionId/results', authMiddleware, getResults);

module.exports = router;