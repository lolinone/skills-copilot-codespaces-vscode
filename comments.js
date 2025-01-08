// Create web server 
// Create a web server that displays "Hello World" on the homepage and "Page Not Found" for all other paths.

// Use the code below as a starting point.

var http = require('http');

http.createServer(function(req, res) {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World\n');
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Page Not Found\n');
    }
}).listen(3000, 'localhost');

console.log('Server running at http://localhost:3000/');

// You can test your server by visiting http://localhost:3000/ in your web browser. You should see the text "Hello World". If you visit any other path, you should see "Page Not Found".

// When you're ready, move on to the next challenge.