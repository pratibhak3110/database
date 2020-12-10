var db= require('../dbConnection');

var PrevEmp={

    getAllPrevEmp: function(callback){
        return db.query('select * from prevemp', callback);
    },

    getAllEmpById: function(id3,callback){
        return db.query('select * from prevemp where emp_id=?',[id3], callback);
    },

    addPrevEmp: function(prevemp,callback){
        return db.query('INSERT INTO `prevemp`(`emp_id`, `fdate`, `tdate`, `companynm`, `designation`, `rexp`, `nrexp`) VALUES (?,?,?,?,?,?,?)', 
        [
            prevemp.emp_id, prevemp.fdate, prevemp.tdate,
            prevemp.companynm,prevemp.designation,
            prevemp.rexp,prevemp.nrexp,
           ], callback);
    },
    deletePrevEmp: function(id3,callback){
        return db.query('delete from prevemp where emp_id=?',[id3],callback);
    },
    updatePrevEmp: function(eid,prevemp,callback){
        return db.query('UPDATE `prevemp` SET `fdate`=?,`tdate`=?,`companynm`=?,`designation`=?,`rexp`=?,`nrexp`=? WHERE `emp_id`=? AND `Id`=?',
        [prevemp.fdate, prevemp.tdate,
            prevemp.companynm,prevemp.designation,
            prevemp.rexp,prevemp.nrexp,eid, prevemp.Id], callback); 
    }
};

module.exports= PrevEmp;