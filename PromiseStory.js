let promiseToCleanRoom=new Promise(function(resolve,reject){

	let isClean=true;
  if(isClean){
  	resolve("it's clean");
  }
  else{
  	reject("it's not clean");
  }

});


let getPrize=function(){
 return new Promise(function(resolve,reject){

	resolve("hurray !!! i got prize");

	});
}
promiseToCleanRoom.then(function(msg){

	console.log ("AI bot is saying "+msg);
}).then(function(){
	return getPrize();
}).then(function(msg){
	console.log("finished"+msg)
})
/*
//async and await(uses promise internally)
//promise 
function getJSON(){

	return "hello";
}

const makeRequest=()=>{
	getJSON().then(function(data){
		console.log("data is "+data);
		return done;
	})
}


//using async and await
async function multiply(a,b){
	return a*b;
}

async function foo(){

	var result=await multiply(2,3);
	return result;
}
*/