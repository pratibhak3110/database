var express= require('express');
var router= express.Router();
var prevemp= require('../Models/PrevEmp');

router.get('/:id3?', function(req,res, next){
    if(req.params.id3){
        prevemp.getAllEmpById(req.params.id3, function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
    else{
    prevemp.getAllPrevEmp(function(err, rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    }); 
}
});


router.delete('/:id3', function(req,res,next){
    prevemp.deletePrevEmp(req.params.id3, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.put('/:id3',function(req,res,next){
    prevemp.updatePrevEmp(req.params.id3,req.body, function(err,rows){
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


