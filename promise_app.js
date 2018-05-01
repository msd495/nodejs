var Q=require('q');


function add(){
	var a,b,c;
	a=5;b=6;
	c=a+b;
}

var display_promise=Q.denodify(add);

var promise=add;

promise.then
{console.log("Addition completed");}