var db= require('../dbConnection');

var Qualification={

    getAllQualification: function(callback){
        return db.query('select * from qualification', callback);
    },

    addQualification: function(qualification,callback){
        return db.query('insert into qualification values(?,?,?,?,?)', 
        [qualification.degree, qualification.institute,
            qualification.pyear,qualification.score,
            qualification.area], callback);
    },
    deleteQualification: function(id,callback){
        return db.query('delete from qualification where Id=?',[id],callback);
    },
    updateQualification: function(id,qualification,callback){
        return db.query('update qualification set degree=?, institute=?, pyear=?, score=?,area=? where Id=?',
        [qualification.degree, qualification.institute,
            qualification.pyear,qualification.score,
            qualification.area], callback); 
    }
};

module.exports= Qualification;