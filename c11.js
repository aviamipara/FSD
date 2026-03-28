// Create HTTP webpage on which Home page display “Welcome to 
// Log in page” in blue color and font size must be 32px, Login page 
// shows one HTML file from static URL having Form with detail for 
// Username, Password, submit and reset button,   Gallery page   reflect 
// one Image “hello.jpg” and any other page shows “Page Not found”.  
// Write all necessary files to perform task. (Image already exist in same 
// folder)

var http = require('http');
var server = http.createServer((req, res) => {
    var url = req.url;
    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1 style="color:blue; font-size: 32px;">Welcome to Home Page</h1>');
        res.end();
    } 
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1 style="color:red;">Page Not Found</h1>');
        res.end()
    }
}).listen(8010)