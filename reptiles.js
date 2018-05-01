var express = require('express');
var router = express.Router();


router.get('/about',function(req,res){

res.json({"message":"I am snake"});	
});


module.exports = router;