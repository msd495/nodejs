
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();

var birds = require('C:\\Users\\kumara213\\Desktop\\nodejs-master\\nodejs-master\\birds');
var reptiles = require('C:\\Users\\kumara213\\Desktop\\nodejs-master\\nodejs-master\\reptiles');

//var urlencodedParser = bodyParser.urlencoded({ extended: false }); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//app.use(express.static('public'));
app.get('/', function (req, res) {
   //res.sendFile( __dirname + "/public/html/" + "index.html" );
   res.sendFile( __dirname + "/index.html" );
});



app.get('/getAllBooks/getbook',function(req,res){
//read a file logic (books.json)
console.log(req.query);

var data=[{"name":"harry-potter","author":"xxxx","isbn":"44444"},
{"name":"harry-potter","author":"xxxx","isbn":"44444"},
{"name":"harry-potter","author":"xxxx","isbn":"44444"},
{"name":"harry-potter","author":"xxxx","isbn":"44444"}];

res.json(data);

});

//To use router function

app.use('/birds',birds);
app.use('/reptiles',reptiles);

//call the api using  http://127.0.0.1:8080/birds/about

app.post('/login',function(req,res){

//console.log(req.url);
res.json({"message":"Welcome to Node.js session"});
});



app.post('/process_login',function (req, res) {
   // Prepare output in JSON format
   //console.log("email"+req.query.emailid);
   response = [{
      usrname:req.body.usrname,
      passwd:req.body.passwd
   }];
   console.log(response);

   var obj={};
   obj.name=response[0].usrname;
   obj.value=response[0].passwd;
   
   //res.end("Welcome, "+response.usrname+" you have successfully logged innn.");
   res.json(obj);
});

//output:{"name":"input","value":input passowrd}



var server = app.listen(8087,'0.0.0.0',function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

})


/*
"dependencies": {
    "body-parser": "~1.12.4",
    "cookie-parser": "~1.3.5",
    "debug": "~2.2.0",
    "express": "~4.12.4",
    "jade": "~1.9.2",
    "morgan": "~1.5.3",
    "serve-favicon": "~2.2.1",
    "mongodb": "^1.4.4",
    "monk": "^1.0.1"
}
*/