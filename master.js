var cp = require('child_process');
var net = require('net');
// create tcp server listen to a port
var tcp = net.createServer();
tcp.listen(8000, function(){
    // detect cpu number, and fork child process
    for (var i=0;i< require('os').cpus().length; i++) {
        var worker = cp.fork('child.js');
        worker.send(i, tcp._handle);
    }
    tcp.close();
});