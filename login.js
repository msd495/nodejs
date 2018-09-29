
var express = require('express');
var app = express();
var router = express.Router();

var birds = require('D:\\Node.js-zenrys\\NodeApp\\birds');
var reptiles = require('D:\\Node.js-zenrys\\NodeApp\\reptiles');


//app.use(express.static('public'));
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/public/html/" + "index.html" );
});


//To use router function

app.use('/birds',birds);//call the api using  http://127.0.0.1:8080/birds/about
app.use('/reptiles',reptiles);


var server = app.listen(8085,'0.0.0.0',function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

})


