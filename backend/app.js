const  express = require('express'); // Import the express module to create an Express application
const app = express(); // Create an instance

app.use((req, res) => {
    res.json({ message: 'Hello World!' }); // Respond with a JSON message
})
module.exports = app; // Export the app instance for use in other files
