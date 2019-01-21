var http = require('http');

var http_server=function (req, res) {
	
    res.writeHead(200, {'Content-Type': 'application/json'});
    var res_data={"movie_name":"ddlj","Descrption":"It is my best movie."};
    res.end(JSON.stringify(res_data));
	
};//function expression
console.log("server is ready");
http.createServer(http_server).listen(8083);//method chaining

