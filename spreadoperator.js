const codeburst = 'CODEBURST'; // Line 1
const characters = [ ...codeburst ]; // Line 2
// [ 'C', 'O', 'D', 'E', 'B', 'U', 'R', 'S', 'T' ]


const items=["javascript","is","too","cool"];
console.log(items);
console.log(...items);

const numbers=[1,2,3,4,5,6];
console.log(...numbers);

const obj = { name: 'Foo', age: 22 };
const newObj = { ...obj }
console.log(newObj)
// { name: 'Foo', age: 22 }


const obj1 = { firstName: 'Foo', age: 22 };
const obj2 = { lastName: 'Bar', gender: 'M' };
const newObj = { ...obj1, ...obj2, planet: 'Earth' };
console.log(newObj)
// { firstName: 'Foo', age: 22, lastName: 'Bar', gender: 'M', planet: 'Earth' }

const details = { firstName: 'Code', lastName: 'Burst', age: 22 };
const { firstName, age } = details;
console.log(firstName, age);

//Rest operator
const details = {
    firstName: 'Code',
    lastName: 'Burst',
    age: 22
};
const { age, ...restOfTheDetails } = details;
console.log(age, restOfTheDetails);