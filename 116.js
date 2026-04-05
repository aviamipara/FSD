// Write a Node.js program using the HTTP module to create a server 
// that sends a JSON response when the user visits the /api route.
// The JSON object should contain:
// name as "Rahul", course as "NodeJS",status as "Enrolled"
// Set the appropriate header for JSON data and display "404 – Page 
// Not Found" for any other route.

import http from 'http';

// Create server
const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === "/api") {
        // JSON response
        const data = {
            name: "Rahul",
            course: "NodeJS",
            status: "Enrolled"
        };

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));

    } else {
        // 404 response
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 – Page Not Found');
    }
}).listen(3030)