const express = require('express');
const app = express();
const PORT = process.env.PORT ||3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Sample API for resume analysis
// Resume analysis API
app.use(express.json());

app.post('/analyze', (req, res) => {
    const { resumeText } = req.body;

    if (typeof resumeText !== 'string' || !resumeText.trim()) {
        return res.status(400).json({
            success: false,
            message: 'Please provide resume text for analysis.'
        });
    }

    const wordCount = resumeText.trim().split(/\s+/).length;

    res.json({
        success: true,
        message: 'Resume text received successfully.',
        wordCount: wordCount,
        status: 'Ready for further analysis'
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
