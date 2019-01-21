var express = require('express');
var app = express();//creating a object for express
var cors = require('cors');

app.use(cors());

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "table.html" );
});


app.get('/api',function(req,res){

res.json({"name":"hello"});
});


app.post('/batch1', function (req, res) {
   res.json({"message":"hii ,how are you?"});
})

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});


var first_function=function (req, res) {
   //console.log("Got a GET request for the homepage"+ typeof(req.params.id));
   var num1=parseInt(req.params.num1);
   var num2=parseInt(req.params.num2);
   var operation=req.params.oper;
   console.log("Got a GET request for the homepage"+ num1+"num2.."+num2+"num3..."+operation);
   if(operation == "add"){
	   console.log("here");
	   res.json({"operation":"add","result":(num1+num2)});
   }
   
};


app.get('/callme/:num1/:num2/:oper', first_function);

// This responds a POST request for the homepage
app.get('/postjson', function (req, res) {
   console.log("Got a POST request for the homepage");
   var json_format=[

   {"Name":"Santos","Town":"Bhopal","Residence":"BTM layout"},
   {"Name":"Shubashish","Town":"Rourkela","Residence":"Sony Signal"},
   {"Name":"Vibhash","Town":"Mujaffarpur","Residence":"Kormangala"},
   {"Name":"Ranjana","Town":"Bangalore","Residence":"Mysore"},
   {"Name":"Ayush","Town":"Patna","Residence":"Hebbal"},

   ];

   res.json(json_format);
})

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
   console.log("Got a DELETE request for /del_user");
   res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
   console.log("Got a GET request for /list_user");
   res.send('Page Listing');
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {   
   console.log("Got a GET request for /ab*cd");
   res.send('Page Pattern Match');
})

var server = app.listen(8089,'0.0.0.0',function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})