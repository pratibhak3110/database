var express= require('express');
var router= express.Router();
var qualification= require('../Models/Qualification');

router.get('/', function(req,res, next){
    qualification.getAllQualification(function(err, rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    }); 
});


router.post('/',function(req,res,next){
    qualification.addQualification(req.body, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


router.delete('/:id', function(req,res,next){
    qualification.deleteQualification(req.params.id, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.put('/:id',function(req,res,next){
    qualification.updateQualification(req.params.id, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
}); 

module.exports= router;


