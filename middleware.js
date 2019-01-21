/*Middleware functions are functions that have access to the request object (req), 
the response object (res), 
and the next middleware function in the application’s request-response cycle. */
/*
Middleware functions can perform the following tasks:

Execute any code.
Make changes to the request and the response objects.
End the request-response cycle.
Call the next middleware function in the stack.
*/
var express = require('express');
var app = express()

app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})

app.use('/user/:id', function (req, res, next) {
    console.log('Request Type:', req.method)
    next()
  });

  var myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
  }
  
  app.use(myLogger)

  app.get('/user/:id', function (req, res, next) {
    console.log('ID:', req.params.id)
    next()
  }, function (req, res, next) {
    res.send('User Info')
  });

  //built in middleware 
  //express.static;express.json;express.urlencoded;
  //third party  middleware
  //cookie-parser
  //var express = require('express')
//var app = express()
//var cookieParser = require('cookie-parser')

// load the cookie-parsing middleware
app.use(express())

var server = app.listen(8082,'0.0.0.0',function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

})