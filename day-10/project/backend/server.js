const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

const port = 5000;

mongoose.connect('mongodb://localhost:27017/Mern-Internship', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connect to MongoDB:', err));

const movieSchema = new mongoose.Schema({
    movies: String,
    actor: String,
    actress: String,
    ratings: Number,
});

const Movie = mongoose.model("Movie", movieSchema);

app.post('/movies', async (req, res) => {
    try {
        const newMovie = await Movie.create(req.body);
        res.json(newMovie);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/getmoviedata', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
