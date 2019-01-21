//closure in javascript with currying in javascript

let addTo= (a)=>{

	let	add=(b)=>{
    	let sum=a+b;//a getting used beyond its scope..closure
      return sum;
    }
return add;

}


const first=addTo(5);
const second=first(2);
console.log(second);