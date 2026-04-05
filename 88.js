// Write a script to define two JSON objects named as “division1” and 
// “division2” having an array to store 5 integer numbers. Write this 
// object in a file named XYZ.txt using file system. Define third array 
// as result which gives output as explained below: Suppose first array 
// contains base value and second array contains power value and then 
// third array will give output as: a^b.For example: first array[0]=2 and 
// second array[0]=3 then it should return 8 in third array[0] .Also 
// append this result in XYZ.txt and as well as on console.


const fs = require('fs');

// Define JSON objects
let data = {
    division1: [2, 3, 4, 5, 6],   // base values
    division2: [3, 2, 1, 2, 3]    // power values
};

// Step 1: Write JSON object to file
fs.writeFile('XYZ.txt', JSON.stringify(data, null, 4), (err) => {
    if (err) throw err;

    console.log("Data written to file");

    // Step 2: Calculate result array (a^b)
    let result = [];

    for (let i = 0; i < data.division1.length; i++) {
        let base = data.division1[i];
        let power = data.division2[i];

        result.push(Math.pow(base, power));
    }

    console.log("Result Array:", result);

    // Step 3: Append result to file
    let resultText = "\nResult (a^b): " + result.join(" ");

    fs.appendFile('XYZ.txt', resultText, (err) => {
        if (err) throw err;

        console.log("Result appended to file");
    });
});


