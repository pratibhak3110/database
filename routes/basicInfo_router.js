var express= require('express');
var router= express.Router();
var basicinfo= require('../Models/BasicInfo');

router.get('/:id?', function(req,res, next){
    if(req.params.id){
        basicinfo.getBasicInfoById(req.params.id, function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
    else{
    basicinfo.getAllBasicInfo(function(err, rows){
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
    basicinfo.addBasicInfo(req.body, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

    router.put('/:id', function(req,res,next){
        basicinfo.updateBasicInfo(req.params.id, req.body, function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    });

    
    router.delete('/:id', function (req, res, next) {

        basicinfo.deleteBasicInfo(req.params.id, function (err, rows){
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    });


module.exports= router;


