 const express = require('express'); // Import the express module to create an Express application
 const router = express.Router(); // Create a router instance
 const Thing = require('../models/Thing'); // Import the Thing model

 // Define a simple route for the root path
router.post('/', (req, res) => {
    delete req.body._id; // Remove _id from the request body if it exists
    const thing = new Thing({
        ...req.body, // Spread the request body into the new Thing object
    });
    thing.save() // Save the new Thing to the database
        .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
        .catch(error => res.status(400).json({ error }));
});

router.get('/:id', (req, res, next) => {
  Thing.findOne({ _id: req.params.id })
    .then(thing => res.status(200).json(thing))
    .catch(error => res.status(404).json({ error }));
});

// Define a route to update a thing by its ID
router.put('/:id', (req, res, next) => {
  Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(400).json({ error }));
});
// Define a route to delete a thing by its ID
router.delete('/:id', (req, res, next) => {
    Thing.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
        .catch(error => res.status(400).json({ error }));
});
// Define a route to get all things from the database
router.get('/', (req, res) => {
    Thing.find()
        .then(things => res.status(200).json(things))
        .catch(error => res.status(400).json({ error }));
}); 

module.exports = router; // Export the router instance for use in other files