var express= require('express');
var router= express.Router();
var presentadd= require('../Models/PresentAdd');

router.get('/', function(req,res, next){
    presentadd.getAllPresentAdd(function(err, rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    }); 
});


router.post('/',function(req,res,next){
    presentadd.addPresentAdd(req.body, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.delete('/:id', function(req,res,next){
    presentadd.deletePresentaddAdd(req.params.id, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.put('/:id',function(req,res,next){
    presentadd.updatePresentaddAdd(req.params.id, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
}); 

module.exports= router;


