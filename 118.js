// Write a Node.js script that uses the URL module to extract values 
// from the following URL:
// https://abc.com/data.txt?m1=Congrats&m2=Node+Test&m3=Best#D
// one
// The program should fetch the file name from the URL, create a file 
// with that name, and write the following content into the file using the 
// values from the URL:
// Congrats!
// Node Test
// #Done

import fs from 'fs';
import url from 'url';

// Given URL
const urlString = "https://abc.com/data.txt?m1=Congrats&m2=Node+Test&m3=Best#Done";

// Parse the URL
const parsedUrl = url.parse(urlString, true); // true converts query string to object

// Extract file name
const fileName = parsedUrl.pathname.split('/').pop(); // "data.txt"

// Extract query parameters
const m1 = parsedUrl.query.m1;               // "Congrats"
const m2 = parsedUrl.query.m2.replace(/\+/g, ' '); // "Node Test"

// Extract hash
const hash = parsedUrl.hash;                 // "#Done"

// Prepare file content
const content = `${m1}!\n${m2}\n${hash}`;

// Write content to file
fs.writeFile(fileName, content, (err) => {
    if (err) {
        console.error("Error writing file:", err);
    } else {
        console.log(`File "${fileName}" created successfully:\n${content}`);
    }
});