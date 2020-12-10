var db= require('../dbConnection');

var Qualification={

    getAllQualification: function(callback){
        return db.query('select * from qualification', callback);
    },
    getQualificationById: function(id2, callback){
        return db.query('select * from qualification where emp_id=?',[id2], callback);
    },

    addQualification: function(qualification,callback){
        return db.query('INSERT INTO `qualification`(`emp_id`, `degree`, `institute`, `pyear`, `score`, `area`) VALUES(?,?,?,?,?,?)', 
        [
           qualification.emp_id, qualification.degree, qualification.institute,
            qualification.pyear,qualification.score,
            qualification.area], callback);
    },
    deleteQualification: function(id2,callback){
        return db.query('delete from qualification where emp_id=?',[id2],callback);
    },
    updateQualification: function(qid,qualification,callback){
        return db.query('UPDATE `qualification` SET `degree`=?,`institute`=?,`pyear`=?,`score`=?,`area`=? WHERE `emp_id`=? AND `Id`=?',
        [qualification.degree, qualification.institute,
            qualification.pyear,qualification.score,
            qualification.area,qid,qualification.Id], callback); 
    }
};

module.exports= Qualification;