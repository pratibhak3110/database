var db= require('../dbConnection');

var PrevEmp={

    getAllPrevEmp: function(callback){
        return db.query('select * from prevemp', callback);
    },

    addPrevEmp: function(prevemp,callback){
        return db.query('INSERT INTO `prevemp`(`emp_id`, `fdate`, `tdate`, `companynm`, `designation`, `rexp`, `nrexp`) VALUES (?,?,?,?,?,?,?)', 
        [
            prevemp.emp_id, prevemp.fdate, prevemp.tdate,
            prevemp.companynm,prevemp.designation,
            prevemp.rexp,prevemp.nrexp,
           ], callback);
    },
    deletePrevEmp: function(id,callback){
        return db.query('delete from prevemp where emp_id=?',[id],callback);
    },
    updatePrevEmp: function(id,prevemp,callback){
        return db.query('update prevemp set fdate=?, tdate=?, companynm=?, designation=?,rexp=?,nrexp=? where emp_id=?',
        [prevemp.fdate, prevemp.tdate,
            prevemp.companynm,prevemp.designation,
            prevemp.rexp,prevemp.nrexp], callback); 
    }
};

module.exports= PrevEmp;