const http = require('http'); // Import the http module to create an HTTP server

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Server running of  http://localhost:${process.env.PORT || 3000}/`);
});

server.listen(process.env.PORT || 3000, () => {
  console.log(`Server running of first at http://localhost:${process.env.PORT || 3000}/`);
});
