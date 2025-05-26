const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

exports.transcribeAudio = (req, res) => {
    const audioPath = path.resolve(req.file.path);
    const fileName = path.basename(audioPath, path.extname(audioPath));
    const transcriptPath = path.join(__dirname, '..', 'uploads', `${fileName}.txt`);

    const command = `whisper "${audioPath}" --model tiny --language en --output_format txt --output_dir uploads`;

    exec(command, (err, stdout, stderr) => {
        if (err) {
            console.error(`Whisper command failed: `,stderr);
            return res.status(500).json({ error: "Transcription Failed"});
        }

        fs.readFile(transcriptPath, 'utf8', (err, data) => {
            if (err) {
                console.error("Transcript file read failed: ", err);
                return res.status(500).json({ error: "Failed to read transcript" });
            }

            const trimmed = data.trim();
            if (!trimmed) {
                return res.status(200).json({ message: "No speech detected", transcript: ""});
            }
            res.json({ transcript: trimmed });
        });
    });
};