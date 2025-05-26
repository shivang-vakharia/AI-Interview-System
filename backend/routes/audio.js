const express = require('express');
const multer = require('multer');
const path = require('path');
const { transcribeAudio } = require('../controllers/audioController');

const router = express.Router();

const storage = multer.diskStorage({

    destination: './uploads',
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage });

router.post('/upload', upload.single('audio'), transcribeAudio);

module.exports = router;