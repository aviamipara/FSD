// Write a function 'ArrayToObject' which takes in an array of arrays, 
// and returns an object with each pair of elements in the array as a keyvalue pair and store the result in one arraytoobject.txt file.
// Input=[['Country', India'], ['State', 'Gujarat'], ['City', ‘Ahmedabad’]]
// Output= { Country : ' India ', State : ' Gujarat ', City : 
// ‘Ahmedabad’ }

const fs = require('fs');

// Function to convert array → object
function ArrayToObject(arr) {
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        let key = arr[i][0];
        let value = arr[i][1];
        obj[key] = value;
    }

    return obj;
}

// Input
let input = [
    ['Country', 'India'],
    ['State', 'Gujarat'],
    ['City', 'Ahmedabad']
];

// Convert
let result = ArrayToObject(input);

// Convert object to string format
let output = JSON.stringify(result, null, 4);

// Write to file
fs.writeFile('arraytoobject.txt', output, (err) => {
    if (err) {
        console.log("Error writing file:", err);
        return;
    }

    console.log("Data written to file successfully!");
});