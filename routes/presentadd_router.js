var express= require('express');
var router= express.Router();
var presentadd= require('../Models/PresentAdd');


router.get('/:id2?', function(req,res, next){
    if(req.params.id2){
        presentadd.getAllPresentAddById(req.params.id2, function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        })
    }
    else{
    presentadd.getAllPresentAdd(function(err, rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    }); 
 }
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


router.delete('/:id2', function(req,res,next){
    presentadd.deletePresentaddAdd(req.params.id2, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.put('/:id2', function(req,res,next){
    presentadd.updatePresentaddAdd(req.params.id2, req.body, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});



module.exports= router;


