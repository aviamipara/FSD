// Write a node js script to write the text “You are creating a file” to 
// help.txt file. After that append the text “you are appending data” to 
// same help.txt file. After that read the file and print file contents on 
// console. After finishing read operation , print the line “Thanks for 
// using my program” on console. write ,append,read sequence must be 
// maintain. all read ,write and append operations are asynchronous.
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