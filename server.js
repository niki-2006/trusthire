const express = require('express');
const app = express();
const PORT = process.env.PORT ||3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Sample API for resume analysis
app.get('/analyze', (req, res) => {
    const plagiarism = Math.floor(Math.random() * 30);
    const skill = Math.floor(Math.random() * 50 + 50);
    const trust = Math.floor((skill + (100 - plagiarism)) / 2);

    res.json({
        plagiarism: plagiarism + "%",
        skill: skill + "%",
        trust: trust + "%"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});