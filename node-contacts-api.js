const http = require('http');

const hostname = '0.0.0.0'; // listen on all ports
const port = 8080;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end('{contacts: []}\n');
}).listen(port, hostname, () => {
  console.log('Server running at http://${hostname}:${port}/');
});
