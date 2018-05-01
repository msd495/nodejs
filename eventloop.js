// Import events module
var events = require('events');
var express=require('express');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function() {
   console.log('connection succesful.');//3rd line 
  
   // Fire the data_received event 
   eventEmitter.emit('data_received');//4th line
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);//2nd line
 
// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function(){
   console.log('data received succesfully.');//5th line 

eventEmitter.emit('annual_day');

});

eventEmitter.on('annual_day', function(){
   console.log('Annual day completed');
});
// Fire the connection event 
eventEmitter.emit('connection');//1st line

console.log("Program Ended.");//6th line 