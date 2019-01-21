var fs = require("fs");//class
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('input.txt');

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(readStreamData) {
   data += readStreamData;
   console.log("1st event");
});

readerStream.on('end',function(){
   console.log("data "+data);
   console.log("2nd event");
});

readerStream.on('error', function(err){
   console.log(err);
});

console.log("Program Ended");

/*
var fs = require("fs");
var data = 'Don't you feel Javascript and Node.js is awesome';

// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

// Write the data to stream with encoding to be utf8
writerStream.write(data,'UTF8');

// Mark the end of file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on('finish', function() {
    console.log("Write completed.");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Program Ended");

*/