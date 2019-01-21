//design pattern in javascript
//factory pattern
let person=function(firstName,lastName){

let tmp={};

tmp.firstName=firstName;
tmp.lastName=lastName;
tmp.fullName=function(){
return this.firstName+" "+this.lastName;
}

return tmp;

}

const person1=new person("ayush","kumar");
console.log(person1.fullName());

//constructor pattern
function personConstructor(firstName,lastName){
this.firstName=firstName;
this.lastName=lastName;
  this.fullName=function(){
			return this.firstName+" "+this.lastName;
  }
}

const person2=new personConstructor("ayush","kumar");
console.log(person2.fullName());

//prototype pattern
let peopleproto=function(){

}
peopleproto.prototype.name="ayush";
peopleproto.prototype.age=13;
peopleproto.prototype.issueBook=function(){
  var firstName=this.firstName;
  var firstName=this.lastName;
  console.log("hello"+firstName+"age "+lastName);
}

const person3=new peopleproto('ayush','kumar');
person3.name="manish";
person3.age=13;
person3.issueBook();
console.log(person3.age);