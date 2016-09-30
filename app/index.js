const server = require('./server');
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 8000;

// Start the server.
server.listen({ host, port });
