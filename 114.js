// Write node.js script to print “Welcome Admin” on home page of 
// server. If user request for second page it display “This is second 
// page” in italic font-style and if any other request is requested it 
// shows “Page not found” message.

import http from 'http';

// Create server
const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === "/" || url === "/home") {
        // Home page
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Welcome Admin</h1>');

    } else if (url === "/second") {
        // Second page
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<p style="font-style: italic;">This is second page</p>');

    } else {
        // 404 Page
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
}).listen(3010)