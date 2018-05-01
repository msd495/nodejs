
var cluster = require('cluster');
var http = require('http');
var numCPUs = 4;

if (cluster.isMaster) {
    for (var i = 0; i < numCPUs; i++) {
    	console.log("This is "+(i+1)+" process with pid"+process.pid);
        cluster.fork();
    }
} else {
    http.createServer(function(req, res) {
        res.writeHead(200);
        res.end('process ' + process.pid + ' says hello!');
    }).listen(8000);
}


/*
var cluster = require('cluster');

if (cluster.isWorker) {
  console.log('I am a worker');
} else {
  console.log('I am a master');
  cluster.fork();
  cluster.fork();
}
*/