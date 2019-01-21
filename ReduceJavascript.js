const arr=[20,30,40,50];

let result=arr.reduce(function(sum,item){

		return sum+item;
},30);

console.log(result);


let jsonarr=[{"name":"Ayush","marks":34},{"name":"Ankit","marks":49},{"name":"manish","marks":73},{"name":"ram","marks":69},{"name":"sumeet","marks":89}];

let jsonresult=jsonarr.reduce((sum,item) =>{

	return (sum +item.marks);
},10);

console.log(JSON.stringify(jsonresult));


//Map function in javascript
const integers=[1,2,3,4,5];
const twoXintegers=integers.map((i)=>i*2);
console.log(twoXintegers);

const posts = [
  {id: 1, title: 'Title 1'},
  {id: 2, title: 'Title 2'}
];
// find the title of post whose id is 1
const title = posts.find(item => item.id == 1 ).title;
console.log(title);



const integers = [1, 2, 3, 4, 6, 7];
const evenIntegers = integers.filter(i => i%2 === 0);
// evenIntegers are [2, 4, 6]

const books = ['Positioning by Trout', 'War by Green'];
const newBooks = [...books, 'HWFIF by Carnegie'];



const myId = 6;
const userIds = [1, 5, 7, 3, 6];
const allButMe = userIds.filter(id => id !== myId);


const books = [];
const newBook = {title: 'Alice in wonderland', id: 1};
const updatedBooks = [...books, newBook];

const user = {name: 'Shivek Khurana'};
const updatedUser = {...user, age: 23};

const posts = [
  {id: 1, title: 'Title 1'},
  {id: 2, title: 'Title 2'}
];
const updatedPosts = posts.map(p => p.id !== 1 ?
  p : {...p, title: 'Updated Title 1'}
);
/*
updatedPosts is now 
[
  {id: 1, title: 'Updated Title 1'},
  {id: 2, title: 'Title 2'}
];
*/


const posts = [
  {id: 13, title: 'Title 221'},
  {id: 5, title: 'Title 102'},
  {id: 131, title: 'Title 18'},
  {id: 55, title: 'Title 234'}
];
// to find index of element with id 131
const requiredIndex = posts.map(p => p.id).indexOf(131);

