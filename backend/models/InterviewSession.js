const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
    question: String,
    answer: String,
    evaluation: String,
});

const InterviewSessionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    role: String,
    answers: [AnswerSchema],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('InterviewSession', InterviewSessionSchema);