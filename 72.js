// Write a node.js script to write contents to the file in original manner. 
// Delete file after finishing writing

const fs = require('fs');

let content = `This is original content
Written using Node.js
Line 3 remains same`;

// Write content to file
fs.writeFile('temp.txt', content, (err) => {
    if (err) {
        console.log("Error writing file:", err);
        return;
    }

    console.log("File written successfully!");

    // Delete file after writing
    fs.unlink('temp.txt', (err) => {
        if (err) {
            console.log("Error deleting file:", err);
            return;
        }

        console.log("File deleted successfully!");
    });
});