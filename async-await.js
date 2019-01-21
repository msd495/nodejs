//using async and await
async function multiply(a,b){

	return a*b;
}

async function foo(){
	var result=await multiply(2,3);
	return result;
}

(async function(){
var result=await foo();
console.log(result);

})();