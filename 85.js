// Write a NodeJS program to create a file named test.txt containing the 
// initial text "Exam attempt ". Then, it should add three more lines to 
// the file: "Entry 1: Pass", "Entry 2: Fail", and "Entry 3: Pass".
// After writing, the program must read the file and count how many 
// times the word "Pass" appears and if the word "Pass" appears three or 
// more times, the program should erase the content inside test.txt

const fs = require('fs');
const fileName = 'test.txt';

// Step 1: Create file with initial text
fs.writeFile(fileName, "Exam attempt\n", (err) => {
    if (err) throw err;

    // Step 2: Append 3 entries
    let entries = 
        "Entry 1: Pass\n" +
        "Entry 2: Fail\n" +
        "Entry 3: Pass\n";

    fs.appendFile(fileName, entries, (err) => {
        if (err) throw err;

        // Step 3: Read file
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) throw err;

            console.log("File Content:\n" + data);

            // Step 4: Count "Pass"
            let count = (data.match(/Pass/g) || []).length;
            console.log("Pass Count:", count);

            // Step 5: Check condition
            if (count >= 3) {
                // Erase file content
                fs.writeFile(fileName, "", (err) => {
                    if (err) throw err;
                    console.log("File content erased (Pass >= 3)");
                });
            } else {
                console.log("Condition not met, file not erased");
            }
        });
    });
});