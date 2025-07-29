const  express = require('express'); // Import the express module to create an Express application
const app = express(); // Create an instance
app.use((req, res, next) => {
    console.log("Request received"); // Log the HTTP method and URL of the request
    next(); // Call the next middleware in the stack
})
// Middleware to log the request method and URL
app.use((req, res, next) => {
    res.status(201); // Set the response status code to 201 (Created)
    next(); // Call the next middleware in the stack
})
app.use((req, res, next) => {
    res.json({ message: 'Votre requête a été reçue avec succès!' }); // Respond with a JSON message
    next(); // Call the next middleware in the stack
})
// Middleware to handle all requests and respond with a JSON message
app.use((req, res) => {
    console.log("Response sent"); // Log that the response has been sent
})
module.exports = app; // Export the app instance for use in other files
