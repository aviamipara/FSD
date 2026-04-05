// Write a node.js script to load a simple.html file on nodejs web server 
// & prints its contents as an html content. 

import http from 'http';
import fs from 'fs';

// Create server
const server = http.createServer((req, res) => {
    // Read HTML file
    fs.readFile('simple.html', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end("Error loading file");
        } else {
            // Send HTML response
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        }
    });
}).listen(3008)

