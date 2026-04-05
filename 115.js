// Write node.js script to print “Welcome to Home Page” with two links 
// containing two pages named as “About Us” and “Contact Us” on 
// home page of server. If user request for About Us page it should 
// display “Welcome to LJ University” in bold font-style with blue 
// color and if user request for Contact Us page it should display 
// “Email:abc@ljinstitutes.edu.in” in italic font-style with red color if 
// any other request is requested it shows “Page not found” message in 
// plaintext.


import http from 'http';

// Create server
const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === "/" || url === "/home") {
        // Home page with links
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <html>
                <head><title>Home Page</title></head>
                <body>
                    <h1>Welcome to Home Page</h1>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </body>
            </html>
        `);

    } else if (url === "/about") {
        // About Us page
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1 style="color:blue; font-weight:bold;">Welcome to LJ University</h1>');

    } else if (url === "/contact") {
        // Contact Us page
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<p style="color:red; font-style:italic;">Email: abc@ljinstitutes.edu.in</p>');

    } else {
        // 404 Page
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
}).listen(3020)