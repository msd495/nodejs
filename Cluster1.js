var cluster = require('cluster');
var http = require('http');
var os=require('os');
var numCPUs = os.cpus().length;
/*
if (cluster.isWorker) {
  console.log('I am a worker');
} else {
  console.log('I am a master');
  cluster.fork();
  cluster.fork();
}
*/

if (cluster.isMaster) {
    for (var i = 0; i < numCPUs; i++) {
    	console.log("This is "+(i+1)+" process with pid"+process.pid);//1st time
        cluster.fork();//4 times child process
    
    }
} else {//child process
    http.createServer(function(req, res) {
        res.writeHead(200);
        res.end('process ' + process.pid + ' says hello!');
    }).listen(8000);
}

