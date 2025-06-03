const { GoogleGenerativeAI } = require('@google/generative-ai');
const InterviewSession = require('../models/InterviewSession');
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const multer = require('multer');
const upload = multer();

exports.evaluateAnswer = async (req, res) => {

//    console.log("incoming request body:", req.body);

    const { question, answer, sessionId } = req.body;

    if (!question || !sessionId) {
        console.log({ question, answer, sessionId });
        return res.status(400).json({ error: "Question, answer and sessionId required!"});
    }

    try {
        //Fetch session from DB
        const session = await InterviewSession.findById(sessionId);
        if(!session) {
            return res.status(404).json({ error: "Interview session not found." });
        }

        if(session.userId.toString() != req.user.id) {
            return res.status(403).json({ error: "Unauthorized access to the session."});
        }

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
        const prompt = `
        You are an expert interviewer.
        Please evaluate the candidate's answer below foe the question provided.
        GIve a score out of 10 and provide concise feedback. 

        Questionn: ${question}

        Answer: ${answer}

        Format the response like:
        Evaluation: (Score), Feedback: {Feedback text}
        `;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const evaluationText = response.text();

        console.log("Before pushing answer:", session.answers.length);
        session.answers.push({ question, answer, evaluation: evaluationText });
        console.log("After pushing answer:", session.answers.length);

        await session.save();
        console.log("Session saved with answers:", session.answers.length);

        res.json({ evaluation: evaluationText });
        console.log("Evaluation Text:", evaluationText);

    } catch (err) {
        res.status(500).json({ error: "Evaluation Failed", details: err.message });
    }
};