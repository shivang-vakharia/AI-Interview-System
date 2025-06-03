const { GoogleGenerativeAI } = require('@google/generative-ai');
const InterviewSession = require('../models/InterviewSession');
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const Session = require('../models/InterviewSession');

//Start interview and generate questions
exports.startInterview = async (req, res) => {
    const { role, numQuestions } = req.body;

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
        const prompt = `
        Generate exactly ${numQuestions} technical interview questions for the role of a ${role}. 
        Do not include more than ${numQuestions} questions. 
        Number them 1 to ${numQuestions}. 
        Only output the questions, nothing else.
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        const questions = text.split('\n').filter(q => q.trim() !== '').slice(0, numQuestions);

        //Create a DB session
        const session = new InterviewSession({
            userId: req.user.id,
            role,
            questions,
            answers: [],
        });

        await session.save();
        console.log('Created interview session', session);


        res.json({ sessionId: session._id, role, questions });
    } catch (err) {
        res.status(500).json({ error: "Error generating questions", details: err.message });
    }
};

//Fetch Results
exports.getResults = async (req, res) => {
    try {
        const session = await InterviewSession.findById(req.params.sessionId);

        if (!session) return res.status(404).json({ error: "Session not found" });
        if(session.userId.toString() != req.user.id) {
            return res.status(403).json({ error: "Unauthorized" });
        }

        const answersWithFeedback = session.answers.map(a => ({
            question: a.question,
            answer: a.answer,
            feedback: a.evaluation,
        }))

        res.json({
            role: session.role,
            questions: session.questions,
            answers: answersWithFeedback,
            createdAt: session.createdAt,
        });
    } catch (err) {
        return res.status(500).json({ error: "Error fetching details", details: err.message });
    }
}

exports.getSessions = async (req, res) => {
    try {
        const userId = req.user.id;
        const { limit = 10, offset = 0, role, bookmarked } = req.query;

        const query = { userId };

        if (role) {
            query.role = new RegExp(role, 'i');
        }

        const sessions = await InterviewSession.find(query)
            .sort({ createdAt: -1 })
            .select('_id role answers createdAt bookmarked');

        const total = await Session.countDocuments(query);

        res.json({ sessions, total });
    } catch (err) {
        console.error('Error fetching sessions:', err);
        res.status(500).json({ error: "Error fetching sessions", details: err.message });
    }
};