// Write node.js script to copy content of one file to the other file. data 
// should be fetched from source.txt and insert to destination.txt

const fs = require('fs');

fs.readFile('source.txt', 'utf8', (err, data) => {
    if (err) {
        console.log("Error reading file:", err);
        return;
    }

    fs.writeFile('destination.txt', data, (err) => {
        if (err) {
            console.log("Error writing file:", err);
            return;
        }

        console.log("File copied successfully!");
    });
});