require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connect } = require('./models/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes de test
app.get('/', (req, res) => {
    res.send('KafkaCorp API is alive 🚀');
});

// Lancer serveur
app.listen(PORT, async () => {
    await connect();
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
