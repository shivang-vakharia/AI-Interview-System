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
        console.error("Signup error:", err);

        if  (err.code === 11000) {
            return res.status(409).json({ error: "Email already exists. Please login." });
        }

        res.status(400).json({ error: "Signup failed", details: err.message });
    }
};

//Email/password login
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try{
        const user = await User.findOne({ email });

        if (!user) {
            console.error("User not found:", email);
            return res.status(404).json({ error: "User not found" });
        }

        if (!user.password) {
            return res.status(401).json({ error: "User registered with Google. Please login with Google." });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            console.error("Password mismatch for user:", email);
            return res.status(401).json({ error: "Invalid Credentials" });
        }

        console.log("User logged in successfully:", email);


        res.json({ token: generateToken(user), user })
    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ error: "Login Failed" });
    }
};

//Google login

exports.googleLogin = async (req, res) => {
    const { idToken } = req.body;

    console.log("Received ID Token:", idToken);

    if (!idToken) {
        return res.status(400).json({ error: "Google ID token is required" });
    }

    try {
        const decoded = await admin.auth().verifyIdToken(idToken);
        console.log("Decoded ID Token:", decoded);

        const { name, email } = decoded;

        let user = await User.findOne( { email });
        if (!user) {
            user = await User.create({ name, email, provider: 'google' });
        }
  
        res.json({ token: generateToken(user), user });
  
    } catch (err) {
        console.log("FIrebase verifyIdToken error:", err);
        res.status(401).json({ error: "Google login failed", details: err.message });
    }
};
