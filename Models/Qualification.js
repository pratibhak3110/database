var db= require('../dbConnection');

var Qualification={

    getAllQualification: function(callback){
        return db.query('select * from qualification', callback);
    },
    getQualificationById: function(id, callback){
        return db.query('select * from qualification where emp_id=?',[id], callback);
    },

    addQualification: function(qualification,callback){
        return db.query('INSERT INTO `qualification`(`emp_id`, `degree`, `institute`, `pyear`, `score`, `area`) VALUES(?,?,?,?,?,?)', 
        [
           qualification.emp_id, qualification.degree, qualification.institute,
            qualification.pyear,qualification.score,
            qualification.area], callback);
    },
    deleteQualification: function(id,callback){
        return db.query('delete from qualification where emp_id=?',[id],callback);
    },
    updateQualification: function(id,qualification,callback){
        return db.query('update qualification set degree=?, institute=?, pyear=?, score=?,area=? where emp_id=?',
        [qualification.degree, qualification.institute,
            qualification.pyear,qualification.score,
            qualification.area], callback); 
    }
};

module.exports= Qualification;