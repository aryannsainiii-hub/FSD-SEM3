const fs = require("fs");

//create
fs.writeFileSync("file.txt","hello student");

//read
const data = fs.readFileSync("data.txt","utf-8");

//update
fs.appendFileSync("data.txt","hello student");

//read updated data
console.log(fs.readFileSync("data.txt","utf-8"));

//delete
fs.unlinkSync("data.txt");

console.log("file deleted");