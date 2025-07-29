const http = require('http'); // Import the http module to create an HTTP server
const app = require('./app'); // Import the Express application instance

app.set('port', process.env.PORT || 3000); // Set the port for the application, defaulting to 3000 if not specified
// Create an HTTP server using the Express application instance
const server = http.createServer(app);

server.listen(process.env.PORT || 3000);
