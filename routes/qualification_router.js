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



router.get('/:id2?', function(req,res, next){
    if(req.params.id2){
        qualification.getQualificationById(req.params.id2, function(err,rows){
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
    qualification.addQualification(req.body, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


router.delete('/:id2', function(req,res,next){
    qualification.deleteQualification(req.params.id2, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.put('/:id2?',function(req,res,next){
    qualification.updateQualification(req.params.id2,req.body, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
}); 

module.exports= router;


