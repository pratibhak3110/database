var express= require('express');
var router= express.Router();
var skill= require('../Models/Skill');

router.get('/:id4?', function(req,res, next){
    if(req.params.id4){
        skill.getAllSkillById(req.params.id4, function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
    else{
    skill.getAllSkill(function(err, rows){
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
    skill.addSkill(req.body, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


router.delete('/:id4', function(req,res,next){
    skill.deleteSkill(req.params.id4, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.put('/:id4',function(req,res,next){
    skill.updateSkill(req.params.id4, req.body, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
}); 

module.exports= router;


