const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {

  // If the path starts with `static`, it’s a local asset.
  if (req.url.match(/^\/static/)) {
    console.log(`Static asset requested: ${req.url}`);

    const assetPath = path.join(__dirname, '../', req.url);

    console.log(assetPath);

    // Load the asset and return it.
    fs.readFile(assetPath, (error, data) => {
      if (error) {
        console.log(error);
        res.writeHead(404);
        return res.end('404: not found');
      }

      res.writeHead(200);
      res.write(data);

      return res.end();
    });
  } else if (req.url.match(/\.html$/)) {
    console.log(`HTML file requested: ${req.url}`);

    const filepath = path.join(__dirname, '../', req.url);

    fs.readFile(filepath, (error, data) => {
      if (error) {
        console.log(error);
        res.writeHead(404);
        return res.end('404: not found');
      }

      res.writeHead(200, { 'Content-type': 'text/html' });
      res.write(data);

      return res.end();
    });
  } else {

    // Get the path to the app’s HTML file.
    const filePath = path.join(__dirname, '../index.html');

    // Load the HTML file.
    fs.readFile(filePath, (error, data) => {
      res.writeHead(200, { 'Content-type': 'text/html' });
      res.write(data);
      return res.end();
    });
  }
});

// Export the `listen()` method so we can start the server elsewhere.
const listen = (...args) => {
  console.log('Server listening... ', args);
  server.listen.apply(server, args);
};

// Export the `close()` method so we can stop the server elsewhere.
const close = callback => {
  server.close(callback);
};

module.exports = { listen, close };
