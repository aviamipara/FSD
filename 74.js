// Write a node.js script to write the text “This is data” to new.txt file. 
// After that append the text “That is data” to same new.txt file. After 
// that read the file & print the file content on console. After finishing 
// read operation print the line “Thank you for using program”. Write, 
// append & read sequence must be maintained & all operations are 
// synchronous.

const fs = require('fs');

// Step 1: Write to file
fs.writeFile('help.txt', 'You are creating a file\n', (err) => {
    if (err) {
        console.log("Error writing file:", err);
        return;
    }

    // Step 2: Append to file
    fs.appendFile('help.txt', 'You are appending data\n', (err) => {
        if (err) {
            console.log("Error appending file:", err);
            return;
        }

        // Step 3: Read file
        fs.readFile('help.txt', 'utf8', (err, data) => {
            if (err) {
                console.log("Error reading file:", err);
                return;
            }

            // Print file content
            console.log("File Content:\n" + data);

            // Step 4: Final message
            console.log("Thanks for using my program");
        });
    });
});