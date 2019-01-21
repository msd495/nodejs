x=2;
var x;
console.log("result is "+x);

console.log("1");
setTimeout(function(){console.log("2");},0);
console.log("3");

const c=2;

function hello1(){
	const c=5;
    console.log("c is "+c);
}
hello1();
console.log("c val is "+c);

console.log("1");
foo();
console.log("3");
function foo(){
console.log("2");
}

console.log("sss"+callme);
var callme="ayush";//hoisting

var callme1="ayush";
console.log("sss"+callme1);//normal

var callme2;
console.log("sss"+callme2);
callme2="ayush";


function helloa(){
	console.log("val"+a);
	var a=3;
}
helloa();

console.log("sss"+callme3);
let callme3="ayush";//in case of let varibale will not be hoisted 

hello();
//function declaration
function hello(){
    console.log("hello");
}

hello_callme();
//function expression
var hello_callme=function(){
    console.log("hello");
}//error


var hello_callme=function hello(){
    console.log("hello");
}
hello_callme();


