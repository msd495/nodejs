//rather than iterating on array and then performing the desired task .Its better to use functional programming to acheive the 
//same thing
const arr=[1,2,3,4];
const removelast = arr.pop();
console.log("Removing last  "+removelast);
const removeFirst = arr.unshift();
console.log("Remove first  "+removeFirst);
const addLast=arr.push(5);
console.log("After add and remove "+addLast);
const addFirst=arr.unshift(0);
console.log("After first  "+addFirst);
const addAndRemove=arr.slice(1,1,'added');
console.log("After add and remove "+addAndRemove);


//Modifying every element in a array 

const prices=[5,10,15,20];

const halfPrices=prices.map(price => price/2);

const nums=[1,2,3,4,5]
const newNums=nums.map(n => n%2==0?n+1:n);
console.log("new nums is "+newNums);

// copy array without mutating it 
const arr=[1,2,3,4,5,6,7];
const newArr=arr;
newArr[0]=5;
//in this case both the arrays will change as objects are copied by reference not value 
//now will copy array without mutating it 
const newArr1=[... arr];

//find in array

const firstLargerThan=arr.find(n => n>3)
console.log("first larger than 3 is "+firstLargerThan);

//get the array in return
const largerThan=arr.filter(n => n>3)
//will return [4,5]

//check whether element is in array or npt
const people=["Ayush","Ankit","Priya"];
const hasPriya=people.includes("Priya");//will return true

//populate an array of emptiness

const arr= new Array();
arr.fill(0);

//sort is broken..wtf
const sorted=arr.sort();
//sort function only sorts string

arr.sort((a,b)=>a-b);// sorts the array ascending
arr.sort((a,b)=> b-a);//sorts the array descending


//reverse a string
const str="ayush";
const revesredString=str.split("").reverse().join();

//some ways to loop in array
const arr=[1,2,3,4,5,6];

//functional way 
arr.forEach((val,index,array)=>{
    coonsole.log(val,index);
});

for(let key in arr){
    console.log(key);//0,1,2
}

for(let val of arr){
    console.log(val);
}
