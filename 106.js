// Create a Node.js server that sends a JSON response when the user 
// visits /api. Set the correct response headers and explain the 
// importance of sending JSON data in web applications.

const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/api') {
        // JSON data
        const data = {
            name: "Avi",
            course: "FSD2",
            city: "Ahmedabad"
        };

        // Set header for JSON
        res.writeHead(200, { 'Content-Type': 'application/json' });

        // Send JSON response
        res.end(JSON.stringify(data));
    } 
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("Route not found");
    }
}).listen(3004)
