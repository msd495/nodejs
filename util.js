
let express = require('express');
let router = express.Router();


router.get('/about',function(req,res){
    res.json({"message":"Hey ,calling utility function"});
});


router.get('/contact',function(req,res){

    res.json({"message":"Hey ,My favourite bird is parrot"});
});



module.exports = router;
