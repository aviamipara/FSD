// Write a node.js script using Event handling to perform following 
// tasks in sequence:
// a) Create file in it named abc.txt and enter data into it.
// b) Append data to that file abc.txt and print message “Data Appended 
// Successfully”.
// c) Read the content of the file abc.txt and print the content on http 
// web server.
// d) Do all the operations of File using asynchronous file system 
// module. And Lastly print the message “All operations performed 
// successfully” on console

const fs = require('fs');
const http = require('http');
const EventEmitter = require('events');

const event = new EventEmitter();
const fileName = 'abc.txt';

// a) Create file and write data
event.on('createFile', () => {
    fs.writeFile(fileName, "This is initial data\n", (err) => {
        if (err) throw err;
        console.log("File created successfully");

        event.emit('appendFile');
    });
});

// b) Append data
event.on('appendFile', () => {
    fs.appendFile(fileName, "This is appended data\n", (err) => {
        if (err) throw err;

        console.log("Data Appended Successfully");

        event.emit('readFile');
    });
});

// c) Read file and serve on HTTP server
event.on('readFile', () => {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) throw err;

        // Create HTTP server
        http.createServer((req, res) => {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write(data);
            res.end();
        }).listen(3000, () => {
            console.log("Server running at http://localhost:3000");
        });

        // Final message
        console.log("All operations performed successfully");
    });
});

// Start sequence
event.emit('createFile');