let MongoClient = require('mongodb').MongoClient;

const url = "mongodb://127.0.0.1:27017/newDb";

const express= require('express');
let app =express();

function connect(){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        console.log("Database created!");
        db.close();
    });
}

function createCollection(){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        let dbase = db.db("newDb");
        dbase.createCollection("customers", function(err, res) {
            if (err) throw err;
            console.log("Collection created!");
            db.close();
        });
    });
}

function insertOne(){

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        let dbase = db.db("newDb");
        var myobj = { name: "Company Inc", address: "Highway 37" };
        dbase.collection("customers").insertOne(myobj, function(err, res) {
            if (err){
                throw err;
                return -1
            }
            console.log("1 document inserted");
            db.close();
        });
    });
}

async function getData(db){
    let dbase = db.db("newDb");
    let data=[]
    try{
        let res= await dbase.collection("customers").find({}).toArray();
        console.log("res is ",res)
        data.push(res)
    }catch (err) {
        console.log(err);
    } finally {
        db.close();
    }
    return data;
}

async function findOne(){
    const client = await MongoClient.connect(url, { useNewUrlParser: true })
        .catch(err => { console.log(err); });

    if (!client) {
        return;
    }
    return await getData(client)
}

app.get('/findOne',async function (req,res) {
    const result=await findOne();
    console.log(" result is ",result)
    res.send(result)
})

app.post('/creatDb',function (req,res) {
    connect()
})

app.post('/insertOne',function (req,res) {
    const dt=insertOne()
    dt!==-1?res.send("inserted"):res.send("Failed")

})

app.post('/creatCollection',function (req,res) {
    createCollection()
    res.send({"msg":"colelction created"})
})

app.listen(3001, () => {
    console.log(`Express server atarted`);
})
/*
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});



MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});



MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = { name: "Company Inc", address: "Highway 37" };
  db.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});





MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = [

   {"Name":"Santosh","Town":"Bhopal","Residence":"BTM layout"},
   {"Name":"Shubashish","Town":"Rourkela","Residence":"Sony Signal"},
   {"Name":"Vibhash","Town":"Mujaffarpur","Residence":"Kormangala"},
   {"Name":"Ranjana","Town":"Bangalore","Residence":"Mysore"},
   {"Name":"Ayush","Town":"Patna","Residence":"Hebbal"},
   {"Name":"Priyanka","Town":"Bhopal","Residence":"BTM"}

   ];
  db.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});



MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("customers").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});


	MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});


Return the fields "name" and "address" of all documents in the customers collection:
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("customers").find({}, { _id: false, name: true, address: true }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});



MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myquery = { address: 'Mountain 21' };
  db.collection("customers").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myquery = { address: /^O/ };
  db.collection("customers").deleteMany(myquery, function(err, obj) {
    if (err) throw err;
    console.log(obj.result.n + " document(s) deleted");
    db.close();
  });
});


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myquery = { address: "Valley 345" };
  var newvalues = { name: "Mickey", address: "Canyon 123" };
  db.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});


Update all documents where the name starts with the letter "S"
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myquery = { address: /^S/ };
  var newvalues = {$set: {name: "Minnie"} };
  db.collection("customers").updateMany(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log(res.result.nModified + " document(s) updated");
    db.close();
  });
});


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("customers").find().limit(5).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

Delete the "customers" table:

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("customers").drop(function(err, delOK) {
    if (err) throw err;
    if (delOK) console.log("Collection deleted");
    db.close();
  });
});



//get unique record using node.js
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection('movie', function(err, collection) {
          collection.distinct('name',function(err, item) {
          console.log("item:" + JSON.stringify(item));

          db.close();
     });
    });
});

//Insert unique record
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
   db.collection('books').ensureIndex({"name":1},{unique:true},function(error,result){
  if(error){
    console.log("error");
    }
  console.log(result);
});
});


*/
