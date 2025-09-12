const express = require('express');
const mongoose = require('mongoose');
const stuffRouter = require('./routes/stuff');
const helmet = require('helmet');

// Connexion à MongoDB
mongoose.connect('mongodb+srv://espoirkakesa2:JehovahDieu1@cluster0.9dujdei.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((err) => console.error('Connexion à MongoDB échouée !', err));

const app = express();

// Middleware globaux
app.use(express.json()); 
app.use(helmet());

// Middleware CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Routes
app.use('/api/stuff', stuffRouter);

// Middleware de fallback d’erreur
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Une erreur serveur est survenue.' });
});

module.exports = app;