var fs=require('fs');
var str="";
let callback=function (err, data) {
    if (err) {
       return console.error(err);
    }
    
  };

  let callbackWrite=function(err,re) {
    if (err) {
       
       return console.error(err);
      
    }

 };
let readFile=function(){
    
        return new Promise(function(resolve,reject){

        fs.readFile('input.txt',callback);
        resolve("read done");
    });
}


let writeFile=new Promise(function(resolve,reject){

	fs.writeFile('input.txt', 'Hello guys..How r u ?',callbackWrite);
    resolve("write done");
});

writeFile.then(function(data){console.log(data);return readFile()}).then(function(data){
console.log(data);
});