// write node js script to perform tack as ask .
// 1. create one page with tow hyperlinks about and details by clicking perticulerly it should open that page 
// 2. by requsting about page display welcome to about page in blue color when requeast details PAGE DISPLAY A JSON HAVING TOW KEY VALUE PAIRS
// 3. if user rqueasr any other page display page not found in red color.


var http = require('http');
var server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Home Page</h1>');
        res.write('<a href="/about">About</a><br>');
        res.write('<a href="/details">Details</a>');
        res.end();
    } 
    else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1 style="color:blue;">Welcome to About Page</h1>');
    } 
    else if (url === '/details') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var data = {
            id: 1,
            name: "Item Details"
        };
        res.end(JSON.stringify(data));
    } 
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1 style="color:red;">Page Not Found</h1>');
        res.end()
    }
}).listen(3000)