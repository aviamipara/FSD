// Write a Node.js program to CRUD operation of file management. 
// 1)Create folder named "Hello". 
// 2) Create file in it named abc.txt and enter data in to it. 
// 3) Add more data at last in file. 
// 4) Read data without getting buffer data at first. 
// 5) rename file 
// 6) Delete both file and folder.


const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'Hello');
const filePath = path.join(dirPath, 'abc.txt');

// 1) Create folder "Hello"
fs.mkdir(dirPath, (err) => {
    if (err) {
        console.log("Folder may already exist");
    } else {
        console.log("Folder created");
    }

    // 2) Create file and write data
    fs.writeFile(filePath, "This is initial data\n", (err) => {
        if (err) throw err;
        console.log("File created and data written");

        // 3) Append more data
        fs.appendFile(filePath, "This is appended data\n", (err) => {
            if (err) throw err;
            console.log("Data appended");

            // 4) Read file (without buffer)
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) throw err;
                console.log("File Content:\n" + data);

                // 5) Rename file
                const newFilePath = path.join(dirPath, 'newabc.txt');
                fs.rename(filePath, newFilePath, (err) => {
                    if (err) throw err;
                    console.log("File renamed");

                    // 6) Delete file
                    fs.unlink(newFilePath, (err) => {
                        if (err) throw err;
                        console.log("File deleted");

                        // Delete folder
                        fs.rmdir(dirPath, (err) => {
                            if (err) throw err;
                            console.log("Folder deleted");
                        });
                    });
                });
            });
        });
    });
});