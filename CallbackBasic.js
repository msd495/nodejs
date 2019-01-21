//callback in javascript

let callme=function(name){
	
		console.log("i am here"+name);
}

var otherFunction=function(name,callback){
	
		console.log("I am in another function");
    callback(name);
}

console.log(otherFunction("ayush",callme()));


let add=function(num1,num2){
	
	console.log("sum = "+ (num1+num2));
  
}

let subtract=function(num1,num2){

	console.log("difference is "+ num1-num2);
}


let calculate=function(num1,num2,callback){

	callback(num1,num2);
}

calculate(4,5,add);