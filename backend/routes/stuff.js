 const express = require('express'); // Import the express module to create an Express application
 const router = express.Router(); // Create a router instance

 const staffController = require('../controllers/stuff'); // Import the stuff controller


 // Define a simple route for the root path
router.post('/', staffController.createThing);
// Define a route to get a single thing by its ID
router.get('/:id', staffController.getOneThing);

// Define a route to update a thing by its ID
router.put('/:id', staffController.modifyThing);
// Define a route to delete a thing by its ID
router.delete('/:id', staffController.deleteThing);
// Define a route to get all things from the database
router.get('/', staffController.getAllThings);

module.exports = router; // Export the router instance for use in other files