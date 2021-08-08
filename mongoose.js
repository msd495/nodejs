/*
What is Schema?
>> "Mongoose Schema will create a mongodb collection and defines the shape of the documents within that collection".

>> If we want to create a mongodb collection in a structured manner similar to SQL tables then we can do that using mongoose Schema.

>> In the schema creation we will specify the details of fields like field name, its type, default value if need, index concept if need, constraint concept if need.

Models are the constructors compiled from our schema definitions".


Indexes
MongoDB indexes are defined at the collection level, and can be created on any field (or combination of fields) present in that collection’s documents.
 By default, MongoDB creates an index on the _id field. We can create additional indexes to support our application’s access patterns. This simply means that we should create indexes for fields that we commonly include in our queries. See here for more information on indexing strategies.


*/
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var con ;
var userSchema= new Schema({
    userid: {type:String, required:true, trim:true,index:true,unique:true},
    chips: {type:Number}
});

var userModel = mongoose.model('users',userSchema);
mongoose.set('useCreateIndex', true);


var cb = function(err){
    if(!err)
        console.log("Connection Opened");
    else
        console.log("Connection Opened Failed");
};
mongoose.connect("mongodb://127.0.0.1:27017/mongooseTutorial",{useNewUrlParser:true},cb);
con = mongoose.connection;

//saving a document
function insert(){
    var alex = new userModel({userid:'sowmya2',chips:10000,regdate:Date.now});
    alex.save(function(err,alex){
        if(err){
            console.log(err);
        }else{
            console.log("Document Save Done");
        }

    });

}


function Find(){
    var echoRecords =function(err,log){
        console.log("Total Records Found:"+log.length);
        for(var i=0;i<log.length;i++){
            console.log((i+1)+"\t"+log[i]._id+"\t"+log[i].userid+"\t"+log[i].chips);
        }
    };
    userModel.find(echoRecords);
}

function Update(){
    //update a document
    userModel.updateOne({userid:"sowmya2"},{chips:25000},function(err,log){
        console.log("Number of Records Effected"+JSON.stringify(log));
    });
}

Update()



//update a document
userModel.update({userid:"Alex"},{chips:25000},function(err,log){
    console.log("Number of Records Effected"+JSON.stringify(log));
    });
    
userModel.update({chips:{$lt:20000}},{chips:35000},{multi:true},function(err,log){
console.log("Number of Records Effected"+log);
});

//Removes a document
userModel.remove({userid:"Alex"},function(err,log){
console.log("Removes the documents with userId Alex");

});
//userModel.remove();//Removes all the documents of user collection

//Find One(Finds a single document by its _id field.)
userModel.findOne({_id:"57971362517cdfd0260a638c"},"chips,userid",
    function(err,data){if(!err) console.log(data);});

//findOneAndRemove() Issue a mongodb findAndModify remove command.
userModel.findOneAndRemove({_id:"57971362517cdfd0260a638c"},
    function(err,data){if(!err) console.log(data);});

//findByIdAndUpdate() 
userModel.findByIdAndUpdate("5797137d0856a7c41299e099",{chips:0},
function(err,data){if(!err) console.log(data);});

//count()Counts number of matching documents in a database collection.
userModel.count({},function(err,count){
	console.log("No Of Records in users Schema:"+count);
});
userModel.count({chips:{$lte:25000}},function(err,count){
	console.log("chips <=25000 :"+count);
});

//where(Creates a Query, applies the passed conditions, and returns the Query. )
userModel.where('chips').lt(10000);//Find the users having chips <10000 

userModel.where('chips').lt(10000).where('country').eq('USA');//Find the users having chips <10000 of Country 'USA'


