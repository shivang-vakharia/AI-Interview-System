const express = require('express');
const router = express.Router();
const { startInterview, getResults, getSessions, getSessionById, toggleBookmark, search } = require('../controllers/interviewController');
const authMiddleware = require('../middleware/auth');

router.post('/start', authMiddleware, startInterview);
router.get('/:sessionId/results', authMiddleware, getResults);
router.get('/sessions', authMiddleware, getSessions);
router.get('/sessions/:sessionId', authMiddleware, getResults);

module.exports = router;