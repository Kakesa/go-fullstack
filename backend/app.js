const express = require('express');
const mongoose = require('mongoose');
const stuffRouters = require('./routes/stuff');
const userRouters = require('./routes/user');
const helmet = require('helmet');
const path = require('path');

// Connexion à MongoDB
//mongodb+srv://espoirkakesa2:JehovahDieu1@cluster0.9dujdei.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
mongoose.connect('mongodb://localhost:27017/api_rest', { useNewUrlParser: true, useUnifiedTopology: true })
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

// Middleware de fallback d’erreur
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Une erreur serveur est survenue.' });
});
// Routes
app.use('/api/stuff', stuffRouters);
app.use('/api/auth', userRouters);
app.use('/images', express.static(path.join(__dirname, 'images')));


module.exports = app;