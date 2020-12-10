var express= require('express');
var router= express.Router();
var permanantadd= require('../Models/PermanantAdd');

router.get('/:id3?', function(req,res, next){

    if(req.params.id3){
        permanantadd.getAllPermanantAddById(req.params.id3, function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        })
    }
    else{
    permanantadd.getAllPermanantAdd(function(err, rows){
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
    permanantadd.addPermanantAdd(req.body, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


router.put('/:id3', function(req,res,next){
    permanantadd.updatePermanantAdd(req.params.id3, req.body, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.delete('/:id3', function(req,res,next){
    permanantadd.deletePermanantAdd(req.params.id3, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
module.exports= router;


