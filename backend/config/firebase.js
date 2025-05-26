const admin = require('firebase-admin');
const serviceAccount = require('./ai-interview-system-2b521-firebase-adminsdk-fbsvc-e920a589a5.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;