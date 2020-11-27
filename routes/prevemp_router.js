var express= require('express');
var router= express.Router();
var prevemp= require('../Models/PrevEmp');

router.get('/', function(req,res, next){
    prevemp.getAllPrevEmp(function(err, rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    }); 
});


router.delete('/:id', function(req,res,next){
    prevemp.deletePrevEmp(req.params.is, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.put('/:id',function(req,res,next){
    prevemp.updatePrevEmp(req.params.is, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
}); 


router.post('/',function(req,res,next){
    prevemp.addPrevEmp(req.body, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports= router;


