const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const admin = require('../config/firebase');

const generateToken = (user) => {
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

//email/password signup
exports.signup = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const hashed = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hashed });
        res.json({ token: generateToken(user), user });
    } catch (err) {
        res.status(400).json({ error: "Signup failed", details: err.message });
    }
};

//Email/password login
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try{
        const user = await User.findOne({ email });
        if (!user || !await bcrypt.compare(password, user.password)) {
            return res.status(401).json({ error: "Invalid Credentials" });
        }
        res.json({ token: generateToken(user), user })
    } catch (err) {
        res.status(500).json({ error: "Login Failed" });
    }
};

//Google login

exports.googleLogin = async (req, res) => {
    const { idToken } = req.body;

    if (!idToken) {
        return res.status(400).json({ error: "Google ID token is required" });
    }

    try {
        const decoded = await admin.auth().verifyIdToken(idToken);
        const { name, email } = decoded;

        let user = await User.findOne( { email });
        if (!user) {
            user = await User.create({ name, email, provider: 'google' });
        }
  
        res.json({ token: generateToken(user), user });
  
    } catch (err) {
        res.status(401).json({ error: "Google login failed", details: err.message });
    }
};
