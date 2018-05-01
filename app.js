
//This is example of synchronus programming.
var fs = require("fs");

/*
var data = fs.readFileSync('input.txt');

console.log(data.toString());

console.log("This is synchronus programming.");
*/


var callme=function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
};

fs.readFile('input.txt',callme);

console.log("There is something unusual here,and that is because of asynchronus programming.");
