const { GoogleGenerativeAI } = require('@google/generative-ai');
const InterviewSession = require('../models/InterviewSession');
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

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

        res.json({
            role: session.role,
            answers: session.answers,
            createdAt: session.createdAt,
        });
    } catch (err) {
        return res.status(500).json({ error: "Error fetching details", details: err.message });
    }
}