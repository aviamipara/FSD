// Write a Node.js program that uses the URL module to parse query 
// parameters from the following URL:
// http://localhost:3000/?name=yen&course=NodeJS
// The server should extract the values of name and course and display 
// them in the browser response.
// Explain how the url.parse() method is used to retrieve query 
// parameters

import http from 'http';
import url from 'url';

// Create server
const server = http.createServer((req, res) => {
    // Parse the URL of the request
    const parsedUrl = url.parse(req.url, true); // 'true' parses query string into an object

    // Extract query parameters
    const query = parsedUrl.query;
    const name = query.name || "Guest";
    const course = query.course || "Unknown";

    // Send response
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<h1>Hello ${name}, you are enrolled in ${course}</h1>`);
}).listen(3040)