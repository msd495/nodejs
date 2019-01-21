let a=[1,2,3,2,5,1];

let b=[];

for(let i=0;i<a.length;i++){
  if(b.indexOf(a[i])== -1){
			b.push(a[i]);
  }
}

console.log(b);

//second method
let a=[1,2,3,2,5,1];

let obj={};

// using for of loop

for(let i of a){
	obj[i]=true;
}

console.log(Object.keys(obj));

//third method
let bset=new Set(a);

console.log([... bset]);

//Maps in javascript
//Maps in javascript
const a={}
const b={
	num:2
}

let map =new Map();
map.set(a,'a');
map.set(b,'b');


for(let[key,value] of map.entries()){
	console.log("key is "+key +"value is "+value);
}