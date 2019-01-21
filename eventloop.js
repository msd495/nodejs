// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function(a,b) {
   console.log('connection succesful.'+a+".."+b);//3rd line 
  
   // Fire the data_received event 
   eventEmitter.emit('data_received');//4th line //search book
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);//2nd line
 
// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function(){
   console.log('data received succesfully.');//5th line //

eventEmitter.emit('annual_day'); //pay book

});

eventEmitter.on('annual_day', function(){ //pay book
   console.log('Annual day completed');
});
// Fire the connection event 
eventEmitter.emit('connection',"hello","hii");//1st line //person enetred

console.log("Program Ended.");//6th line 