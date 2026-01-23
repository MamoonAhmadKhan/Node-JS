const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Hello! from NodeJS server.");
});

server.listen(3000);