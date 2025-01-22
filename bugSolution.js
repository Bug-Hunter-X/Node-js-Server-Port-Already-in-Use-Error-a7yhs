const http = require('http');
const portfinder = require('portfinder');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

portfinder.getPort((err, port) => {
  if (err) {
    console.error('Error finding a port:', err);
    process.exit(1); // Exit with an error code
  }

  const server = http.createServer(requestListener);

  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use.`);
      process.exit(1); // Exit with an error code
    } else {
      console.error('An unexpected error occurred:', err);
      process.exit(1);
    }
  });
});