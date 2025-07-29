const express = require('express'); // Import the express module to create an Express application
const mongoose = require('mongoose'); // Import mongoose for MongoDB interactions

const Thing = require('./models/Thing'); // Import the Thing model
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
    delete req.body._id; // Remove _id from the request body if it exists
    const thing = new Thing({
        ...req.body, // Spread the request body into the new Thing object
    });
    thing.save() // Save the new Thing to the database
        .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
        .catch(error => res.status(400).json({ error }));
});

app.get('/api/stuff', (req, res) => {
    Thing.find()
        .then(things => res.status(200).json(things))
        .catch(error => res.status(400).json({ error }));
});

module.exports = app; // Export the app instance for use in other files