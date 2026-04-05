// Write a Node.Js program for following action
// 1.	Write a file having five random elements separated by white 
// space in .txt file.
// 2.	append sorted array of these 5 elements in same file along with 
// message : “Sorted array:” in new line.
// 3.	Find maximum number from that and append with message 
// “maximum number=” in same file. 

const fs = require('fs');

// Step 1: Generate 5 random numbers
let numbers = [];
for (let i = 0; i < 5; i++) {
    numbers.push(Math.floor(Math.random() * 100)); // random 0–99
}

// Convert to string
let originalData = numbers.join(" ");

// Write to file
fs.writeFile('data.txt', originalData, (err) => {
    if (err) {
        console.log("Error writing file:", err);
        return;
    }

    console.log("Original data written:", originalData);

    // Step 2: Sort numbers
    let sorted = [...numbers].sort((a, b) => a - b);

    let sortedText = "\nSorted array: " + sorted.join(" ");

    // Append sorted array
    fs.appendFile('data.txt', sortedText, (err) => {
        if (err) {
            console.log("Error appending sorted data:", err);
            return;
        }

        // Step 3: Find maximum
        let max = Math.max(...numbers);

        let maxText = "\nmaximum number = " + max;

        // Append maximum number
        fs.appendFile('data.txt', maxText, (err) => {
            if (err) {
                console.log("Error appending max:", err);
                return;
            }

            console.log("All operations completed!");
        });
    });
});