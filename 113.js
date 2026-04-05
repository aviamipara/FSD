// Create HTTP webpage on which Home page display “Welcome to 
// Log in page” in blue color and font size must be 32px, Login page 
// shows one HTML file from static URL having Form with detail for 
// Username, Password, submit and reset button, Gallery page reflect 
// one Image “hello.jpg” and any other page shows “Page Not found”. 
// Write all necessary files to perform task. (Image already exist in same 
// folder)
import http from 'http';
import fs from 'fs';
import path from 'path';
import url from 'url';


// Create server
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const route = parsedUrl.pathname;

    if (route === "/" || route === "/home") {
        // Home page
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <html>
                <head>
                    <title>Home</title>
                </head>
                <body>
                    <h1 style="color:blue; font-size:32px;">Welcome to Log in page</h1>
                </body>
            </html>
        `);

    } else if (route === "/login") {
        // Serve login.html
        const filePath = path.join('.', 'login.html');
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end("Error loading login page");
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });

    } else if (route === "/gallery") {
        // Serve image gallery
        const imgPath = path.join('.', 'hello.jpg');
        fs.readFile(imgPath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end("Error loading image");
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`
                    <html>
                        <head><title>Gallery</title></head>
                        <body>
                            <h1>Gallery</h1>
                            <img src="data:image/jpeg;base64,${data.toString('base64')}" alt="hello">
                        </body>
                    </html>
                `);
            }
        });

    } else {
        // 404 Page
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("Page not found");
    }
}).listen(3009)
