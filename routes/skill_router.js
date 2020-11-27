var express= require('express');
var router= express.Router();
var skill= require('../Models/Skill');

router.get('/', function(req,res, next){
    skill.getAllSkill(function(err, rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    }); 
});


router.post('/',function(req,res,next){
    skill.addSkill(req.body, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


router.delete('/:id', function(req,res,next){
    skill.deleteSkill(req.params.id, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.put('/:id',function(req,res,next){
    skill.updateSkill(req.params.id, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
}); 

module.exports= router;


