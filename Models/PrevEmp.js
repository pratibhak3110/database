var db= require('../dbConnection');

var PrevEmp={

    getAllPrevEmp: function(callback){
        return db.query('select * from prevemp', callback);
    },

    addPrevEmp: function(prevemp,callback){
        return db.query('insert into prevemp values(?,?,?,?,?,?)', 
        [prevemp.fdate, prevemp.tdate,
            prevemp.companynm,prevemp.designation,
            prevemp.rexp,prevemp.nrexp,
           ], callback);
    },
    deletePrevEmp: function(id,callback){
        return db.query('delete from prevemp where Id=?',[id],callback);
    },
    updatePrevEmp: function(id,prevemp,callback){
        return db.query('update prevemp set fdate=?, tdate=?, companynm=?, designation=?,rexp=?,nrexp=? where Id=?',
        [prevemp.fdate, prevemp.tdate,
            prevemp.companynm,prevemp.designation,
            prevemp.rexp,prevemp.nrexp], callback); 
    }
};

module.exports= PrevEmp;