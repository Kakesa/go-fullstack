const express = require('express'); // Import the express module to create an Express application
const mongoose = require('mongoose'); // Import mongoose for MongoDB interactions

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb+srv://espoirkakesa2:JehovahDieu1@cluster0.9dujdei.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express(); // Create an instance

app.use(express.json()); // Middleware to parse JSON request bodies

// Middleware to set CORS headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Define a simple route for the root path
app.post('/api/stuff', (req, res) => {
    console.log(req.body);
    if (!req.body.title) {
        return res.status(400).json({ message: 'Titre manquant !' });
    }
    res.status(201).json({ 
        message: 'Objet créé !' 
    });
});

app.get('/api/stuff', (req, res) => {
  const stuff = [
    {
      _id: 'oeihfzeoi',
      title: 'Mon premier objet',
      description: 'Les infos de mon premier objet',
      imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      price: 4900,
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeomoihi',
      title: 'Mon deuxième objet',
      description: 'Les infos de mon deuxième objet',
      imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      price: 3900,
      userId: 'qsomihvqios',
    },
  ];
  res.status(200).json(stuff);
});

module.exports = app; // Export the app instance for use in other files