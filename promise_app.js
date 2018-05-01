var Q=require('q');

function add(){
	var a,b,c;
	a=5;b=6;
	c=a+b;
	console.log("I am called before"+c);
}


function subtarct(){
    var a,b,c;
    a=5;b=6;
    c=b-a;
    console.log("Subtract");
}

var display_promise=Q.denodeify(add);

var promise=display_promise;

promise.then
{console.log("Addition completed");}


/*
var Promise = require('promise');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/EmployeeDB';
MongoClient.connect(url)

.then(function(db) {
    db.collection('Employee').insertOne({
        Employeeid: 4,
        EmployeeName: "NewEmployee"
    })

    .then(function(db1) {
        db1.collection('Employee').insertOne({
            Employeeid: 5,
            EmployeeName: "NewEmployee1"
        })
    })
});



//async file reading
fs.readFile('config.json',
    function (error, text) {
        if (error) {
            console.error('Error while reading config file');
        } else {
            try {
                const obj = JSON.parse(text);
                console.log(JSON.stringify(obj, null, 4));
            } catch (e) {
                console.error('Invalid JSON in file');
            }
        }
    });


readFilePromisified('config.json')
.then(function (text) { // (A)
    const obj = JSON.parse(text);
    console.log(JSON.stringify(obj, null, 4));
})
.catch(function (error) { // (B)
    // File read error or JSON SyntaxError
    console.error('An error occurred', error);
});

*/