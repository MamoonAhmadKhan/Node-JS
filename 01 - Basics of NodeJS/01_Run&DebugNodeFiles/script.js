const fs = require("fs");
const { exec } = require("child_process");

const text1 = fs.readFileSync("./hello.txt");
const text2 = fs.readFileSync("/home/mamoon/Desktop/testing.txt");

fs.writeFileSync("./mamoon.txt", "Hii, I'm Mamoon Ahmad, an aspiring Software Engineer who is struggling to get a Placement !!");
const text3  =fs.readFileSync("./mamoon.txt");

console.log(text1.toString());
console.log(text2.toString());
console.log(text3.toString());

// exec('google-chrome'); // Execute any application with Node

// fs.unlinkSync("./temp.txt"); // Delete any file with Node

console.log("END");