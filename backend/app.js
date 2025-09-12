const express = require('express'); // Import the express module to create an Express application
const mongoose = require('mongoose'); // Import mongoose for MongoDB interactions

const stuffRouter = require('./routes/stuff'); // Import the stuff routes

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

app.use(bodyParser.json()); // Middleware to parse JSON bodies
app.use('/api/stuff', stuffRouter); // Use the stuff routes

module.exports = app; // Export the app instance for use in other files