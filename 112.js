// Write node js script to fetch values from url given below and display output as asked.
// "https://www.google.com/exam.txt?c1=Hello&amp;c2=FSD2+T1+Test&amp;c3=
// Welcome+to+LJU#AllTheBest"
// 1) Data must be written as below in file named “exam.txt”. File name must be 
// fetched from
// the url given above.
// Output:
// Hello!
// Welcome to LJU FSD2 T1 Test
// #AllTheBest
// 2) Read content from file “exam.txt” and send response to server and display data in 
// “/” page
// in same format as above but in H1 tag and in red color.
// 3) If any other page is requested it shows “Page not found” message in plain text.

import http from 'http';
import fs from 'fs';
import { URL } from 'url';

// Given URL
const urlString = "https://www.google.com/exam.txt?c1=Hello&c2=FSD2+T1+Test&c3=Welcome+to+LJU#AllTheBest";

// Parse URL
const myURL = new URL(urlString);

// Get file name from URL
const fileName = myURL.pathname.split('/').pop(); // exam.txt

// Get query params
const c1 = myURL.searchParams.get('c1');
const c2 = myURL.searchParams.get('c2').replace(/\+/g, ' ');
const c3 = myURL.searchParams.get('c3').replace(/\+/g, ' ');

// Get hash
const hash = myURL.hash;

// Format output
const fileContent = `${c1}!\n${c3} ${c2}\n${hash}`;

// 1️⃣ Write data to file
fs.writeFileSync(fileName, fileContent);

// Create server
const server = http.createServer((req, res) => {

    if (req.url === "/") {
        // 2️⃣ Read file and send as HTML
        fs.readFile(fileName, 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end("Error reading file");
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });

                // Convert lines to H1 in red color
                const lines = data.split('\n');
                const html = lines.map(line => 
                    `<h1 style="color:red;">${line}</h1>`
                ).join('');

                res.end(html);
            }
        });

    } else {
        // 3️⃣ Other pages
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("Page not found");
    }
}).listen(3000)