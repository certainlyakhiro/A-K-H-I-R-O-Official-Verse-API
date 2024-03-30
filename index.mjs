import fs from "fs";
import express from 'express';

const app = express();

const fileData = JSON.parse(fs.readFileSync("bible_verses.json", "utf8"));

// Route to get random verse by category
app.get('/randomVerse', (req, res) => {
    const category = req.query.category;
    let filteredVerses = fileData;
    if (category) {
        filteredVerses = fileData.filter(verse => verse.category === category);
    }
    const randomVerse = filteredVerses[Math.floor(Math.random() * filteredVerses.length)];
    res.json(randomVerse);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});